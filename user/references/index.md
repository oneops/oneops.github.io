---
layout: user-doc
title: References
---

# Table Of Contents

{% for p in site.pages %}
{% if p.url contains page.url %}
- [{{ p.title }}]({{ p.url }})
{% endif %}
{% endfor %}

# All In One Page Content



<h1 class="primary" id="propagation">Propagation</h1>

Component propagation section is an advanced configuration option that generally should not be changed. However, in some **very rare cases** it may be used to fine tune the behavior of how configuration (and therefore deployment) changes to one component will trigger the deployment of its dependent components or its "master" components (the ones that depend on it).    This typically will be done with the purpose of optimizing deployment plan size and reducing the total deployment time.

> `Use extreme caution when editing propagation configuration. When used incorrectly it will result in broken deployments and/or unexpected application behaviour.`
 
## Example

Lets consider a tomcat platform for redundant environment. This platform has a load balancer - LB - component that depends on a Compute component (its "master"). Internally these components are tied by a "DependsOn" relation (LB depends on Compute) with a special propagation attribute (_propagate_to_) set to "both". That means that when there is any deployment change for one of these components (due to configuration changes or just a 'touch" update) the other component will be re-deployed as well regardless of whether it actually had any configuration changes. So if, for example, a user changes the size (size attribute) of Compute, then LB will get re-deployed together with Compute during next deployment even though its configuration has not technically changed. And vice versa: deployment of LB (due to some active changes) will be accompanied by re-deployment of compute regardless of whether its configuration is changed by user.

![Tomcat Logfiles Path](/assets/docs/local/images/propagate1.png)

**...**

![Tomcat Logfiles Path](/assets/docs/local/images/propagate2.png)


## Valid Values

Possible propagation (propagate_to) values are:
* **both** - changes to this component OR to component it depends on ("master") will cause deployment of BOTH components;
* **from** - changes to master component (the one this component depends on) will also cause deployment of this ("from") component regardless whether this component configuration has changed, but not the other way around;
* **to** - changes to this component (dependent)  will also cause deployment of master ("to") component, but not the other way around;
* **none** - no propagation of deployment in either direction, changes to either master or dependent components will not cause additional deployment of the other one.

**API**

API end-point to list "DependsOn" relations (including _propagate_to_ attribute) from a given component:

`GET https://<your-server>/<ORGANIZATION-NAME>/assemblies/ASSEMBLY/transition/ENVIRONMENT/platforms/PLATFORM/components/COMPONENT/depends_on.json`

<br><br>

<h1 class="primary" id="run-actions-in-operations">Run Actions in Operations</h1>

Actions can be run ad hoc against Components by using the <a href="/user/references/#operations-reference">operations</a> page.

![Design tomcat 1](/assets/docs/local/images/design-tomcat1.png)
![Design tomcat 2](/assets/docs/local/images/design-tomcat2.png)

<br><br>

<h1 class="primary" id="set-up-multiple-ports-protocols-load-balancer">Set Up Multiple Ports/Protocols in Load Balancer</h1>

There is a syntax to declare the virtual port/protocol and the instance port/protocols for the LB component. Each vport/vprotocol and iport/iprotocol combination is encapsulated in a single listener array as shown in the screenshot below. For a single listener, the syntax is `"vprotocol vport iprotocol iport"`. For multiple ports/protocols, it is possible to have multiple entries of listeners to be configured in the LB component.

![Multiple ports protocols](/assets/docs/local/images/multiple-ports-protocols.png)

There is also a map-based syntax for the ECV declaration. The ECV map entries have the key as the instance port and the URL as the health-check URL pattern, with the HTTP method for the service listening on that port. To ensure that monitors are created for all service groups, it is necessary to add ECV entries for the non-http services by using non-existing URL patterns.

[comment]: # (IMAGE-REQUIRED: set-up-multiple-ports.png)

<br><br>

<h1 class="primary" id="threshold-definitions">Threshold Definitions</h1>

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

<br><br>

<h1 class="primary" id="transition">Transition</h1>

After you create a new Environment, the Environment detail page (Manifest page) displays. This is where you see the realization of your Design into a given Environment that is based on its SLA requirements.

All configuration values for Platforms and Components are pulled from the Assembly Design. You may also see additional required/optional Components in some Platforms based on Env properties.

# Pull Design

Every time a new change is committed to the Assembly Design, you see the notification on the Transition summary/Manifest page. You have the option to promote those changes into this Manifest.

# Manifest Configuration

On the Manifest page, you can make configuration changes that are specific to your Environment. To mark these as permanent, click the lock icon next to the attribute value. Otherwise these get overwritten the next time you perform a Design pull.

<br><br>

<h1 class="primary" id="user-favorite">User Favorite</h1>

Favorite is a way to keep most used links readily available at the top menu bar (beside the search menu option).


* You can find the `favorite icon` on most list views or next to the name on summary pages. 
* When you click this icon, its color changes. A blue flag means that the option is added to your favorite list. 
* The flag has a toggle effect for adding or removing any entry from the favorite list.
* You can manage a cross-organization favorite list from the favorite tab in your profile view.
* The user is then routed to the profile view favorite tab. If an added item is no longer available, the list view is refreshed to reflect this. 
  

For example: if an environment was added to the favorite list and then later the same environment was deleted, no addition or deletion is reflected. When the user clicks a non-existing environment from the favorite list, the user is rerouted to the profile page favorite view.

<br><br>

<h1 class="primary" id="variables">Variables</h1>

Use Variables to externalize configuration attributes values which may change for an application at cloud , global( shared across platforms), or platform specific. You can create secure variables.

The three areas to store variables are:

* **Global:** A Global Variable is an Assembly-wide, named value. You can use Global Variables within a Component’s attribute values in this form: `$ONEOPS{variable-name}`.  OneOps then evaluates the actual attribute values during deployment.

* **Cloud:** Defined for a particular Cloud

* **Local:** Set in a particular Platform. For example you may have a Tomcat Platform and in it, set a variable like ‘version’ to ‘2.2.2’ for use in the platform

Variables are put to use when you have an attribute, as you saw above in the Tomcat example. For another example, in the Download Component, there is an attribute called Source URL. This defines where to go to download the file, for example a JDK to download. It is possible to hard code a value in this circumstance, but variables enable a more flexible approach.

Variable reference example syntax:

~~~bash
$OO_CLOUD{cloudvarname1}
$OO_GLOBAL{globalvarname2}
$OO_LOCAL{localvarname3}
~~~
