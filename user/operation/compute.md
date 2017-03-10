---
layout: user-doc
title: Computes in Operation
---

The [`compute` component](../design/compute-component.html) represents the virtual machine and operating system on
which a platform runs in operation.

You can locate computes by navigating to a platform of your assembly within an environment in the operation phase. A
list of computes is displayed with specific information about the compute:

- Hostname
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

You can select one or multiple computes and perform actions:

- _reboot_: performs a software-based restart of the compute.<br>
- _repair_: attempts restart the monitoring of the compute that caused it to report as unhealthy. If unsuccessful,
proceed with a reboot automatically.<br>
- _powercycle_: perform a hard restart of the compute.<br>
- _apply-security-compliance_: <br>
- _upgrade-os-security_: <br>
- _upgrade-os-package_: <br>
- _upgrade-os-all_: <br>
- _status_: <br>
- _list of IPs..._: show a list of the IP numbers of the selected computes<br>
- _replace_: mark the compute for replacement. The actual replacement needs to be forced via a new deployment.<br>
- _undo replace_: remove the 

Clicking on the name of a specific compute allows you to navigate to the details view. It contains tabs related to

- _summary_: <br>
- _configuration_: <br>
- _monitors_: <br>
- _notifications_: <br>
- _procedures_: <br>
- _logs_: <br>

## Example Use Cases

### Find IP Number of a Compute

Locate the compute in operation and look at the _public ip_ value. 

Note that a computes's IP Address may change. Avoid building any reliance on an IP address in your application or
operations. Consider an IP Address transparent and changing like a process ID number PID. Whenever a compute goes
through reboot, repair or replace activities, the compute may receive a new IP Address.


### Fix Unresponsive Computes

- Locate the computes of the desired platform in operation
- Select the check boxes beside the names
- Click on the _Action_ button on the right side on top of the list
- Select _reboot_ in the dialog and confirm

For a single compute you can:

- Locate the compute 
- Go to the _summary_ tab
- Press on the _Choose Action to Execute_ button under the _Actions_ header
- Select _Confirm_ in the dialog
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

## Upgrade OS Packages on a Compute

- Locate the compute in the list and select it 
- Select the action _upgrade-os-package_ to upgrade a specific package.
- Set the argument using the package name.
- Press the _Start now_ button.

Alternatively select the _upgrade-os-all_ action to apply all upgrades and install any new required packages or 
_upgrade-os-security_ to apply security-related upgrades only.
 
All Kernel-related patch updates require a compute reboot. After the packages are installed, do a rolling reboot of
computes.




## ssh a VM
i
1. Go to your design.
2. Modify the component user-app to add to the "Authorized Keys" attribute. 
  
    The value will be the public keys of the users (cat ~/.ssh/id_rsa.pub) who need to have ssh access to your VM. 
  
3. Add one key at a time and click plus sign to add for more users.
4. Save the design changes and commit.
5. Go to Transition.
6. Click **pull the design** in the environment where the VM is.
7. Deploy. (Only the user-app step is executed again.)
8. At a successful deploy, you can log into the VM by doing ssh app@<ip-of-vm>.
  

## SSH to a Compute Node

1. Go to your **Assembly** and select the **Edit the User** component (for example, `user_app`) to add your public keys to the Authorized Keys attribute.
2. If your platform doesn’t have a user component, add one from the component panel on the right side by clicking the **+** next to the user.
3. Get the public key of the user (`cat ~/.ssh/id_rsa.pub`) who needs to have SSH access to your compute (VM).
4. Add one key at a time and click **+** to add more users.
5. Save the design changes and click **Commit.** 
6. Go to **Transition.** 
7. In the environment where the VM is, click **Pull the design.** 
6. Deploy the changes. (Only the user-app step is executed again.)
7. At a successful deploy, you can SSH to the VM by entering:

```
$ ssh <user-name-you-chose>@<ip-of-vm>
```


## Find the hostname of a VM
id: find-hostname-of-vm

The hostname for each VM is dynamically composed in this format:

```
<platform_name>-<cloud_id>-<compute_index>-<compute_id>
```

where:

* **platform_name:** Name of the platform in your design
* **cloud_id:** Internal unique OneOps ciId of the cloud where the VM is deployed
* **compute_index:** Integer index of the compute component in that platform in that cloud
* **compute_id:** Internal unique OneOps ciId of the compute instance

Example:  portal-4349532-1-5107200


##  Fix Unresponsive Compute

id: fix-unresponsive-compute

To fix an unresponsive compute, follow these steps to reboot the compute:


1. Issues a reboot action from the operations of the compute component.
  
    ![Reboot Compute](/assets/docs/local/images/reboot-compute.png)
  
2. If the compute does not respond after the reboot, replace the compute. For instructions on how to replace a compute, go to <a href="#replace-a-bad-vm">Replace a Bad VM</a>.
3. If it is not an option to replace the compute, contact your OneOps administrator for further assistance to bring the node up. 

## Reboot Computes

id: reboot-computes

To reboot computes in OneOps:

1. Go to the operation phase of the compute component.
2. Select the computes you want to reboot and then click **Action**.
  
    ![Reboot Computes](/assets/docs/local/images/reboot-computes.png)
  
3. Select **reboot.**
4. Select the set size.
5. Start the procedure.
6. To do only 50% at a time, select **50** for the step size and deploy.
  
>If 100% is selected, then all of the computes are restarted at the same time.
  
![Reboot Computes New](/assets/docs/local/images/reboot-computes-new.png)




## Replace a Bad VM

Replacing a VM results in the loss of any data available with that VM, for example, log files etc. If you are replacing the VM for a Database or Cache, check with the respective teams before replacing the compute. Additionally, the IP address will change.

Below are the instructions to replace any VM instance when you need to. An example of when you might need to replace a bad VM would be if your team concludes that the failed VM instance cannot be restored for long time or ever. Replacements will generate new IP addresses so any time you do this you need to make sure the Nagios monitoring is adjusted.


1. Make sure that there is no active or pending deployment for the environment.
2. Go to Operations and then to the compute instance that is unhealthy and needs to be replaced. 
3. Select the **configuration** tab and click **Replace.** (Note that this only marks the VM for replacement in OneOps. It does not initiate the actual replacement immediately.)
4. To replace multiple VMs at a time, repeat steps 2 and 3 for any VM you need to replace. Also, you can do step 5 and perform the replacements for some of them before doing others.
  
    **Bulk Replace:** As an alternative to repeating steps 2, 3, and 4, for every instance to be replaced, a multi-select bulk replace operation is available in the component (instance list). Any instance that is already marked for replacement has a purple marker. To do a replace for additional instances, multi-select the instances and then select **replace** from the top-right list menu. The process is exactly the same as selecting individual instances to be replaced. This step only marks/prepares the instances for replacements. The actual replacement is done with the steps below.
  
5. To generate a deployment plan with the replacements steps, go to Operations to the top of the environment summary page and click **Force Deploy.** (Items in the plan have the left green arrow icon in the deployment overlay.)
6. Deploy.

>There is also an “Unreplace” button to unmark the VM should you change your mind before step (6). Once the deployment is kicked off, then it has to be completed.
Obviously the success of the replacement depends on the state of the OpenStack cloud. If there is a bad hypervisor, the Elastic Cloud team needs to ensure that it is disabled so that any new VM replacements do not get allocated to it and fail.



##  Check Status, Repair and Restart a VM

id: check-status-repair-restart-vm

To perform all restarts, starts, stops and repairs in the Operate phase of OneOps, follow these steps:

1.  In the Dashboard in the OneOps organization, select the assembly.
  
    ![Check Status Dashboard](/assets/docs/local/images/check-status-dashboard.png)
  
2. Click Operate. 
  
    ![Check Status Operate](/assets/docs/local/images/check-status-operate.png)  
    The Environments page displays.
  
    ![Check Status Environments](/assets/docs/local/images/check-status-environments.png)  
  
3. Select your environment (usually Prod).
  
    The Environments page defaults to the summary tab.  
    ![Check Status Summary](/assets/docs/local/images/check-status-summary.png)
  
4. Click **graph.**
    
    A graph displays all processes and instances for the selected environment.
    
    >Where the graph displays more components than are easily visible, refer to the component list on the right side of the page.
    
    ![Check Status Graph](/assets/docs/local/images/check-status-graph.png)
    
5. Click the circle icon associated with the compute (VM) you want to restart (start, stop or repair). The Compute Instance page displays your selected instance.
    
    ![Check Status Instance](/assets/docs/local/images/check-status-compute-instance.png)
    
6. Click an action from the Actions panel:
  
  * Status
  * Reboot
  * Upgrade-os-security (Until further notice, NOC analysts will not select this action)
  * Repair
  * Upgrade-os-all (Until further notice, NOC analysts will not select this action)
  
    A confirmation message displays asking you to start your action.
  
    ![Check Status Confirmation](/assets/docs/local/images/check-status-confirmation.png)
  
7. Click **Start Now.**



