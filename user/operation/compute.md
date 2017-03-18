---
layout: user-doc
title: Computes in Operation
---

The [_compute_ component](../design/compute-component.html) represents the virtual machine (VM) and operating system on
which a platform runs in operation. This section explains all the available data and features and explains some common 
use cases: 

- [Overview](#overview)
- [Example Use Cases](#example-use-cases)
  - [Find IP Number of a Compute](#find-ip-number-of-a-compute)
  - [Fix Unresponsive Computes](#fix-unresponsive-computes-with-reboot)
  - [Replace a Bad Compute](#replace-a-bad-compute)
  - [Upgrade OS Packages on a Compute](#upgrade-os-packages-on-a-compute)
  - [Connect to Compute via SSH](#connect-to-compute-via-ssh)
  - [Update the Size or OS of a Compute](#update-the-size-or-os-of-a-compute)

## Overview

You can locate computes by navigating to a platform of your assembly within an environment in the operation phase:

- _Assemblies_ item in the left navigation bar
- Click on the name of your assembly
- Click on the name of the desired environment 
- Click on the name of the platform that contains the compute
- Click on the _compute_ component

A list of computes is displayed with specific information about the compute including:

- Hostname - dynamically composed from <platform_name>-<cloud_id>-<compute_index>-<compute_id>
- Instance Name
- Instance Id
- Hypervisor
- Availability Zone
- OS Name
- Server Image Name
- Number of CPU Cores
- Ram in MB
- Private IP
- Public IP

Alternatively you can use [search](../general/search.html] to access one or a list of computes, find a compute via a
[keyboard short cut](../general/user-interface.html) or access a compute via a [favorite](../general/favorites.html).

You can select one or multiple computes and perform _Action_s:

- _reboot_: performs a software-based restart of the compute.<br>
- _repair_: attempts restart the monitoring of the compute that caused it to report as unhealthy. If unsuccessful,
proceed with a reboot automatically.<br>
- _powercycle_: perform a hard restart of the compute.<br>
- _apply-security-compliance_:  <br>
- _upgrade-os-security_: apply security-related operating system package upgrades<br>
- _upgrade-os-package_: upgrade a specific operating system package.<br>
- _upgrade-os-all_: upgrade a specific operating system package.<br>
- _status_: display the status in a dialog.<br>
- _list of IPs..._: show a list of the IP numbers of the selected computes in a dialog.<br>
- _replace_: mark the compute for replacement. The actual replacement needs to be forced via a new deployment.<br>
- _undo replace_: remove the replacement mark.

Clicking on the name of a specific compute allows you to navigate to the details view. It contains tabs related to

- _summary_: summary information about the compute including sections for _Status_, _Actions_, _Availability_ , Important Attributes_ and _Action History_.<br>
- _configuration_: detailed view of the compute configuration attributes including a _replace_ feature.<br>
- _monitors_: list of [monitors](./monitors.html) <br>
- _notifications_: charts about the compute availability and notifications.<br>
- _procedures_: list of procedures such as _status_ actions, that were performed on the compute<br>
- _logs_: access to the logs.<br>

## Example Use Cases

### Find IP Number of a Compute

Locate the compute in operation and look at the _public ip_ value. 

Note that a computes's IP Address may change. Avoid building any reliance on an IP address in your application or
operations. Consider an IP Address transparent and changing like a process ID number PID. Whenever a compute goes
through reboot, repair or replace activities, the compute may receive a new IP Address.

### Fix Unresponsive Computes with Reboot

- Locate the computes of the desired platform in operation.
- Select the check boxes beside the names.
- Click on the _Action_ button on the right side on top of the list.
- Select _reboot_ in the dialog.
- Leave step size to 100% to reboot all selected computes at once, smaller values result the action performed in batches
e.g. a step size of 50% and a selection of 10 computes causes 5 computes to be rebooted first and when they are rebooted and healthy the next 5 are rebooted.
- Press _confirm_ to start.

For a single compute you can:

- Locate the compute.
- Go to the _summary_ tab.
- Press on the _Choose Action to Execute_ button under the _Actions_ header.
- Select _Confirm_ in the dialog.
- If the compute does not respond after the reboot, try with a _repair_ action.

![Reboot Compute](/assets/docs/local/images/reboot-compute.png)

### Replace a Bad Compute

Replacing a compute results in the loss of any data available with that VM, for example, log files etc. The new compute
has new identifiers and attributes such as IP numbers are changed as well.

- Ensure that there is no active or pending deployment for the environment.
- Follow the steps to fix unresponsive computes from above using the action _replace_.
- Navigate to the environment's _summary_ tab.
- Press the _Force Deploy_ button
- Review the deploy plan in the dialog and press the _Deploy_ button.

### Upgrade OS Packages on a Compute

- Locate the compute in the list and select it 
- Select the action _upgrade-os-package_ to upgrade a specific package.
- Set the argument using the package name.
- Press the _Start now_ button.

Alternatively select the _upgrade-os-all_ action to apply all upgrades and install any new required packages or 
_upgrade-os-security_ to apply security-related upgrades only.
 
All Kernel-related patch updates require a compute reboot. After the packages are installed, do a rolling reboot of
computes.

### Connect to Compute via SSH

You can ssh into a compute VM once you have ensured that your certificate is trusted. This allows you to inspect the
current state of the compute and investigate problems and other aspects of the compute configuration at runtime:

- Ensure that the platform for the compute you want to connect to includes a 
[user component](../design/user-component.html) with the desired _Username_ and _Authorized Keys_.
- If necessary, add the user component, pull the design in your environment and deploy.
- Determine the _Public IP_ of the compute.
- Connect with `ssh username@public_ip`.

### Update the Size or OS of a Compute

An update to the compute configuration including size, OS and others needs to be done
[in the design phase and then deployed](../design/compute-component).
