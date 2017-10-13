---
layout: user-doc
title: Secrets Client Component
---

The _secrets client_ [component](./components.html) exposes files containing
secrets such as property files with password, keystore files, ssh keys and
others on the file system of each compute of a platform.

The mount point is `/secrets` and exposes the secret files on a tmpfs file
system. Access can be limited by configuring _User_ and _Group_ ownership.

Currently only Linux-based computes are supported.

The secrets are managed via the
[OneOps Secrets Proxy](../account/secrets-proxy.html) and stored in a Keywhiz
server. OneOps users can interact with the proxy to manage their secret files
using the [OneOps Secrets CLI](#oneops-secrets-cli).

Secrets are synchronized to the computes every 30 seconds and can be
[accessed via normal file system operation in your application](#secret-access).

Typical step necessary to start using the secrets client component are:

- identify files that contain secrets
- prepare your [OneOps security configuration](#security-config)
- provision secrets using the [OneOps Secrets CLI](#secrets-cli)
- update your [OneOps assembly](#assembly)
- modify the [secret access](#secret-access) to load from the new location

<a name="security-config"/>
## OneOps Security Configuration

Access to secrets for a particular organization or assembly in OneOps is managed
via membership in teams:

- Create a team in your organization named `secrets-admin`, or for
assembly-specific access named `secrets-admin-<assembly-name>`.
- Add the _Assembly Permissions_ to to allow modifications in _design_ and
_transition_.
- Add the _User Members_ or _Group Members_ as desired.
- Add the team to the assemblies where you want to use secrets.

<a name="secrets-cli"/>
## OneOps Secrets CLI

The OneOps Secrets CLI is a command line tool that allows a user to manage their
secret files in the [OneOps Secrets Proxy](../account/keywhiz-proxy.html).

### Downloading and Installing

Download the latest version of the CLI from the Central Repository at
[http://repo1.maven.org/maven2/com/oneops/secrets-cli](http://repo1.maven.org/maven2/com/oneops/secrets-cli)
and locate the latest version in the above folder. Then download the file named
`secrets-cli-*-executable.jar`, rename it to secrets and add it to your _PATH_.

For example:

```
mkdir ~/bin
cd ~/bin
curl -o secrets http://repo1.maven.org/maven2/com/oneops/secrets-cli/1.0.3/secrets-cli-1.0.3-executable.jar
chmod a+x secrets
export PATH=~/bin;$PATH
```

Now you can run the application using the command `secrets info` as a first
test:

```
$ secrets info
OneOps Secrets CLI: v1.0.3 
Built on 2017-10-04 11:12:57 PM UTC
```

Note that if the secrets application does not work on your operating system, you
can download the`secrets-cli-*-uber.jar` and use it with

```
java -jar secrets-cli-1.0.3-uber.jar 
```

Apart from the different invocation, the command behaves identically.

To configure the secrets CLI to access your specific OneOps and OneOps secret
proxy instances securely, you need to configure the URLs, the truststore and the
truststore password and expose them as environment variables:

```
export SECRETS_PROXY_BASEURL=<secrets proxy url>
export SECRETS_PROXY_TRUSTSTORE=file:<secrets proxy pkcs12 trust store file path>
export SECRETS_PROXY_TRUSTSTORE_PASSWD=<changeit>
export ONEOPS_BASEURL=<oneops_url>
```

Alternatively your organization can build a binary with the necessary
configuration embedded and make it available for download to your users.

### Adding Secrets

With the secrets CLI configured, you can now add a secrets file such as
`access.properties` to a specific environment in the chosen assembly.

```
secrets add -u <username> -a <application> -d <description> access.properties
```

The `username` value is your username in OneOps. Execution triggers a prompt for
the password.

The `application` is the concatenated value from your organization name, the
assembly name and the name of the environment separated by underscore -
`orgname_assemblyname_envname`. E.g. for the `qa` environment in the `petstore`
assembly within the `training` organization the application value to use is
`training_petstore_qa`.


### Other Operations

The secrets CLI supports numerous other operations that are listed via a
built-in help accessible via an invocation without parameters:

```
$ secrets 
usage: secrets <command> [<args>]
The most commonly used secrets commands are:
    add        Add secret for an application.
    clients    Show all clients for the application.
    delete     Delete a secret.
    details    Get a client/secret details of an application.
    get        Retrieve secret from vault.
    help       Display help information
    info       Show OneOps Secrets CLI version info.
    list       List all secrets for the application.
    log        Tail (no-follow) secrets cli log file.
    revert     Revert secret to the given version index.
    update     Update an existing secret.
    versions   Retrieve versions of a secret, sorted from newest to oldest update time.

See 'secrets help <command>' for more information on a specific command.
```

Detailed help for each command is available via the help command e.g. 

```
$ NAME
        secrets add - Add secret for an application.

SYNOPSIS
        secrets add -a <Application name> -d <Description> [-n <Secret name>]
                [-u <User>] [-v] [--] <Secrets file>

OPTIONS
        -a <Application name>
            OneOps App name (org_assembly_env), which you have secret-admin
            access
...
```

<a name="assembly"/>
## Update OneOps Assembly

Now that the secrets are available via the proxy and security configuration is
completed, you can edit your assembly to access them:

- add the `secrets client` component to the relevant platform in design
- pull the design changes to the desired environments
- release and deploy the environments to operation

Once the deployment is completed you can verify that everything is working by
accessing a compute via SSH and checking the contents of the `/secrets` folder.
It contains all the secrets added for the specific environment of the assembly.

## Secret Access

With the secrets client component in place, all your secrets are available via
standard file system operations.

Typically applications load the secrets during their startup procedure. As a
consequence, you need to restart the application after any relevant secret
changes. Alternatively, you can implement a polling for secrets and automatic
reloading.

### Configuration Files

If your application loads configuration files to access secrets, you can simply
manage those files with the secrets proxy and then update the reference to load
those files.

For example, if the default location is configured to use
`/opt/myapp/conf/access.properties`, change it to e.g.
`/secrets/access.properties`.

If this is not possible you might be able to use symbolic links to the files as
an alternative.

### Java

Java offers numerous ways to load files and secrets. The following example loads
a properties file from `/opt/myapp/conf/access.properties`.

```java
String configPath = "/opt/myapp/conf/access.properties"";
 
Properties props = new Properties();
props.load(new FileInputStream(configPath));
```

To change the loading to use the secrets location, simply change the `configPath`
variable value to e.g. `/secrets/access.properties`.

### NodeJS

NodeJS can, for example, load JSON formatted properties file with the `require`
function and you can simply change the path to the file.

For example with the `config.json` file of

```
{
  username: "admin"
  password: "mNQTic8mUtYLtdm"
}
```

Loading the content can be achieved with

```
var config = require('./config/config.json');
```

and the values are available at `config.username` and `config.password`.

Changing this to use the secret storage, is as simple as changing the path:

```
var config = require('/secrets/config.json');
```

### Python

Reading a secret file in Python can use the standard `open` function with the
path to the `/secrets` mount.

```
open("/secrets/my-mysql-passwd").read()
```
