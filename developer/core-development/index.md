---
layout: dev-doc
title: Getting Started with Core Development
---

__Core development__ is all about development on any component of the 
__OneOps application__ stack itself.

All source code for the various components is [available on GitHub]({{
site.github_url }}).

The OneOps build relies on Unix scripts and should work on OSX and Linux
operating systems versions.

- [Prerequisites](#prereqs)
- [Building](#build)
- [Vagrant Setup](#vagrant)
- [Database Schema](#db)
- [Versioning and Releasing](#release)
- [Common Issues and Tips](#tips)

<a name="prereqs"/>
## Prerequisites

The following tools are required to build and run OneOps on a local developer
machine.

Must have:

- [Java Development Kit 8 from Oracle](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
- [Apache Maven 3.5.0](http://maven.apache.org) (unless included Maven wrapper is used)
- [Git](https://git-scm.com/downloads)
- [Ruby 2.0.0](https://www.ruby-lang.org/en/downloads/), potentially via using [RVM](https://rvm.io/)
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

<a name="build"/>
## Building

Fork and clone the [oneops source repository](https://github.com/oneops/oneops)
and run a build with the Maven wrapper in the created `oneops` directory:

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

<a name="vagrant"/>
## Vagrant Setup

By default the Vagrant instance automatically includes all configuration of
packs and more from
[circuit-oneops-1](http://github.com/oneops/circuit-oneops-1).

If you want to make this Oneops instance use a modified circuit code on your
host machine then you need to create shared folders and set up the inductor
component to use it instead. You also need to install the circuit to update the
CMS database.  Below is a modified vagrant file to setup inductor to use our
circuit-oneops-1 code and to install the circuit. A similar approach can be
taken with other, potentially additional circuits.

```
$script = <<SCRIPT
  echo "configuring inductor to use circuit-oneops-1"
  cd /opt/oneops/inductor

  echo "removing existing circuit-oneops-1 and shared symlinks"
  sudo unlink circuit-oneops-1
  sudo rm -Rf shared

  echo "creating symlinks to shared folders"
  sudo ln -s /Some/Path/On/Vagrant/circuit-oneops-1 circuit-oneops-1

  echo "circuit-oneops-1: circuit install"
  cd /opt/oneops/inductor/circuit-oneops-1
  circuit install

  echo "script completed successfully"
SCRIPT

Vagrant.configure(2) do |config|

 config.vm.box = "oneops"

 # Use the vagrant-cachier plugin, if installed, to cache downloaded packages
  if Vagrant.has_plugin?("vagrant-cachier")
    config.cache.scope = :box
  end

  config.vm.network "forwarded_port", guest: 3001, host: 3003
  config.vm.network "forwarded_port", guest: 3000, host: 9090
  config.vm.network "forwarded_port", guest: 8080, host: 9091
  config.vm.network "forwarded_port", guest: 8161, host: 8166

 config.vm.provider "virtualbox" do |vb|
   vb.gui = false
   vb.memory = 6144
   vb.customize ["modifyvm", :id, "--cpuexecutioncap", "70"]
  end

  config.vm.synced_folder "/Some/Path/On/Host/circuit-oneops-1", "/Some/Path/On/Vagrant/circuit-oneops-1",owner: "root",group: "root"

  config.vm.provision "shell", inline: $script
end
```

<a name="db"/>
## Database Schema

OneOps uses a PostgreSQL database for model storage. Some information about the
model is available in the [relations documentation](./relations.html).

<a name="release"/>
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

<a name="tips"/>
## Common Issues and Tips

If you encounter problems installing postgresql on OSX you may need to use brew.

```
brew update
brew install postgresql
gem install pg -v '0.17.0'
```

If the mvn commands above give you any trouble. Then make sure you are in the
top level folder of the
[oneops source repository](https://github.com/oneops/oneops) clone and run

```
./mvnw clean package -Pvagrant
```

