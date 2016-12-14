---
layout: admin-doc
title: Installing OneOps Vagrant Image
---

Install OneOps using vagrant from [here](https://github.com/oneops/setup)

>Note : As an **admin** you will be responsible for primarily installing OneOps in your **organization** or also responsible for setting up cloud and services The steps described to create an assembly, platform refers to [User](/user/overview/) section.


## Outline

2. Setup Vagrant [here](#vagrant-up)
1. Set up *clouds* as detailed in [the documentation](/user/getting-started/index.html#create-cloud) or check out the screen cast below. 
   1. Create Clouds
   1. Create Cloud Services
       1. Compute Cloud Service
       2. DNS Cloud Service
       3. GNS Cloud Service
  1. Create Assembly
       1. Create Platform
       2. Create Environment
       3. Deploy an Environment


# Vagrant up

1. Install the required software for Vagrant.
   1. [Virtal Box 5](https://www.virtualbox.org/).
   2. [Vagrant](https://www.vagrantup.com/)
2. Execute the following

~~~ bash
   git clone https://github.com/oneops/setup
   cd setup/vagrant
   vagrant up
~~~

The setup does the following :

  * Installs all required software see <a href="/admin/key-concepts/index.html#oneops-system-architecture">here</a>
  * Sets up minimal data set required for OneOps to work.
  * Clones, Builds and Deploys all the required components to run <a href="/admin/key-concepts/index.html#oneops-system-architecture">OneOps</a>
  * Bootstraps the  circuits from [circuit-oneops](https://github.com/oneops/circuit-oneops-1/)

~~~ bash
# After the successful install, you will see this in console.
  ==> default: Done with admin
  ==> default: OneOps should be up on http://localhost:3000
  ==> default: Configure your port forwarding and shut down iptables service (or configure it) if needed
  ==> default: All done at : 15:28:54
~~~

If step fails refer <a href="/admin/testing/">troubleshooting</a>.

> UI should be up [here](http://localhost:9090/users/sign_in).

# Set Up your Organization, Clouds, Cloud Services  

* Refer <a href="/user/getting-started/index.html#create-cloud">User</a> or see screen cast below.

# Check Inductor <a href="/admin/key-concepts/index.html#inductor">Inductor</a>

> This section is for informative purpose only, The vagrant image has pre-installed and configured inductor ready to
execute workorder.


Inductor executes the **workoders/actionOrders** pushed by **controller** to
cloud location specified at cloud creation. Refer <a href="/admin/references/inductor.html">this</a> for overall flow.

## Log on to Vagrant Image

~~~ bash
vagrant ssh
sudo su
cd /opt/oneops/inductor
inductor status
inductor tail
## should show inductor successfuly connected to amq.

~~~

## Inductor directory Structure
>The directory structure after you have created inductor successfully will look like this,

~~~ bash
cd /opt/oneops/inductor
├── circuit-oneops-1 -> /home/oneops/build/circuit-oneops-1 from (https://github.com/oneops/circuit-oneops-1)
├── clouds-available # All inductor which are created will go in this
│   └── public.oneops.clouds.aws
├── clouds-enabled
│   └── public.oneops.clouds.aws -> ../clouds-available/public.oneops.clouds.aws
├── Gemfile
├── Gemfile.lock
├── init.d
│   └── inductor
├── lib
│   └── client.ts
├── log
└── shared ## Refer (https://github.com/oneops/oneops-admin/tree/master/lib/shared)
    ├── cookbooks
    ├── exec-gems.yaml
    ├── exec-order.rb
    └── hiera.yaml

~~~

# Validate Set up

Create Assembly, Platforms and environment to test it out. Refer <a href="/user/getting-started/">User</a>
Or
See screen cast below (might work better on the full screen, we are working on improving this).


<iframe src="https://player.vimeo.com/video/154112203" width="200 " height="253" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

