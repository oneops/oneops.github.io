---
layout: user-doc
title: Monitors
---

# Overview

Monitoring of numerous metrics about components is a powerful feature available to users. It includes support for
aspects such as 

- thresholds and notification via alerts
- tracking of metrics over long time ranges
- usage for compute heartbeat signal 
- extensive charting for visual and interactive inspections

Metrics can be collected for numerous aspects for various levels of behavior of your assembly in operations such as

- memory
- CPU
- network 
- processes
- process specific aspects


# Configuration

## Default Monitors

Default monitors are automatically created from the component definition and can be configured in the transition view
of a component: 

1. Navigate to the desired assembly.
1. Press _Transition_ in the left hand navigation.
1. Select the environment by clicking on the name in the list.
1. Select the platform in the list on the right by clicking on the name - e.g. `tomcat`.
1. Select the component in the list on the right by clicking on the name - e.g. `compute`.
1. Go to the _monitors_ tab. 
1. The monitors are listed on the left and can be configured individually.

## Custom Monitors

Custom monitors can be configured in the design view of a component: 

1. Navigate to the desired assembly.
1. Press _Design_ in the left hand navigation.
1. Select the platform in the list on the right by clicking on the name - e.g. `tomcat`.
1. Select the component in the list on the right by clicking on the name - e.g. `compute`.
1. Go to the _monitors_ tab. 
1. Press _Add_ to start create a custom monitor.


TBD


# Usage

In  operation View

The operation view provides the trending of metric values along with the health as per the defined threshold. The graphs per monitor can be viewed by following this path:

1. In the Operate phase, select the environment.
2. Select the platform.
3. Select the component.
4. Select the instance to be monitored.
5. Go to the **monitors** tab.


<i class="fa fa-video-camera fa-3x blue"></i>

<video width="720" height="480" preload="metadata" controls="" class="grovo-video">
    <source src="http://videos.grovo.com/walmart-oneops-operate-and-monitoring-0215_view-your-monitors_4668.webm?vpv=1" type="video/webm">
    Your browser does not implement HTML5 video.
</video>

* Every component can be monitored
* Out of the box, OneOps monitors the most important Components.
* Users can set up <a href="/user/design/threshold-definitions.html">Threshold</a> on monitors to 
<a href="/user/operation/auto-scale.html">scale</a>, <a href="/user/operation/auto-repair.html">repair</a> or <a href="/user/account/notifications.html">notify</a>.

There is a predefined set of default <a href="/user/design/threshold-definitions.html">Thresholds</a> that is provided by OneOps which comes implicitly with any environment deployment. The app owner has the flexibility to add a new threshold definition that is suitable for the app or to edit an existing <a href="/user/design/threshold-definitions.html">threshold</a>.

To review, add, or edit a threshold, go to your environment in the transition phase, select the specific component (e.g. compute/tomcat). Get more details on <a href="/developer/content-development/default-monitor-thresholds.html">Default Monitor Thresholds</a>








# Charts

Charting in monitors section

heartbeat monitor with icon, one per compute

for monitoring and alerting

icon for threshold

legend for lines acts a toggle

y axis automatic to selction

legend checkmark can add/remove chart


https://stg.oneops.walmart.com/stgqe/assemblies/mahtest/operations/environments/dev3/platforms/cloudrdbmstest!1/instances/138123049#monitors/list_item/138120984

threshold shows up as dotted line of same



monitor thresholds changed in monitors in compute from packc in design

notify - blue


< > half a period nav
<< >> full period nav

mouse over chart shows value

select range will zoom in

double click to zoom out


pop up window icon on top left


can be multiple charts


