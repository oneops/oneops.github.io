---
layout: project
title: Find the hostname of a VM
id: find-hostname-of-vm
---

# Solution

The hostname for each VM is dynamically composed in this format:

~~~
<platform_name>-<cloud_id>-<compute_index>-<compute_id>
~~~

where:


* **platform_name:** Name of the platform in your design
* **cloud_id:** Internal unique OneOps ciId of the cloud where the VM is deployed
* **compute_index:** Integer index of the compute component in that platform in that cloud
* **compute_id:** Internal unique OneOps ciId of the compute instance

Example:  portal-4349532-1-5107200

