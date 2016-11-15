---
layout: project
title: Rollback Code
id: rollback-code
---

# Solution

When a code push is determined to be unsuccessful by a TDO or engineer, a rollback becomes necessary to restore the environment to a previously stable state.

Transition > environment > platform > variables > appVersion > Value

1. In the Transition page, select an environment.
    * The Environments page displays.
  
2. From Environments page, select a platform.
    * The Platform page displays.
  
3. From the Platform page, select the **Variable** tab and then click **appVersion.**
    * The Value displays the current version number.
  
    ![Rollback version](/assets/docs/local/images/rollback-version.png)
  
4. Click **Edit** and modify the value to a previous version.
  
    >IMPORTANT: There is no log of the previous appVersion. To determine the appropriate version number, contact the application owner.
  
5. Click **Save.**

>Program owners can name the Value anything they want, but the variable is always identified as appVersion.



