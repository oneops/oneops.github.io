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

Secrets are synchronized to the computes every 30 seconds and can be accessed
file normal filesystem operation in your application. 

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

tbd, use your oneops user credentials, somehow detail the URL for the oneops
instance or the OneOps Keywhiz proxy server, 
Explain who has access to what


### Adding, Updating and Deleting Secrets

tbd, how to do that, how to specify org, assembly and env


