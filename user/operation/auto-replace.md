---
layout: wmt/docs
side-navigation: user-navigation.html
title: Auto Replace
id: auto-replace
---

# Auto Replace

Use auto replace to automatically replace unhealthy instances. Notifications are sent to the application owners at an auto replace action event. Auto replacement of unhealthy instances is an extension to auto repair.

Unhealthy threshold conditions cause instances to become unhealthy. When an instance becomes unhealthy, an auto-repair action is triggered. Unhealthy instances are replaced based on the definition of auto replace for that instance.

Auto replacement can be enabled for a platform under the "Automation Status" section on the operations summary page of that platform.

Following two attributes dictate the replacement of the instance:


* **Max Unhealthy duration (mins):** Wait time before auto replacement is triggered. The default value is set to 9999999 which means ~19 years. (In other words, auto replace is turned off for the platform.)
* **Min # of repair attempts:** Auto replace is not initiated until the # of auto-repair attempts is greater than or equal to this value. The default value is 9999999. Auto replacement logic counts the number of unhealthy events for different instances (of different components). Be careful when selecting this value for the minimum # of repair attempts.

Without exception, all components are auto replaceable. Replacement of instances happens one at a time. Replacement of an unhealthy instance also generates a replace work order for its dependent instances. On completion of the replacement deployment, if other unhealthy instances become healthy, no further replacement is done. If other unhealthy instances remain unhealthy, the appropriate action is performed.

# Solution


To enable auto scale for a platform, follow these steps:


1. Go to **Operations.**
2. Select your environment.
3. Select the platform under the environment.
4. If the platform did not have auto replace enabled, click the button to enable it.
5. Set the below auto replace configuration fields to an appropriate value:
  * **Replace unhealthy after minutes:** Auto-Replace will intiate for an unhealthy instance only if it stays unhealthy for this much duration
  * **Replace unhealthy after repairs:** Auto-Replace process will intiate only if auto-repair action executes these many times and if the component is still unhealthy.
