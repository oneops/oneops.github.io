---
layout: admin-doc
title: Installing OneOps with Vagrant
---

## Introduction

OneOps installation with [Vagrant](http://www.vagrantup.com) is a convenient,
automated process. Vagrant can be used to
install OneOps on a variety of virtual machine runtime environments. The following instructions detail the
process for an installation with [VirtualBox](https://www.virtualbox.org/) on your local machine.

## Prerequisites

- <a href="https://www.virtualbox.org/" target="_blank">VirtualBox 5 or newer</a>
- <a href="https://www.vagrantup.com/" target="_blank">Vagrant 1.7.4 or newer</a>
- <a href="https://git-scm.com/" target="_blank">Git</a>
- Modern operating system as required for VirtualBox and Vagrant
- Minimum of 12Gb memory, 16Gb or more recommended
- Minimum of 40Gb disk storage
- Minimum of 4 CPU cores, 8 core or more recommended
- Internet connection that allows access to GitHub and a number of repositories

## Installation Process

After you have installed the prerequisites, you can proceed with the installation process:

Clone the OneOps `oneops` repository from GitHub:

{% highlight shell %}
git clone https://github.com/oneops/oneops
{% endhighlight %}

or

{% highlight shell %}
git clone git@github.com:oneops/oneops.git
{% endhighlight %}

And build OneOps from source with the `vargrant` profile as 
[documented in our developer section](../../developer/core-development/index.html).

## Next Steps

- Proceed with the [user configuration of an organization, clouds and more](/user/).

## Managing the OneOps VM

Vagrant can be used to manage the OneOps VM after the installation with
executing commands.

Suspend the VM

{% highlight shell %}
vagrant suspend
{% endhighlight %}

and subsequently start it again with

{% highlight shell %}
vagrant resume
{% endhighlight %}

Alternatively you can use `halt` and `up` for a clean shutdown:

{% highlight shell %}
vagrant halt
{% endhighlight %}

and later a reboot:

{% highlight shell %}
vagrant up
{% endhighlight %}

In order to inspect the VM content itself, you can connect via SSH with vagrant.

Find further information about the vagrant command with ```vagrant help``` as well
as in the [Vagrant documentation](https://www.vagrantup.com/docs/).


