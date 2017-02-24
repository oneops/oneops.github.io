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

<i class="fa fa-video-camera fa-3x blue"></i>  Check out the [demo video showing how to navigate to monitors](./monitors-nav-video.html). 

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

Additional options are available in the _Advanced Configuration_:

_Receive email notifications only on state change_: enable this flag to reduce notifications to be sent only when the
monitor state changes.

_URL to a page having resolution or escalation details_: This allows you to add a URL to an external website or other 
resource that provides further information for the user receiving notifications from this monitor. The URL is added to
all notifications.

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
such that result in [notifications](/user/account/notifications.html), 
[automatic scaling](/user/operation/auto-scale.html) or [automatic repair events](/user/operation/auto-repair.html).

Components include a predefined set of default thresholds that are used implicitly with any environment deployment. 
Users can add a new threshold definitions that are suitable for their operation or edit existing thresholds.

Threshold are visible as part of the monitor configuration.

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

The actual usage of monitors occurs in the operation view for each individual component:

1. Navigate to the desired assembly.
1. Press _Operation_ in the left hand navigation.
1. Select the environment by clicking on the name in the list.
1. Select the platform in the list on the right by clicking on the name - e.g. `tomcat`.
1. Select the component in the list on the right by clicking on the name - e.g. `compute`.
1. Go to the _monitors_ tab. 
1. The monitors are listed on the left as a list.
1. Click on an individual monitor name to view a [chart](#charts) visualizing the monitor data.

<i class="fa fa-video-camera fa-3x blue"></i>  Check out the [demo video showing how to navigate to monitors](./monitors-nav-video.html). 

The list of monitors shows the names of the monitors and additional icons that highlight heartbeat monitors and defined
thresholds. You can also mark them as a [favorite](/user/general/favorites.html).

The header includes a filter for the monitors, select/deselect all buttons, a sort features and well as the _Actions_
button. If you select a few monitors in the list with the checkboxes beside the names, you can use the 
_Compound charts_ action to merge all metrics from the selected monitors into one chart. The _Stack charts_ action
triggers all selected charts to be displayed above each other.

Threshold and heartbeat configuration for the monitor is displayed below the chart. 

<a name="charts"/>

# Charts

Chart inspections can be used to visually analyze your component behavior over time. 

<img src="/assets/img/ui/monitors-chart.png"/> 

<i class="fa fa-video-camera fa-3x blue"></i> Enjoy our [demo video](#chartsinaction) showcasing usage of charts.

A number of features are available in the chart display:

_Time range control_: The top left corner contains a control with buttons to select time range for the whole chart 
displaying of one hour, six hours, one day, one week, one month or one year.

_Time navigation_: The top right corner contains a control to navigate the chart time data by the size of the range. 
`<<` navigates a full period back, `<` half a period back, `>` half a period forward, `>>` a full period forward. `Now`
jumps to the current date and time.

_Read value_: Moving the mouse pointer over the chart triggers a marker that displays the metric value at the current
location in the chart.

_Legend_: The legend beneath the chart shows the different metric names for the monitor. Clicking on a metric triggers
the chart to display only that metric vs. all metrics.

_Threshhold display_: Threshold levels are displayed as horizontal lines in the chart using a dotted line of the same
color as the metric with the threshold. The legend includes a dot beside the metric name. The color of the dot reflect 
the state (blue for notify, red for unhealthy...). Hovering over the dot shows the threshold definition.

_Zoom_: You can select a rectangle on the chart to enlarge a specific x/y region of the chart. This can be repeated
multiple times until you see the region of interest. Double-click causes a zoom back out.

_Standalong view_: The button on the top right corner in the chart title display triggers the current chart to be
displayed in a new browser window without the rest of the user interface. 


The data available in the chart depends on a few aspects:

- Actual metrics taken successfully and component operational times e.g. there won't be any old data for a compute that 
was just started today
- TTL policies for storing the data.  One minute buckets are used for hour and 6 hours charts up to two days into the 
past. Then metrics switch to 5 minute buckets.

<a name="chartsinaction"/>

# Charts in Action

<div class="video">
<iframe width="640" height="360" src="https://www.youtube.com/embed/mFeohNtc5Es" frameborder="0" allowfullscreen></iframe>
</div>

<a name="examples"/>

# Examples

## Open Files Monitor

The Open Files Monitor monitors the open files on the process and is includes in a number of components and disabled by
default. You can simply activate it and enter the process name in the configuration if you want to montior files opened
e.g. by your application as the `artifact` component.

## App Version Monitor

The App Version monitor is a monitor of the `tomcat` component  used to validate that the server is restarted after all
artifacts are deployed. By default, the monitor is disabled.

You can enable it in transition view of the component.  The ValidateAppVersion action can perform the same check as the
monitor as an on demand action.


