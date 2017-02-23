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

- memory usage
- CPU utilization
- network 
- processes
- IO metrics like open files
- process specific aspects e.g. JVM or database-specific aspects 

Any component can be monitored and most components included a number of monitors by default. Monitoring in OneOps scales
for tracking thousands of metrics for long periods of time.

* [Configuration](#configuraiton)
  * [Default Monitors](#defaultmonitors)
  * [Custom Monitors](#custommontiors)
  * [Attributes](#attributes)
* [Alerting with Thresholds and Heartbeats](#alerting)
* [Usage in Operation](#usage)
* [Charts](#charts)
* [Charts in Action](#chartsinaction)

<a name="configuration"/>

# Configuration


<a name="defaultmonitors"/>

## Default Monitors

Default monitors are automatically created from the component definition and can be configured in the transition view
of a component: 

1. Navigate to the desired assembly.
1. Press _Transition_ in the left hand navigation.
1. Select the environment by clicking on the name in the list.
1. Select the platform in the list on the right by clicking on the name - e.g. `tomcat`.
1. Select the component in the list on the right by clicking on the name - e.g. `compute`.
1. Go to the _monitors_ tab. 
1. The monitors are listed on the left and can be _Edit_ed individually.

<a name="custommonitors"/>

## Custom Monitors

Custom monitors can be configured in the design view of a component: 

1. Navigate to the desired assembly.
1. Press _Design_ in the left hand navigation.
1. Select the platform in the list on the right by clicking on the name - e.g. `tomcat`.
1. Select the component in the list on the right by clicking on the name - e.g. `compute`.
1. Go to the _monitors_ tab. 
1. Press _Add_ to start create a custom monitor
1. Alternatively select an existing custom monitor and _Edit_ it as desired.

<a name="attributes"/>

## Attributes

The following attributes can be configured for existing and new monitors:

_Name_: simple name for the monitor as visible in the list<br>
_Description_: <br>
_Command_: <br>

_Command Line Options Map_:<br>
_Command Line_:<br>

Metrics 

Name
Unit
Description
DS Type
Display
Display Group

_Sample Interval (in sec)_:


<a name="altering"/>

# Alerting with Thresholds and Heartbeats

Alerting

_Heartbeat_:
_Heartbeat Duration_:
_Thresholds_


The flag signifies collection of the metrics data for the given monitor. For any reason, if the data collection is stopped and this heartbeat flag is turned on then after the **heartbeat duration** time has passed, an unhealthy event is generated. This unhealthy event implies missing heartbeat for the given monitor. Heartbeat flag should ideally be turned ON only for one component monitor per platform.


* OS components: SSH Port monitor has the Heartbeat flag turned ON by default.
* Metrics collection: Collected every minute from all OneOps instances. Heartbeat is not affected by Sample Interval.
* Heartbeat duration:
    * Defines the wait time (in minutes) before marking an instance as unhealthy due to a missing heartbeat
    * Only setting that is available to users
* Missing heartbeat event: If the heartbeat is not received by the OneOps collection system and the flag is turned ON, a missing heartbeat event is generated.
* Bucket: Does not affect heartbeat

The unhealthy event caused by missing heartbeat lead to execution of repair action on the instances marked as unhealthy. The automatic healing of instances using <a href="/user/operation/auto-repair.html">Auto-Repair</a> helps in recovery of instances back to good state.



Name 
State
Bucket
Stat
Average
Metric
Trigger & Reset with Operator, Value, Duration, Occurrences
Cool-Off



Advanced Configuration - not for custom  
_Receive Email Notifications only On state change_:
_URL to a page having resolution or escalation details_:

 A Threshold uses a metric and a set of conditions to change the state of a component. Depending on how the Thresholds are configured, OneOps Automation dispatches events, emails, auto scale, or auto repair.
A typical threshold definition looks like this:


![Threshold Low Disk Space](/assets/docs/local/images/threshold-low-disk-space.png)

* **Name:** Name the threshold so that it is easy to understand what happened. For example: HighThreadUse implies thread count going too high. This name is seen as part of the alert message and should be intuitive enough to understand what happened.
* **State:** Defines the state of the instance when the event is triggered. Depending on the state of instance, certain actions are performed implicitly by OneOps to recover it back to good health. The user can select a value to define the expected state of the threshold.
    * **Notify-Only:** Use this state when no automated action is expected. When trigger condition is met, the state of the instances is flipped to notify and an event is triggered. The even could be seen on environment operation view. 
    * **Unhealthy:** When a threshold is defined with an unhealthy state, the instances meeting trigger condition requires some repair action to fix their state. The repair action that is associated with the component is then executed. The automatic healing of instances using [Auto-Repair](/user/operation/auto-repair) helps in recovery of instances back to good state.
    * **Over-utilized:** Use this state to define a threshold where the load is not sustainable and requires additional capacity to handle the traffic. To resolve the state back to healthy, all the clouds within the environment are scaled up as defined by the scaling configuration step-up count. After additional capacity is added, ideally the trigger should get reset as the load is now divided. If not, then auto scaling ([Auto-Scale](/user/operation/auto-scale)) continues to add more capacity to the cluster until the maximum limit of scaling configuration is reached.
    * **Under-utilized:** This state signifies that the instance is not being used to its capacity and can be removed from the cluster. When this event is triggered, the instance is removed from all the clouds as per the defined scaling configuration step-down count. After additional capacity is removed, ideally the trigger gets reset as the load is now concise. If not, then flex down ([Auto-Scale](/user/operation/auto-scale)) continues to remove more instances from the cluster until the minimum limit of scaling configuration is reached.
* **Bucket:** Time interval for metric collection
* **Stat:** Choose the stat from average, min, max, count, etc. for the metric collection. If average is selected, the value is average for the bucket size.
* **Metric:** Pre-defined set of metrics for the monitor
* **Trigger:** The condition when met that raises an event
    * **Operator:** >=, <=, >, <
    * **Value:**
    * **Duration:** Time window during which the collected metric value is evaluated
    * **Occurrences:** Number of repetitions for the trigger condition 
    
For example: The above image trigger condition can be read as, raise a trigger event when spaceUsed metric average value within 1min bucket size is >= 90% and this condition is met at least 2 times within 5mins interval. 
     
* **Reset:** The condition when met that resets the triggered event
    * **Operator:** >=, <=, >, <
    * **Value:**
    * **Duration:** Time window during which the metric collected value is evaluated
    * **Occurrences:** Number of the repetitions required to reset the triggered condition
    
    For example: The attached image reset condition can be read as, reset the trigger when spaceUsed metric average value within 1min bucket size is <85% and this condition is met within 5mins at least once. 
    
* **Cool-off:** OneOps monitoring continuously gathers the metric data. When any trigger condition is met, a corresponding event is raised and notified. If the metric value is continuously satisfying the trigger condition, then the trigger is raised after the cool-off time. This is the time between 2 event notifications for the same threshold.
* **Heartbeat**: The flag signifies collection of the metrics data for the given monitor. For any reason, if the data collection is stopped and this heartbeat flag is turned on then after the **heartbeat duration** time has passed, an unhealthy event is generated. This unhealthy event implies missing heartbeat for the given monitor. More details on [Heartbeat Monitor](/user/operation/heartbeat-monitors) 

>An alert is generated for any state trigger. If you are watching the assembly, then you should expect an email notifying the event, otherwise the event can be viewed in the operation environment. The event could also be alerted on different forums, depending upon the available notification setting; more details on notification settings <a href="/user/account/notifications.html">Notifications</a>
 

<a name="usage"/>

# Usage in Operation

In  operation View

The operation view provides the trending of metric values along with the health as per the defined threshold. The graphs per monitor can be viewed by following this path:

1. In the Operate phase, select the environment.
2. Select the platform.
3. Select the component.
4. Select the instance to be monitored.
5. Go to the **monitors** tab.

<i class="fa fa-video-camera fa-3x blue"></i>  Check out the [demo video showing how to navigate to monitors](./monitors-nav-video.html). 






* Users can set up Threshold on monitors to 
<a href="/user/operation/auto-scale.html">scale</a>, <a href="/user/operation/auto-repair.html">repair</a> or <a href="/user/account/notifications.html">notify</a>.

There is a predefined set of default Thresholds that is provided by OneOps which comes implicitly with any environment deployment. The app owner has the flexibility to add a new threshold definition that is suitable for the app or to edit an existing threshold.

To review, add, or edit a threshold, go to your environment in the transition phase, select the specific component (e.g. compute/tomcat). Get more details on <a href="/developer/content-development/default-monitor-thresholds.html">Default Monitor Thresholds</a>







<a name="charts"/>

# Charts


<img src="/assets/img/ui/monitors-chart.png"/> 

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

This is fantastic!   Thank you for putting this together,.
A few quick points/corrections (though, I do not think they are critical enough to change the video unless you think it is an easy adjustment):

1.  During “time scrolling” data availability for a given period is restricted not by the life-time of the instance but more by our TTL policies of storing data.  For example, for 1 min buckets (used for “hour” and “6 hours”) it is 2 days or it is 7days for 5 min bucket (“day”).
2. You can select/toggle multiple metrics at the time if  you click on the “check” icon – this will toggle on/off a given metric without affecting the others.  So for example: you can click on a name of a given metric to select just this one and then click on “check” icons for other metrics to add those.
3. Threshold level marker (round dot) is color coordinated with threshold state (blue for “notify”, red for “unhealthy” and etc.) and if you hover on it (the ones displayed along the Y-axis) it will show the threshold trigger short definition.i.e   “CpuHighUtil: notify @ 2x(cpuidle < 20)”

Again, I do not suggest to re-record the video just to reflect these points  but rather just wanted to bring them up if case you can include this somewhere in the docs :)


<a name="chartsinaction"/>

# Charts in Action

<div class="video">
<iframe width="640" height="360" src="https://www.youtube.com/embed/mFeohNtc5Es" frameborder="0" allowfullscreen></iframe>
</div>

<a name="examples"/>

# Examples


## Open Files Monitor

The Open Files Monitor monitors the open files on the process. OpenfileMonitor is created on javaws, artifact component and by default, the monitor is disabled.


1. Go to the environment and artifact component.
2. Enable the openfiles monitor.
3. Edit the monitor and enter the process name which you want to monitor.
4. Save, commit and deploy.

## App Version Monitor

The App Version monitor is used to validate that Tomcat is restarted after all the artifacts are deployed. By default, the monitor is disabled.

To configure the application version monitor, follow these steps:


1. Go to the Transition phase of the environment.
2. Select Tomcat.
3. Select the **monitor** tab.
4. Enable the AppVersion monitor.
5. Save.
6. Commit and deploy.

Metrics: versionlatest (value=0  all versions are upto date. value >0 need to restart the tomcat)

https://github.com/oneops/circuit-oneops-1/tree/master/components/cookbooks/tomcat/recipes/versionstatus.rb

>The ValidateAppVersion action is the same as AppVersion, but it is on demand.


## Use External Link for further info

cna be any link, will show up in notifications from monitor

Add the doc page URLs to the individual monitors in your production environment. You need to add the link for your doc page URL on the required monitors.


1. Go to your environment.
2. Click any platform.
3. Click any component.
4. Click any component instance.
5. Click the **monitors** tab.
6. Click any monitor.
7. Look for the doc URL link at the bottom.
8. Click **edit.**
9. Enter your doc URL and save it.