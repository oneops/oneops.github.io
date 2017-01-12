---
layout: user-doc
title: Threshold Definitions
id: "threshold-defintions"
---

A Threshold uses a metric and a set of conditions to change the state of a component. Depending on how the Thresholds are configured, OneOps Automation dispatches events, emails, auto scale, or auto repair.
A typical threshold definition looks like this:


![Threshold Low Disk Space](/assets/docs/local/images/threshold-low-disk-space.png)

* **Name:** Name the threshold so that it is easy to understand what happened. For example: HighThreadUse implies thread count going too high. This name is seen as part of the alert message and should be intuitive enough to understand what happened.
* **State:** Defines the state of the instance when the event is triggered. Depending on the state of instance, certain actions are performed implicitly by OneOps to recover it back to good health. The user can select a value to define the expected state of the threshold.
    * **Notify-Only:** Use this state when no automated action is expected. When trigger condition is met, the state of the instances is flipped to notify and an event is triggered. The even could be seen on environment operation view. 
    * **Unhealthy:** When a threshold is defined with an unhealthy state, the instances meeting trigger condition requires some repair action to fix their state. The repair action that is associated with the component is then executed. The automatic healing of instances using [Auto-Repair](#auto-repair) helps in recovery of instances back to good state.
    * **Over-utilized:** Use this state to define a threshold where the load is not sustainable and requires additional capacity to handle the traffic. To resolve the state back to healthy, all the clouds within the environment are scaled up as defined by the scaling configuration step-up count. After additional capacity is added, ideally the trigger should get reset as the load is now divided. If not, then auto scaling ([Auto-Scale](#auto-scale)) continues to add more capacity to the cluster until the maximum limit of scaling configuration is reached.
    * **Under-utilized:** This state signifies that the instance is not being used to its capacity and can be removed from the cluster. When this event is triggered, the instance is removed from all the clouds as per the defined scaling configuration step-down count. After additional capacity is removed, ideally the trigger gets reset as the load is now concise. If not, then flex down ([Auto-Scale](#auto-scale)) continues to remove more instances from the cluster until the minimum limit of scaling configuration is reached.
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
* **Heartbeat**: The flag signifies collection of the metrics data for the given monitor. For any reason, if the data collection is stopped and this heartbeat flag is turned on then after the **heartbeat duration** time has passed, an unhealthy event is generated. This unhealthy event implies missing heartbeat for the given monitor. More details on [Heartbeat Monitor](#heartbeat-monitors) 

>An alert is generated for any state trigger. If you are watching the assembly, then you should expect an email notifying the event, otherwise the event can be viewed in the operation environment. The event could also be alerted on different forums, depending upon the available notification setting; more details on notification settings <a href="/user/howto/set-up-notifications.html">Set Up Notifications</a>
