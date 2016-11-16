---
layout: user-doc
title: Update the Size of a Compute
id: update-size-of-compute
---

# Solution

At this time, you can not update the size (Instance Types) of a compute from one type to other.  There are two ways to do an update if you want to update the compute.

If all of the computes in your environment are the wrong type for a platform, follow these steps:


1. Disable the entire platform.
2. Commit and deploy.
3. Enable the platform to commit and deploy.

If some computes are deployed by means of a wrong selection or wrong commit, follow these steps:


1. Go to the operation of the instance on the **configure** tab.
2. Click **replace.**
3. Commit and deploy.

