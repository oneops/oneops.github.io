---
layout: project
title: Configure ECV Check URL on OneOps
id: configure-ecv-check-url-on-oneops
---

# Solution

To configure **ECV check URL** follow these steps:

1. In Transition, go to the assembly.
2. Select the environment that contains the platforms with redundant availability.
3. Select the platform and then click the LB component within this platform.
  
    The default ECV attribute value is `GET /`.
  
4. Edit the component and provide an appropriate contextual GET URL. For example: `GET /myapp/checkitsup`. 
5. Save the changes.
6. To reflect this change, go to the environment and perform a commit and deploy.

>For LB to understand that a service is reachable, the URL used for the ECV check should return in less than two seconds.
