---
layout: project
title: Upgrade Specific OS Packages on a Compute
id: upgrade-specific-os-package-on-compute
---

# Solution

To update Specific OS packages on a compute:

1. Go to the operation phase of the OS component.
2. Select the instance you want to update with the specific latest OS packages and click **Action**.
    ![Upgrade Specific OS Package Compute](/assets/docs/local/images/upgrade-specific-os-package-on-compute.png)
3. Select upgrade-os-package.
4. Select the package that needs to be upgrade.
5. Select the set size.
6. Start the procedure.
  
    ![Upgrade Specific OS Package Compute New](/assets/docs/local/images/upgrade-specific-os-package-on-compute-new.png)

**This will update the Specified OS packages to the new version available.**

NOTE: All Kernel-related patch updates require a compute reboot. After the packages are installed, do a rolling reboot of computes.

## See Also


* <a href="javascript:loadContent('/documentation/user/how-to/reboot-computes.html');">Reboot Computes</a>
* To query the Kernel pkgs that are installed as part of this activity, use the <a href="javascript:loadContent('/documentation/user/how-to/grep-search-text-in-file-compute.html');">Grep or Search Text in Files on Computes</a>



