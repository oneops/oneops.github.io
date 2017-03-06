---
layout: user-doc
title: Add or Reduce Capacity
id: "add-reduce-capacity"
---

# Solution

Capacity equals deployment. 100% capacity is deployment of all instances in the cloud. Partial deployments are usually used to test new code or components. After the partial deployment is recognized as successful, a full deployment can be executed.

Two processes are required to change capacity:


* **Transition** provides visibility into the variable set and allows you to execute a partial or full deployment.
* **Operate** allows you to control capacity and execute a full deployment.

# Transition

Transition > Environment > Platform > Summary > Scaling Configuration


1. To view the environments page, click **Transition.**
2. Select a platform.

The Summary page displays the Scaling Configuration panel.

![Capacity Scaling Configuration](/assets/docs/local/images/capacity-scaling-configuration.png)

# Operate

You can only complete a full deployment in Operate.

Operate > Summary tab > Force Deployment

To execute a full deployment, complete the following steps:


1. Select the appropriate assembly.
2. Click **Operate.**
3. Select an environment (for example, prod2).
    The summary tab displays status information.
  
    ![Capacity Summary](/assets/docs/local/images/capacity-summary.png)
  
4. Click **Force Deploy.**

>Force Deploy gathers all changes made to that environment, regardless of how small or large, up to the moment you click **Force Deploy.**

