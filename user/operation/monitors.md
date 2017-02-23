---
layout: user-doc
title: Monitors
---

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

Under the cover OneOps facilitates the industry standard open source solution [Nagios](https://www.nagios.org/) and the
numerous checks supplied by it.

* [Configuration](#configuraiton)
  * [Default Monitors](#defaultmonitors)
  * [Custom Monitors](#custommontiors)
  * [Attributes](#attributes)
* [Alerting with Thresholds and Heartbeats](#alerting)
  * [Heartbeats](#hearbeats)
  * [Thresholds](#thresholds)
* [Usage in Operation](#usage)
* [Charts](#charts)
* [Charts in Action](#chartsinaction)
* [Examples](#examples)

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

Custom monitors allow you to define additional metric monitoring for any component. They can be configured in the design
view of a component: 

1. Navigate to the desired assembly.
1. Press _Design_ in the left hand navigation.
1. Select the platform in the list on the right by clicking on the name - e.g. `tomcat`.
1. Select the component in the list on the right by clicking on the name - e.g. `compute`.
1. Go to the _monitors_ tab. 
1. Press _Add_ to start create a custom monitor
1. Alternatively select an existing custom monitor and _Edit_ it as desired.

<a name="attributes"/>

## Attributes

The following _Global_ and _Collection_ related attributes can be configured for existing and new monitors:

_Name_: simple name for the monitor as visible in the list.<br/>
_Description_: descriptive text about the behavior of the the monitor.<br/>
_Command_:  Nagios command that defines the metric gathering.<br/>
_Command Line Options Map_: map of key value pairs that are passed to the command line invocation.<br/>
_Command Line_: specific command line invocation for the metrics gathering.<br/>

Each monitor can include one or more _Metrics_ defined by:

_Name_: simple name for the metric.<br/>
_Unit_: the unit used for data points, used in charts and notifications.<br/>
_Description_: descriptive text about the metric.<br/>
_DS Type_: the data source type. _GAUGE_ signals that this metric gather as a measurement each time. _DERIVE_ on the
other hand signals a rate of change from a prior measurement is tracked.<br/>
_Display_: flag to signal if the metric should be displayed.<br/>
_Display Group_: string to allow grouping of metrics.<br/>
_Sample Interval (in sec)_: Number of seconds between each metric measurement event.<br/>

In addition, aspects for alerting can be configured as documented in [the following section](#altering).

<a name="alerting"/>

# Alerting with Thresholds and Heartbeats

<a name="heartbeats"/>

## Heartbeats

Configured in the _Alerting_ section the _Heartbeat_ flag and _Heartbeat Duration_ allow a metric to be used as a
critical metric signaling the health of the component itself.

If the data collection fails for a metric with the heartbeat flag enabled and the heartbeat duration has passed, an
_unhealthy event_ is generated. Ideally at least one metric per component is flagged as a heartbeat metric. Heartbeat
metrics are automatically collected every minute from all components.

_Heartbeat Duration_: defines the wait time (in minutes) before marking a component instance as unhealthy due to a
missing heartbeat.<br/>

The unhealthy event caused by missing heartbeat leads to execution of a repair action on the instances marked as
unhealthy. The automatic healing of instances using [Auto Repair](/user/operation/auto-repair.html) enables the
recovery of components instances back to a healthy state.

<a name="thresholds"/>

## Threshold

A _Threshold_ uses a metric and a set of conditions to change the state of a component. These changes can trigger events
such as sending notifications, auto scale and auto repair.

The following attributes characterize a threshold: 

_Name_: Name the threshold so that it is easy to understand what happened. For example: HighThreadUse implies thread 
count going too high. This name is seen as part of the alert message and should be intuitive enough to understand
what happened when the threshold was crossed.

_State_: Defines the state of the instance when the threshold is crossed. Depending on the state of instance, certain
actions are performed implicitly to recover the component back to good health. The user can select a value to define the
expected state of the threshold.

The following states are available:

_Notify-Only_: Use this state when no automated action is expected. When the trigger condition is met, the state of the
instances is flipped to notify and an event is triggered. The event can be seen on the environment operation view. 

_Unhealthy_: When a threshold is defined with an unhealthy state, the instances meeting trigger condition require some
repair action to fix their state and the repair action associated with the component is executed. The automatic healing
of instances using [Auto-Repair](/user/operation/auto-repair) helps in recovery of instances back to good state.

_Over-utilized_: Use this state to define a threshold where the load is not sustainable and the component requires
additional capacity. [Auto scale](/user/operation/auto-scale)) is used to add more capacity until the
maximum limit of scaling configuration is reached.

_Under-utilized_: This state signifies that the component instance is not being used to its capacity and can be removed.
[Auto scale](/user/operation/auto-scale)) is used to remove capacity until the minimum limit of scaling configuration is
reached.

Further threshold configuration attributes are: 

_Bucket_: Time interval used for each metric collection.

_Stat_: Stat determines the value selection from the bucket for aggregation. Values are average, min, max, count, etc.

_Metric_: The metric to use for the threshold.

_Trigger_ and _Reset_ determine when an event is raised and subsequently removed. They are configured with an expression
using and _Operator_ and _Value_ to create and expression. The _Duration_ defines the time window during which the
collected metric value is evaluated. _Occurrences_ defines the number of repetitions needed to trigger 

_Cool-off_: The time after which a repeated threshold crossing raises another event. Before that time repeated 
violations do not raise additional events. 

An alert is generated for any state trigger. If you are watching the assembly,  you can expect a 
[notification](/user/account/notifications.html) about the event. The events can be viewed in the operation view. 

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