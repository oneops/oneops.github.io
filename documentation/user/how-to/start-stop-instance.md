---
layout: project
title: Start and Stop an Instance
id: start-stop-instance
---

# Solution

Operate > environment > platform > component (for example,Tomcat) > instances > instance name > actions/stop and start


1. Select the appropriate assembly.
2. Click **Operate.**
  
    The Environments page displays.
  
3. Select an environment (for example, Prod).
  
    The Platform page displays.
  
4. Select a platform.
5. Select a component. 
  
    The sample displayed below is compute-69455119-1.
  
    The summary for the component displays.

![Start stop summary](/assets/docs/local/images/start-stop-summary.png)

>Every Component instance has a OneOps identifier number. In the sample shown, that number is 3967906-11. When you execute a start or stop you must select the specific Tomcat instance. If only given the IP address, you must go to the compute component and locate the IP from what is provided. The following sample displays an example of a compute node.

![Start stop instance identifier](/assets/docs/local/images/start-stop-instance-identifier.png)




