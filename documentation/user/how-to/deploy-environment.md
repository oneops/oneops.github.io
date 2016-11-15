---
layout: project
title: Deploy an Environment
id: deploy-environment
---

# Solution

<video width="720" height="480" preload="metadata" controls="" class="grovo-video">
    <source src="http://videos.grovo.com/walmart-oneops-transition-0215_first-time-deployment_4668.webm?vpv=1" type="video/webm">
    Your browser does not implement HTML5 video. 
</video>

To deploy an environment, follow these steps:

1. Click **deploy.**
    * The deployment plan is created and the event is published.
    * The Controller reacts on the “new deployment” event, changes the deployment state to “in progress”, and dispatches Workorders from step 1 to Inductors.
    * The inductors consume the Workorders.
    * Call provider API instantiates the Compute, Storage, etc.
    * After the compute is up, there is an ssh remote execution of Chef recipes to deploy software, configuration, monitors, etc.
    * The inductor sends the Workorder result back to the Controller to update the CMS.
2. After all Workorders from step 1 are successfully processed, move to the next step. 
    
    Metrics and Logs are collected (via flume) to Cassandra.