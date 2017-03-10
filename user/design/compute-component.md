---
layout: user-doc
title: Compute Component
---

The `compute` component is of core importance and part of most platforms since it
represents the virtual machine and operating system on which the platform runs.

You can configure the compute component as part of your platform in design phase and specific to an environment in the
transition phase.

Once your assembly is deployed in an environment you can access the [computes in operation](../operation/compute.html).

## Configuration

Besides the global configuration available for any component such as _Name_ and _Description_, you can configure the
following attributes:

_Instance Size_: The instance size determines characteristics of the virtual machine created for operation in terms of
processing power, memory size, networking bandwidth and operating system. The size values use clothing sizing values 
of from extra small to extra large and beyond - XS, S, M, L, XL, XXL, 3XL, 4XL. Instance sizes optimized for compute
performance, network performance, storage and memory are available. The generic values are mapped to 
[cloud](../account/clouds.html) specific sizes.

_Networking - PAT ports_: Configure the Port Address Translation PAT from internal ports (key) to external ports
(value). <br/>
_Networking - Require public IP_: Check if a public IP is required. Setting is used when the compute cloud service
public networking type is interface or floating.<br/>

The _Cloud Services_ configuration displays the services required by the component and provided by the cloud. Typically
_compute_ and _dns_ are required, while others such as _mirrors_ or _ntp_ are optional and can be enabled or disabled
as desired.

The _Compute Depends On_ and _Depend On Compute_ sections contain lists of related components.

The _attachements_ tab allows the configuration of [attachments](./attachments.html) associated to the compute.

The _monitors_ tab can be used to configure compute-related [monitors](../operation/monitors.html).


## Example Use Cases

### Update the Size of a Compute

At this time, you can not update the size (Instance Types) of a compute from one type to other. There are two ways to do an update if you want to update the compute.

If all of the computes in your environment are the wrong type for a platform, follow these steps:


1. Disable the entire platform.
2. Commit and deploy.
3. Enable the platform to commit and deploy.

If some computes are deployed by means of a wrong selection or wrong commit, follow these steps:


1. Go to the operation of the instance on the **configure** tab.
2. Click **replace.**
3. Commit and deploy.