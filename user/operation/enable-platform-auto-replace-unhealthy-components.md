---
layout: wmt/docs
side-navigation: user-navigation.html
title: Enable Platform to Auto Replace Unhealthy Components
id: enable-platform-auto-replace-unhealthy-components
---

# Enable Platform to Auto Replace Unhealthy Components

To enable your platform to auto replace unhealthy components, follow these steps:


1. On the Platform Operations page, find the "Automation Status" section. There is a button to enable or disable "Auto Replace" which is disabled by default. Click it in turn the auto-replace ON.
2. Configure the Auto Replace feature with the following parameters:
    * **Replace unhealthy after minutes:** OneOps replaces your unhealthy components only after they are in an "Unhealthy" state for more than or equal to this many minutes. The default value is so large that it keeps the auto replace disabled by default. 1 hour could be a good value.
    * **Replace unhealthy after repairs #:** If the time above is elapsed, OneOps checks the number of repairs done on this component after it was reported "Unhealthy". If it is greater than the value of this attribute, OneOps triggers the Auto Replace provided that there is no open release or open deployment for your environment. The default value is so large that it keeps the auto replace disabled by default. "3" could be a good value.

> To enable your platform to auto replace, it is necessary to complete both steps. Also, if there is any open release or a cancelled/ongoing deployment, Auto Replace is postponed.
