---
layout: user-doc
title: Edit an Environment
id: edit-environment
---

# Solution

<video width="720" height="480" preload="metadata" controls="" class="grovo-video">
    <source src="http://videos.grovo.com/walmart-oneops-transition-0215_understand-your-environment-editing-options_4668.webm?vpv=1" type="video/webm">
    Your browser does not implement HTML5 video.
</video>

To edit an environment, follow these steps:


1. Go to the assembly.
2. Select the environment to edit and click **edit.**
3. Use the following guidelines to edit the environment:
    * Properties
        * Environment name cannot changed (It is static and once created cannot be changed.)
        * Description can be updated
    * Continuous Deployment: Not in use
    * DNS
        * DNS Subdomain: cannot updated
        * Global DNS: Can be updated
    * Availability
        * Monitoring: Cannot changed
        * <a href="/user/transition/availability-modes.html">Availability Mode</a>: Cannot changed
    * Others
        * Debug: This is not used by users. It is used to debug openstack issues.
        * Primary Cloud: Can be updated
        * Secondary Cloud: Can be updated
4. To save the environment, click **Save.**
5. Commit and deploy.
