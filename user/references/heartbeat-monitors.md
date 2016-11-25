---
layout: user-doc
title: Heartbeat Monitors
id: "heartbeat-monitors"
---

The flag signifies collection of the metrics data for the given monitor. For any reason, if the data collection is stopped and this heartbeat flag is turned on then after the **heartbeat duration** time has passed, an unhealthy event is generated. This unhealthy event implies missing heartbeat for the given monitor. Heartbeat flag should ideally be turned ON only for one component monitor per platform.


* OS components: SSH Port monitor has the Heartbeat flag turned ON by default.
* Metrics collection: Collected every minute from all OneOps instances. Heartbeat is not affected by Sample Interval.
* Heartbeat duration:
    * Defines the wait time (in minutes) before marking an instance as unhealthy due to a missing heartbeat
    * Only setting that is available to users
* Missing heartbeat event: If the heartbeat is not received by the OneOps collection system and the flag is turned ON, a missing heartbeat event is generated.
* Bucket: Does not affect heartbeat

The unhealthy event caused by missing heartbeat lead to execution of repair action on the instances marked as unhealthy. The automatic healing of instances using <a href="/user/references/auto-repair.html">Auto-Repair</a> helps in recovery of instances back to good state.
