---
layout: wmt/docs
side-navigation: dev-navigation.html
title: Pack policy
---

# Pack Policy

Policies can also be specified as part of the pack definition.
This enables policy evaluation on all CIs (components, attachments, platform variables, monitors) under the platform for a given pack. The violated policies can then be fixed to avoid issues further down the application lifecycle.

The policy definitions are added to the pack ".rb" file in a given circuit. Following are few examples of pack based policies.

```
policy "env-profile",
       :description => 'custom pack policy for env-profile',
       :query => 'ciClassName:manifest.Environment AND _missing_:ciAttributes.profile'
       :docUrl => '<document url link for the policy>'`
       :mode => 'passive'

policy "compute-ostype",
       :description => 'custom pack policy for compute-ostype',
       :query => 'ciClassName:(catalog.*Compute manifest.*Compute bom.*Compute) AND NOT ciAttributes.ostype:("centos-6.5" OR "centos-6.6" OR "redhat-6.5" OR "redhat-6.6" OR "default-cloud")'
       :docUrl => '<document url link for the policy>'`
       :mode => 'active'

policy "env-automation",
       :description => 'custom pack policy for env-automation',
       :query => 'ciClassName:manifest.Environment AND ciAttributes.profile:(PROD EBF STAGING) AND NOT (ciAttributes.autorepair:true AND ciAttributes.autoreplace:true)'
       :docUrl => '<document url link for the policy>'`
       :mode => 'passive'
```

Brief description about each field in the policy definition is as follows

* **Description:**  Brief description about the Policy.
* **Query:** Elastic Search query to identify candidate objects that violate the policy.
* **Doc URL:** URL to the document about the policy details.
* **Mode:** Can be Active/Passive.
     * **Active:** Prohibits users from saving objects under violation. For example: A policy can be defined to allow only a few compute images like centos-6.6, redhat 6.5. Any attempt to save a compute component with an image value other than these two, fails.
     * **Passive:** All components and instances that violate such policies are marked with a failed policy status with the reason for the specific policy failures.
