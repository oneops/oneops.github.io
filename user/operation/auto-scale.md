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
