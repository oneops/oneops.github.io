---
layout: user-doc
title: Auto Repair
id: auto-repair
---

Use auto repair to automatically heal instances which are marked unhealthy due to some
[Threshold violation or missing Heartbeat](/user/operation/monitors.html). Notifications are sent when an auto repair action is
executed. Event component defined in a platform has an associated repair action specific to the component. The
recipe for healing a component differs from one another. There are different set of instructions executed for
compute repair then for tomcat repair


For example: if a Tomcat instance has become unhealthy, then a Tomcat repair action is triggered which eventually
tries to restart the Tomcat service. Similarly if a compute has become unhealthy, it first tries to SSH to the
instance and checks whether the agent process is running. If for some reason the unhealthy compute instance not
SSHable, then the next recipe tries to reboot the compute.


The user should understand the path of restoration for any unhealthy instance. It makes no sense to define
unhealthy state for diskfull threshold definition. As reboot of compute or restart of some process is not going to
fix the disk space issue. Such threshold should be created with notify-only state.
