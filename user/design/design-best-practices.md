---
layout: user-doc
title: Design Best Practices
---

In the Design phase, follow these best practices:


* Follow the naming conventions for <a href="./naming-conventions.html">assembly names</a>
* Add the "owner's" email address to each assembly
* Be a "watcher" for your assembly
* Add a "description" for each platform to help other users to understand the purpose of the platform
* Make sure that VM (instance size on compute) and JVM sizes (max heap size on Tomcat) are consistent
* Edit the default values of the <a href="/user/design/variables.html">variables</a> of each platform, as needed
* Review the default values of each component
* If an additional port support is required, add the secgroup component
* To SSH into the [compute](/user/operation/compute.html), add the SSH key to the [user component](/user/design/user-component.html).
* To ensure that the platform dependency is correct, review the design diagram
* After creating or making changes to a design, remember to commit the design
