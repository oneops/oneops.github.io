---
layout: project
title: Configure App Version Monitor
id: configure-app-version-monitor
---

# Solution

The App Version monitor is used to validate that Tomcat is restarted after all the artifacts are deployed. By default, the monitor is disabled.

To configure the application version monitor, follow these steps:


1. Go to the Transition phase of the environment.
2. Select Tomcat.
3. Select the **monitor** tab.
4. Enable the AppVersion monitor.
5. Save.
6. Commit and deploy.

Metrics: versionlatest (value=0  all versions are upto date. value >0 need to restart the tomcat)

https://github.com/oneops/circuit-oneops-1/tree/master/components/cookbooks/tomcat/recipes/versionstatus.rb

>The ValidateAppVersion action is the same as AppVersion, but it is on demand.