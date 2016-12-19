---
layout: admin-doc
title: Installing OneOps with Vagrant
---

# Introduction

OneOps installation with [Vagrant](http://www.vagrantup.com) is a convenient, automated process. Vagrant can be used to
install OneOps on a variety of virtual machine runtime environments. The following instructions detail the
process for an installation with [VirtualBox](https://www.virtualbox.org/) on your local machine.

# Prerequisites

- <a href="https://www.virtualbox.org/" target="_blank">VirtualBox 5 or newer</a>
- <a href="https://www.vagrantup.com/" target="_blank">Vagrant 1.7.4 or newer</a>
- <a href="https://git-scm.com/" target="_blank">Git</a>
- Modern operating system as required for VirtualBox and Vagrant
- Minimum of 12Gb memory, 16Gb or more recommended
- Minimum of 40Gb disk storage
- Minimum of 4 CPU cores, 8 core or more recommended
- Internet connection that allows access to GitHub and a number of repositories

# Installation Process

After you have installed the prerequisites, you can proceed with the installation process:

Clone the OneOps `setup` repository from GitHub:

{% highlight shell %}
git clone https://github.com/oneops/setup
{% endhighlight %}

or

{% highlight shell %}
git clone git@github.com:oneops/setup.git
{% endhighlight %}

Alternatively you can [download the repository as a zip file](https://github.com/oneops/setup/archive/master.zip)
from the repository on GitHub and extract it.

Start the installation process with vagrant

{% highlight shell %}
cd setup/vagrant-centos7
vagrant up
{% endhighlight %}

The setup process takes at least 20 minutes and preforms numerous steps including:

- Install all required components.
- Set up minimal data set.
- Bootstrap circuits from [circuit-oneops](https://github.com/oneops/circuit-oneops-1/)

A successful installation ends with a message similar to

{% highlight shell %}
==> default: OneOps installation completed."
==> default: The user interface is ...."
==> default: All done at : 15:28:54
{% endhighlight %}

At this stage the OneOps web application is up and running on the VM with the web apllication available on port 3000.
It is mapped to port 9090 on the host machine.

Go to [http://localhost:9090](http://localhost:9090) to access the user interface and start by signing up for an
account.

# Next Steps

- Checkout out the [troubleshooting section](/admin/testing/), if something went wrong.
- Proceed with the [user configuration of an organization, clouds and more](/user/overview).

# Managing the OneOps VM

Vagrant can be used to manage the OneOps VM after the installation with executing commands in the
`setup/vagrant-centos7` directory.

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

In order to inspect the VM content itself, you can connect via SSH with vagrant. The following example connects
and then checks the status of the [inductor](/admin/references/inductor.html) component of OneOps.

{% highlight shell %}
vagrant ssh
sudo su
cd /opt/oneops/inductor
inductor status
inductor tail
{% endhighlight %}

Find further information about the vagrant command with ```vagrant help``` as well as in the
[Vagrant documentation](https://www.vagrantup.com/docs/).

# Demo

The video below showcases a quick installation and initial configuration of OneOps:

<iframe src="https://player.vimeo.com/video/154112203" width="200 " height="253" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


