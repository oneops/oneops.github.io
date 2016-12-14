---
layout: user-doc
title: Monitoring
id: monitoring-reference
---

Circuit developers can expose monitors for components. For eg  os components exposes cpu utilization.The app owner has the flexibility to receive alerts on assembly health or simply ignore them.


* OneOps provides 2 views of monitor
* **Transition view**

1. Select the environment.
2. Select the platform.
3. Select the component.
4. Go to the **monitors** tab. All monitors supported for that component are listed on left side.
5. To view threshold definitions, select of any of these monitors (if any default ones are provided).

## Operation View

The operation view provides the trending of metric values along with the health as per the defined threshold. The graphs per monitor can be viewed by following this path:

1. In the Operate phase, select the environment.
2. Select the platform.
3. Select the component.
4. Select the instance to be monitored.
5. Go to the **monitors** tab.

<video width="720" height="480" preload="metadata" controls="" class="grovo-video">
    <source src="http://videos.grovo.com/walmart-oneops-operate-and-monitoring-0215_view-your-monitors_4668.webm?vpv=1" type="video/webm">
    Your browser does not implement HTML5 video.
</video>

* Every component can be monitored
* Out of the box, OneOps monitors the most important Components.
* Users can set up <a href="/user/references/threshold-definitions.html">Threshold</a> on monitors to <a href="/user/references/auto-scale.html">scale</a>, <a href="/user/references/auto-repair.html">repair</a> or <a href="/user/howto/set-up-notifications.html">notify</a>.

There is a predefined set of default <a href="/user/references/threshold-definitions.html">Thresholds</a> that is provided by OneOps which comes implicitly with any environment deployment. The app owner has the flexibility to add a new threshold definition that is suitable for the app or to edit an existing <a href="/user/references/threshold-definitions.html">threshold</a>.

To review, add, or edit a threshold, go to your environment in the transition phase, select the specific component (e.g. compute/tomcat). Get more details on <a href="/developer/references/default-monitor-thresholds.html">Default Monitor Thresholds</a>
