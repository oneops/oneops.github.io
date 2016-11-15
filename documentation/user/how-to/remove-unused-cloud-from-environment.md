---
layout: project
title: Remove an Unused Cloud from an Environment
id: remove-unused-cloud-from-environment
---

Among other reasons, it is necessary to remove a cloud from an environment when there is:


* Resource under-utilization
* Instability of one cloud over another
* No longer support for the cloud by its infrastructure team

# Solution

To remove a cloud that is no longer required from an environment, follow the steps below:


1. Ensure that the cloud does not have any live instances within the environment. To do this:
    * Shut down the cloud from all platforms.
    * Disable some or all of the platforms where the cloud has live instances.
2. Go to the **Environment Configuration** tab  and select **Edit.**
3. Check **not used** for the cloud and then click **Save.**
    * If all live instances are removed, the **Save** is successful.
    * If not, then a failure message appears and the cloud update is not saved.
  
    Upon successful removal, the cloud is deleted from the environment and all of the platforms under it.

>Removal of a cloud from an environment does not require deployment because the live instances are already deleted.
