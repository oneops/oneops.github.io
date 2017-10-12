---
layout: user-doc
title: Secrets Client Component
---

The _secrets client_ [component](./components.html) exposes files containing
secrets such as property files with password, keystore files, ssh keys and 
others on the filesytem of each compute of a platform.

The mount point is `/secrets` and exposes the secret files on a tmpfs
filesystem. Access can be limited by configuring _User_ and _Group_ ownership.

Currently only Linux-based computes are supported.

The secrets are managed via the
[OneOps Secrets Proxy](../account/secrets-proxy.html) and stored in a Keywhiz
server. OneOps users can interact with the proxy to manage their secret files
using the [OneOps Secrets CLI](#oneops-secrets-cli). 

Secrets are synchronized to the computes every 30 seconds and can be
[accessed via normal filesystem operation in your application](#secret-access).

Typical step necessary to start using the secrets client component are:

- identify files that contain secrets
- provision them to the Keywhiz server using the
[OneOps Secrets CLI](#oneops-secrets-cli)
- add the `secrets client` component to the relevant platform in design
- pull the design changes to the desired environments
- release and deploy the environments to operation
- modify the [secret access](#secret-access) to load from the new location


## OneOps Secrets CLI

The OneOps Secrets CLI is a command line tool that allows a user to manage their
secret files in the [OneOps Secrets Proxy](../account/keywhiz-proxy.html).

### Downloading and Installing

Download the latest version of the CLI from the Central Repository at
[http://repo1.maven.org/maven2/com/oneops/secrets-cli](http://repo1.maven.org/maven2/com/oneops/secrets-cli)
and locate the latest version in the above folder. Then download the file
named `secrets-cli-*-executable.jar`, rename it to secrets and add it to your _PATH_.

For example:

```
mkdir ~/bin
cd ~/bin
curl -o secrets http://repo1.maven.org/maven2/com/oneops/secrets-cli/1.0.3/secrets-cli-1.0.3-executable.jar
chmod +x secrets
export PATH=~/bin;$PATH
```

Now you can run the application using the command. By default it will display
the available options and commands:

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

Note that if the secrets application does not work on your operating system, you
can download the`secrets-cli-*-uber.jar` and use it with

```
java -jar secrets-cli-1.0.3-uber.jar 
```

Apart from the different invocation, the command behaves identically.

### Authenticating and Access

TBD, use your oneops user credentials, somehow detail the URL for the oneops
instance or the OneOps Secrets Proxy, 
Explain who has access to what

login with oneops username/password
configure parameters.

### Adding, Updating and Deleting Secrets

TBD, how to do that, how to specify org, assembly and env



## Secret Access

With the secrets client component in place all your secrets are available via
standard filesystem operations.

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

### Java

Java offers numerous ways to load files and secrets. The following example loads
a properties file from `/opt/myapp/conf/access.properties`.

```java
String configPath = "/opt/myapp/conf/access.properties"";
 
Properties props = new Properties();
props.load(new FileInputStream(configPath));
```

To change the loading to use the secrets location, simply change the configPath
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

and the values are avaiable at `config.username` and `config.password`.

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
