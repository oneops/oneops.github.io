---
layout: user-doc
title: Auto Scale
id: "auto-scale"
---

# Solution

To enable auto scale for a platform, follow these steps:

1. Go to **Operations.**
2. Select your environment.
3. Select the platform and look for the "Automation Status" section under the summary tab.
4. If the platform did not have auto scale enabled, click the button to enable it.
5. Go to Transition and add or edit the monitor <a href="/user/design/threshold-definitions.html">threshold</a> for all those components which have metrics that can indicate if a resource is over or under-utilized. There are four states that you can assign to a Threshold to define when the trigger condition is met:
    * **Over-utilized:** Used to scale up
    * **Under-utilized:** Used to scale down
    * **Unhealthy:** Used to repair and replace
    * **Notify only:** Notifies only via your <a href="/user/howto/set-up-notifications.html">notification settings</a>

>With each of these states, you receive notifications as long as you have notifications set up.

