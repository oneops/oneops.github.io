---
layout: user-doc
title: Update OS Packages on a Compute
id: update-os-packages-on-a-compute
---

# Solution

To update OS packages on a compute:
 
 
1. Go to the operation phase of the compute component.
2. Select the computes you want to update with latest OS packages and click **Action.**
  
    ![Update OS Package Compute](/assets/docs/local/images/update-os-package-compute.png)
  
3. Select upgrade-os-all.
4. Select the set size.
5. Start the procedure.
  
    ![Update OS Package Compute New](/assets/docs/local/images/update-os-package-compute-new.png)

**This updates the existing OS packages to the new version available and also installs any new packages which are required.**

NOTE: All Kernel-related patch updates require a compute reboot. After the packages are installed, do a rolling reboot of computes.

## See Also
 
 
* <a href="/documentation/user/how-to/reboot-computes.html">Reboot Computes</a>
* To query the Kernel pkgs that are installed as part of this activity, use the <a href="/documentation/user/how-to/grep-search-text-in-file-compute.html">Grep or Search Text in Files on Computes</a>.




