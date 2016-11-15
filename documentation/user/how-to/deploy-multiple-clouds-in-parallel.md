---
layout: project
title: Deploy Multiple Clouds in Parallel
id: deploy-multple-clouds-in-parallel
---

# Solution

## Parallel Cloud


* Cloud priority is used during a deployment plan generation to determine the deployment step order.
* Ordering of steps happens based on an ascending order of priority.
* Cloud priority can be defined per platform on the transition platform page.
* By default, all cloud priority is set to:
    * 1 for cloud names ending with odd number
    * 2 for cloud names ending with even number. 
  
>Use discretion when updating the priority before deployment.
  
  
* All primary clouds are executed before secondary ones.
* The cloud priority field allows any numeric value.

>If all primary clouds have the same priority, then all the changes in that platform will be deployed in parallel. For example: if the Tomcat platform across all the primary clouds has the priority of 1, then all the Tomcats get updated at the same time.

## Edit Cloud Priority


1. In the Transition view, go to the environment.
2. Select the platform.
3. From the list of clouds for the platform, click the list icon on top, right side of the cloud and select **Cloud deployment order.**
4. To set the ordering of cloud for deployment, enter a numeric value.

>All primary clouds are executed before secondary ones.



