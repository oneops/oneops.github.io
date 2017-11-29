---
layout: wmt/docs
side-navigation: user-navigation.html
title: Update or Upgrade New OneOps Code
id: update-upgrade-new-oneops-code
---

# Update or Upgrade New OneOps Code

## Solution

The two ways to roll out new code are:


* **Update:** Rollout the new version of your apps in multiple batches with each batch containing only a certain “percentage” number of the total number of nodes.
* **Upgrade:** Spin up a new parallel hierarchy of nodes and then switch the traffic to this new cluster.

<video width="720" height="480" preload="metadata" controls="">
    <source src="http://videos.grovo.com/walmart-oneops-transition-0215_rolling-deployment-of-app_4668.webm?vpv=1" type="video/webm">
    Your browser does not implement HTML5 video.
</video>

## Roll Out a Code Update

Roll out the new version of your apps in multiple batches with each batch containing only a certain “percentage” number of the total number of nodes. This is done by following these steps:


1. Go to the platform to be updated within an environment in transition view and change the “% Deploy” value in scaling configuration to 25 for this example.

    ![Scaling Configuration](/assets/docs/local/images/scaling-configuration.png)

2. Change the version number environment variable of the platform to the latest version you want to update to.
3. Commit and deploy. You will notice that the deployment plan has only 25% of the nodes in each data center (edc/ndc). Go ahead and complete the deployment.
4. At this stage, your 25 nodes in each data center (assuming 100 hundred nodes in each data center) are upgraded with the latest version.
5. Change the ‘% Deploy’ value to 50% and then save, commit and deploy. Now you have the next batch of (25%) of your nodes upgraded to the latest version.
6. Repeat this until you have completed 100%.
7. During this upgrade process, 75% nodes are always available to serve the traffic.

>
>* You must have a proper next version (not same snapshot version) of your application(s) for doing this “update” process.
>* Between percentage change from 25% to 100%, there should not be any update in design/transition so that this is the only change propagated to the specified percentage of computes.
>* The previous steps can also done by DC.

## Roll Out a Code Upgrade

Create a new parallel hierarchy of nodes and then switch the traffic to this new cluster. Here are the steps:


1. Go to the design of your assembly.
2. Select your Tomcat platform (choose your platform) and click **edit**.
3. Increment its version and save. Here you are telling OneOps that you have a new major version of your product.
4. Go to your environment in Transition and pull the design. OneOps is going to add a new platform to your environment.
5. Select the redundancy (redundant or singleton) of your new platform.
6. There will be two platforms in your environment. One with old version and one with new version.
7. Click the new platform and change the “version” variable to the new release maven version of the application.
8. Commit and deploy. This creates a brand new cluster of nodes for your application but it does not yet change the dns entries, etc.
9. On the environment page, select the drop-down for the new platform and select **activate.** This changes the DNS entries and all your traffic starts to hit the new nodes.
10. You can choose to keep the old nodes and platform for a few days in case you want to switch back to it (by activating it) or you can get rid of it by clicking the “terminate” on the drop-down menu.

![Rollout Summary](/assets/docs/local/images/rollout-summary.png)
