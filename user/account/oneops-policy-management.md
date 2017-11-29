---
layout: wmt/docs
side-navigation: user-navigation.html
title: OneOps Policy Management
id: oneops-policy-management
---

# OneOps Policy Management

Policy Management provides in-line technical debt to identify Cloud anti-patterns that are at risk to cause a service disruption.

Policies are defined per organization. OneOps admin users have privileges to add, edit, and delete a policy. A policy definition includes:

* **Name:** Unique name of the Policy
* **Description:**  Brief description about the Policy
* **Query:** Elastic Search query to identify candidate objects that violate the policy
* **Execution Mode:**  
    * **Active:** Prohibits users from saving objects under violation. For example: A policy can be defined to allow only a few compute images like centos-6.6, redhat 6.5. Any attempt to save a compute component with an image value other than these two, fails.
    * **Passive:** All components and instances that violate such policies are marked with a failed policy status with the reason for the specific policy failures.

All components and instances that violate one or more policies are marked with a failed policy status along with the reason of the specific policy failures.
