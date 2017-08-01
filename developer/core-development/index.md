---
layout: dev-doc
title: Getting Started with Core Development
---

__Core development__ is all about development on any component of the 
__OneOps application__ stack itself.

All source code for the various components is [available on GitHub]({{ site.github_url }}).

The OneOps build relies on Unix scripts and should work on OSX and Linux operating systems versions.

## Prerequisites

The following tools are required to build and run OneOps on a local developer machine.

Must have:

- [Java Development Kit 8 from Oracle](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
- [Apache Maven 3.5.0](http://maven.apache.org) (unless included Maven wrapper is used)
- [Git](https://git-scm.com/downloads)
- [Ruby](https://www.ruby-lang.org/en/downloads/)
- [Gems](https://rubygems.org/pages/download)
- [Packer](https://packer.io)
- [Bundler](http://bundler.io/)
- [graphviz](http://www.graphviz.org/)
- PostgreSQL 9.2 development file (libpg)
- [Virtual Box](https://www.virtualbox.org/)
- [Vagrant](https://www.vagrantup.com/)

Nice to have:

- Favorite IDE like EclipseIDE or STS
- Some Git UI
- And so on ...

## Building

Fork and clone the [oneops source repository](https://github.com/oneops/oneops)
and run a build with the Maven wrapper  in the created `oneops` directory:

```shell
cd oneops
./mvnw clean install
````

or directly with Maven, if you have it installed already.

```shell
cd oneops
mvn clean install
```

The build compiles, tests and builds all packages. 

If you want to run OneOps after a build, you can use the `vagrant` profile
during a build. It creates all necessary configuration for Vagrant to spin up
the newly built OneOps in a VirtualBox virtual machine.

```shell
mvn install -P vagrant
```

After a successful build with the profile you can find the necessary files for 
starting a VM with OneOps running in the `~/.oneops/vagrant` directory and start
the VM from there.

```shell
cd ~/.oneops/vagrant/
vagrant up
```

Once the VM is up and running, you can access the OneOps user interface at 
[http://localhost:9090](http://localhost:9090).

Subsequently you can `suspend` or `halt` the VM with vagrant or use the
VirtualBox user interface as desired. Refer to the Vagrant and VirtualBox
documentation for further information.

## Database Schema

OneOps uses a PostgreSQL database for model storage. Some information about the
model is available in the [relations documentation](./relations.html).

## Versioning And Releasing

The OneOps project uses a version scheme of yy.mm.dd-enumerator, e.g. 
17.08.02-01 and in development 17.08.02-01-SNAPSHOT.

The version can be manually updated to a new value such as 
`17.08.09-01-SNAPSHOT` with

```
mvn versions:set -DgenerateBackupPoms=false -DnewVersion="17.08.09-01-SNAPSHOT"
```

Automated CI builds increase the enumerator and are used to create releases with
the Maven release plugin via

```
mvn release:prepare release:perform
```



