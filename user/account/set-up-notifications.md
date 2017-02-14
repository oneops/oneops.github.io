---
layout: user-doc
title: Set Up Notifications
id: set-up-notifications
---

# Solution

To set up Notifications, follow these steps:


1. Click **organization.**
2. Select the **notifications** tab. 
3. Click **New Sink.**
4. Enter your API credentials for Amazon. 
5. Click **Save.**

After you deploy an environment, there is an SNS topic created for that environment. 

To receive notifications, follow these steps to subscribe:


1. Go to the Amazon AWS console, SNS.
2. Subscribe to the topic with your email / DL.

>Deployments, Monitors, and Scale and Repair actions each send events.

![SNS](/assets/docs/local/images/sns.png)

# See Also

* <a href="/user/design/manage-assemblies.html">Manage Assemblies Video</a>
