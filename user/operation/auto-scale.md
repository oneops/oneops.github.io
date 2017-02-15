---
layout: user-doc
title: Auto Scale
id: auto-scale
---

Use auto scale to automatically flex up or down computes based on some <a href="/user/design/threshold-definitions.html">Threshold</a> violation. Notifications are sent to the application owners at an auto scale action event trigger and recovery. Auto scaling is used to balance the load on computes for maximum utilization. The decision to flex up or down is completely at the discretion of application owner.

The scaling configuration definition provides the details on the step size for flexing along with boundary limits

![Auto Scale](/assets/docs/local/images/auto-scale.png)


* **Min:** Minimum number of computes to be present in the platform at all times. Flexing down will stop once the minimum number of instances has reached its limit
* **Max:** Maximum number of computes that can be added to the platform. Flexing up will stop once the maximum number of instances has reached its limit
* **Step Up:** Number of instances to be added per cloud while flexing up for every over-utilized violation in one deployment
* **Step Down:** Number of instances to be removed per cloud while flexing down for every under-utilized violation in one deployment

To enable auto scale for a platform, follow these steps:

1. Go to **Operations.**
2. Select your environment.
3. Select the platform and look for the "Automation Status" section under the summary tab.
4. If the platform did not have auto scale enabled, click the button to enable it.
5. Go to Transition and add or edit the monitor <a href="/user/design/threshold-definitions.html">threshold</a> for all those components which have metrics that can indicate if a resource is over or under-utilized. There are four states that you can assign to a Threshold to define when the trigger condition is met:
    * **Over-utilized:** Used to scale up
    * **Under-utilized:** Used to scale down
    * **Unhealthy:** Used to repair and replace
    * **Notify only:** Notifies only via your <a href="/user/account/notifications.html">notifications</a>

>With each of these states, you receive notifications as long as you have notifications set up.

