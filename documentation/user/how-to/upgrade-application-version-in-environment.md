---
layout: user-doc
title: Upgrade an Application Version in an Environment
id: upgrade-application-version-in-environment
---

To upgrade an application version in an environment, follow these steps:


1. Log into the OneOps environment.
2. Go to your Assembly.
3. Select Design.
4. Select the Platform.
5. Update the version:
    1. Version from variable:
        1. Click the **variable** tab.
        2. Select the variable.
        3. Edit the variable.
        4. Save.
        5. Commit and deploy.
    2. Version hard coded in the component:
        1. Select the component from the right navigation.
        2. Click **Edit.**
        3. Update the <variable> value.
        4. Save.
        5. Commit and deploy.

>If the change is for all the environments it is better to do that in the design phase. If the change is environment-specific, update in transition phase and lock it.

# See Also

<a href="/documentation/user/how-to/avoid-override-variables.html">Variables Override Prevention</a>
