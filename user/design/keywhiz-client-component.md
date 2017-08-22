---
layout: user-doc
title: Keywhiz Client Component
---

The _Keywhiz client_ [component](./components.html) exposes files containing
secrets such as property files with password, keystore files, ssh keys and 
others on the filesytem of each compute of a platform.

The default _Secrets mount_ point is `/secrets` and exposes the secret files on
a normal filesystem. Access can be limited by configuring _User_ and _Group_
ownership. 

Currently on Linux-based computes are supported.

The secrets are managed via the
[OneOps Keywhiz Proxy](../account/keywhiz-proxy.html) and stored in a Keywhiz
server. OneOps users can interact with the proxy to manage their secret files
using the [Keywhiz Proxy CLI](#keywhiz-proxy-cli). 

Secrets are synchronized to the computes every 30 seconds and can be [accessed
file normal filesystem operation in your application](#secret-access).

Typical step necessary are:

- identify files that contain secrets
- provision them to the Keywhiz server using the [Keywhiz Proxy CLI](#keywhiz-proxy-cli)
- add the keywhiz client component to the relevant platform in design
- pull the design changes to the desired environments
- release and deploy the environments to operation
- modify the [secret access](#secret-access) to load from the new location


## Keywhiz Proxy CLI

The Keywhiz Proxy CLI is a command line tool that allows a user to manage their
secret files in the [OneOps Keywhiz Proxy](../account/keywhiz-proxy.html).

### Downloading and Installing

Download the latest version of the CLI from the Central Repository at
[http://repo1.maven.org/maven2/com/oneops/keywhiz-proxy-cli](http://repo1.maven.org/maven2/com/oneops/keywhiz-proxy-cli)
and locate the latest version in the above folder. Then download the file
named `keywhiz-proxy-cli-*-uber.jar`, rename it to keywhiz-client and add it to
your _PATH_.

For example:

```
mkdir ~/bin
cd ~/bin
curl -o keywhiz-proxy-cli http://repo1.maven.org/maven2/com/oneops/keywhiz-proxy-cli/1.0./keywhiz-proxy-cli-1.0.14-uber.jar
chmod +x keywhiz-proxy-cli
export PATH=~/bin;$PATH
```

Now you can run the application with

```
keywhiz-proxy-cli
```

### Authenticating and Access

TBD, use your oneops user credentials, somehow detail the URL for the oneops
instance or the OneOps Keywhiz proxy server, 
Explain who has access to what


### Adding, Updating and Deleting Secrets

TBD, how to do that, how to specify org, assembly and env



## Secret Access

With the keywhiz client component in place all your secrets are available via
standard filesystem operations.

Typically applications load the secrets during their startup procedure. As a
consequence, you need to restart the application after any relevant secret
changes. Alternatively, you can implement a polling for secrets and automatic
reloading.

### Configuration Files

If your application loads configuration files to access secrets, you can simply
manage those files with the Keywhiz proxy and then update the reference to load
those files. 

For example, if the default location is configured to use 
`/opt/myapp/conf/access.properties`, change it to e.g.
`/secrets/access.properties`.

### Java

Java offers numerous ways to load files and secrets. The following example loads
a properties file from `/opt/myapp/conf/access.properties`.

```
String configPath = "/opt/myapp/conf/access.properties"";
 
Properties props = new Properties();
props.load(new FileInputStream(configPath));
```

To change the loading to use the Keywhiz location simply change the configPath
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
