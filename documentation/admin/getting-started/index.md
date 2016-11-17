---
layout: admin-doc
title: Getting Started
id: "getting-started"
---

To get started with OneOps installation , you can start with

1. Getting Started with OneOps public [AMI](#geting-started-with-oneops-public-ami)
2. Use [Vagrant](#installing-vagrant-image)

# Getting Started with OneOps public AMI

If you have an AWS account you can bring up a basic version of OneOps using the public AMI. (Right now it's available in US east region). This image has some basic configurations already in place.


## Find OneOps public image

On your EC2 Dashboard make sure you have selected the N.Virginia region
in the IMAGES/AMIs tab, and make sure you select "Public images" in the drop down and search for OneOps. The image with the name OneOps-basic-preconf-v1.* is the right one (pick the latest version).

## Launch your instance

1. On the `Choose AMI` tab select the OneOps AMI and hit Launch. </br>
2. On the `Instance Type` tab make sure you select m4.large or bigger. OneOps needs at least 8GB of RAM. </br>
3. On the `Instance Details` tab if you want a public IP enable Auto-assign Public IP. </br>
4. On the `Add Storage` tab make sure you have 2 volumes. </br>
5. On the `Tag Instance` tab name your instance </br>
6. On the `Configure Security Group` tab a add rule to open port 3000. OneOps UI is a Rails app and runs on this port in development mode so you can check logs and see what's going on under the hood.</br>
7. On the `Review` tab hit launch. When the instance comes up, in your browser go to http://your-public-ip:3000
</br>
If login page comes up you are ready to go, login as oneops/oneops
If not - check the [troubleshooting](#troubleshooting) section.

## Login into OneOps
The AMI has a preregistered user *oneops/oneops* within the organization `OneOps`. We have also created simple assembly called **SimpleApache**. You can start browsing around. </br>
But if you want to deploy this test assembly to EC2 cloud you need to provide your credentials.

##	Configure Cloud

In the left nav click on Clouds - you will be taken to the list of clouds configured in the system.</br>

![EC2 home page ](/assets/docs/local/images/GettingStartedEC2HomePage.png)

The one we have created for you is aws-east-1. Click on it and go to the cloud detail page.
On the right hand side you will see the list of services this cloud provides. </br>

![EC2Cloud Home ](/assets/docs/local/images/GettingStartedEC2Cloud.png)


For each one of them you will have to provide your access key and secret key.
* Make sure this user has the appropriate permissions to manage cloud services (EC2, Route53 as the case may be)

Yes you will have to do it for each one of them which is pain, but what if you want to use services from different providers :-)



![Getting started EC2 Service](/assets/docs/local/images/GettingStartedEC2Service.png)

## Deploy Simple Assembly

We have pre-created a simple assembly named *SimpleApache*. This assembly has just one Apache platform with all
out-of-the-box default configuration values. You can examine it by clicking Assemblies (left nav) and then on SimpleApache. This will take you to the Assembly summary page which will have nothing since no activity has been performed on this assembly yet. Click on "Design" (left nav) and you will get to the Assembly Design page where you can review platforms your assembly is composed of (just one in this case). If you click on the platform you will get to the "Platform Design Page". Just browse around.
Next step is to try to deploy this simple assembly: </br>

Go to "transition" page (left nav). You will see there is one environment already pre-created call `test-env`. Click on it and get to the Environment detail page. There is same one platform here as it was in design, but it's in the disabled state, in order to deploy it you need to enable it. In little drop down menu you can do this.

![EC2 Enable Platform](/assets/docs/local/images/GettingStartedEC2EnablePlatform.png)

Next step commit your changes and deploy:

![EC@ Commit and Deploy](/assets/docs/local/images/GettingStartedEC2CommitAndDeploy.png)

The system will generate the deployment plan with steps that will be executed. Review them and hit deploy:

![EC2 Deploy](/assets/docs/local/images/GettingStartedEC2Deploy.png)

While the deployment is in progress you can click on the steps to expand to work orders (one step can have multiple work orders). Here you can click on the log link to see what's going under the hood. Once the deployment is complete you can go to the operations page and examine what you have there. Also check your EC2 dashboard to see the result.

## Troubleshooting

 * <a href="/documentation/admin/testing/index.html">Trouble connecting to port 3000</a>
 * <a href="/documentation/admin/testing/index.html">Deployment fails</a>
 * Not here, look <a href="/documentation/admin/testing/index.html">here</a>
 * We can help :<span class="button icon-slack"><a href="{{ site.slack_url }}" target="_blank">{{ site.slack_channel }}</a></span>


# Installing Vagrant Image
Install OneOps using vagrant from [here](https://github.com/oneops/setup)

>Note : As an **admin** you will be responsible for primarily installing OneOps in your **organization** or also responsible for setting
up cloud and services The steps described to create an assembly,platform refers to [User](/documentation/user.html) section.


## Outline

2. Setup Vagrant [here](#vagrant-up)
1. Set up *clouds*. Refer screen cast below. For more details refer to <a href="/documentation/user/getting-started/index.html">user</a>
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

  * Installs all required software see <a href="/documentation/admin/key-concepts/index.html">here</a>
  * Sets up minimal data set required for OneOps to work.
  * Clones, Builds and Deploys all the required components to run <a href="/documentation/admin/key-concepts/index.html">OneOps</a>
  * Bootstraps the  circuits from [circuit-oneops](https://github.com/oneops/circuit-oneops-1/)

~~~ bash
# After the successful install, you will see this in console.
  ==> default: Done with admin
  ==> default: OneOps should be up on http://localhost:3000
  ==> default: Configure your port forwarding and shut down iptables service (or configure it) if needed
  ==> default: All done at : 15:28:54
~~~

If step fails refer <a href="/documentation/admin/testing/index.html">troubleshooting</a>.

> UI should be up [here](http://localhost:9090/users/sign_in).

# Set Up your Organization, Clouds, Cloud Services  

* Refer <a href="/documentation/user/getting-started/index.html">User</a> or see screen cast below.

# Check Inductor <a href="/documentation/admin/key-concepts/index.html">Inductor</a>

> This section is for informative purpose only, The vagrant image has pre-installed and configured inductor ready to
execute workorder.


Inductor executes the **workoders/actionOrders** pushed by **controller** to
cloud location specified at cloud creation. Refer <a href="/documentation/admin/references/inductor.html">this</a> for overall flow.

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

Create Assembly, Platforms and environment to test it out. Refer <a href="/documentation/user/getting-started/index.html">User</a>
Or
See screen cast below (might work better on the full screen, we are working on improving this).


<iframe src="https://player.vimeo.com/video/154112203" width="200 " height="253" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


# Before You Begin

Before you begin, read the following documentation. It is the most essential information you need to start well.

* **<a href="/documentation/admin/overview/index.html">Overview:** OneOps business-level description of main benefits versus alternative solutions
* **<a href="/documentation/admin/key-concepts/index.html">Key Concepts:</a>** Conceptual description and diagram of how OneOps works
* **<a href="/documentation/admin/tools/index.html">Tools:</a>** List of supporting tools and services that can be used with OneOps
* **<a href="/documentation/admin/getting-started/index.html">Getting Started:</a>** How to start using OneOps (this section)
* **<a href="/documentation/user/best-practices/design-best-practices.html">Best Practices:</a>** How you should use OneOps for best results

# What You Will Need When You Work

Refer to the following documentation as you work.

* **<a href="/documentation/user/typical-scenarios/cost-management.html">Typical Usage Scenarios:</a>** How components work together to enable commonly implemented scenarios
* **<a href="/documentation/admin/references/actionorder.html">References:</a>** Detailed code usage descriptions with code snippets
* **<a href="/documentation/admin/testing/index.html">Testing & Debugging:</a>** Strategic overview description of how to test and debug OneOps
* **<a href="/documentation/admin/updates/index.html">Updates:</a>** Release and patch announcements as well as articles of interest to OneOps users
* **<a href="/documentation/admin/contribution/index.html">Contribution:</a>** How to provide feedback, report issues, contribute to development, or contact us
