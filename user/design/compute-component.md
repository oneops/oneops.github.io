---
layout: user-doc
title: Compute Component
---


some intro - most platforms include a `compute` component, compute represents the VM OS running the platform


## Compute Sizes

Compute Sizes are metadata driven

Refer EC2 https://github.com/oneops/circuit-oneops-1/blob/master/components/cookbooks/ec2/metadata.rb

>Note that these are just defaults, you can change/overwrite it in the UI in the
Size Map attribute in the cloud service in any given cloud

also reference t-shirt sizes


## Enable NTP

id: enable-ntp


1. To enable NTP on an existing environment, go to the compute component in the design or transition phase.
2. Select the NTP cloud service.
3. If updated in design phase, pull latest changes to the environment and deploy.
4. If updated in transition phase, touch compute component and deploy.
