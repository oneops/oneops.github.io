---
layout: user-doc
title: Design Best Practices
---

In the Design phase, follow these best practices:


* Follow the naming conventions for <a href="/user/best-practices/naming-conventions.html">assembly names</a>
* Add the "owner's" email address to each assembly
* Be a "watcher" for your assembly
* Add a "description" for each platform to help other users to understand the purpose of the platform
* Make sure that VM (instance size on compute) and JVM sizes (max heap size on Tomcat) are consistent
* Edit the default values of the <a href="/user/references/variables.html">variables</a> of each platform, as needed
* Review the default values of each component
* If an additional port support is required, add the secgroup component
* To SSH into the VM, add the <a href="/user/howto/ssh-to-a-compute-node.html">SSH key</a> to the user component
* To ensure that the platform dependency is correct, review the design diagram
* After creating or making changes to a design, remember to commit the design
