---
layout: admin-doc
title: Getting Started with OneOps Public AMI
---

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

## Configure Cloud

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

We have pre-created a simple assembly named *SimpleApache*. This assembly has just one Apache platform with all out-of-the-box default configuration values. You can examine it by clicking Assemblies (left nav) and then on SimpleApache. This will take you to the Assembly summary page which will have nothing since no activity has been performed on this assembly yet. Click on "Design" (left nav) and you will get to the Assembly Design page where you can review platforms your assembly is composed of (just one in this case). If you click on the platform you will get to the "Platform Design Page". Just browse around.

Next step is to try to deploy this simple assembly: </br>

Go to "transition" page (left nav). You will see there is one environment already pre-created call `test-env`. Click on it and get to the Environment detail page. There is same one platform here as it was in design, but it's in the disabled state, in order to deploy it you need to enable it. In little drop down menu you can do this.

![EC2 Enable Platform](/assets/docs/local/images/GettingStartedEC2EnablePlatform.png)

Next step commit your changes and deploy:

![EC@ Commit and Deploy](/assets/docs/local/images/GettingStartedEC2CommitAndDeploy.png)

The system will generate the deployment plan with steps that will be executed. Review them and hit deploy:

![EC2 Deploy](/assets/docs/local/images/GettingStartedEC2Deploy.png)

While the deployment is in progress you can click on the steps to expand to work orders (one step can have multiple work orders). Here you can click on the log link to see what's going under the hood. Once the deployment is complete you can go to the operations page and examine what you have there. Also check your EC2 dashboard to see the result.

## Troubleshooting

 * <a href="/admin/testing/index.html#ui-does-not-come-up">Trouble connecting to port 3000</a>
 * <a href="/admin/testing/index.html#deployment-fails">Deployment fails</a>
 * Not here, look <a href="/admin/testing/">here</a>

