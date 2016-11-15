---
layout: project
title: Replace a Bad VM
id: replace-a-bad-vm
---

Replacing a VM results in the loss of any data available with that VM, for example, log files etc. If you are replacing the VM for a Database or Cache, check with the respective teams before replacing the compute. Additionally, the IP address will change.

Below are the instructions to replace any VM instance when you need to. An example of when you might need to replace a bad VM would be if your team concludes that the failed VM instance cannot be restored for long time or ever. Replacements will generate new IP addresses so any time you do this you need to make sure the Nagios monitoring is adjusted.

# Solution


1. Make sure that there is no active or pending deployment for the environment.
2. Go to Operations and then to the compute instance that is unhealthy and needs to be replaced. 
3. Select the **configuration** tab and click **Replace.** (Note that this only marks the VM for replacement in OneOps. It does not initiate the actual replacement immediately.)
4. To replace multiple VMs at a time, repeat steps 2 and 3 for any VM you need to replace. Also, you can do step 5 and perform the replacements for some of them before doing others.
  
    **Bulk Replace:** As an alternative to repeating steps 2, 3, and 4, for every instance to be replaced, a multi-select bulk replace operation is available in the component (instance list). Any instance that is already marked for replacement has a purple marker. To do a replace for additional instances, multi-select the instances and then select **replace** from the top-right list menu. The process is exactly the same as selecting individual instances to be replaced. This step only marks/prepares the instances for replacements. The actual replacement is done with the steps below.
  
5. To generate a deployment plan with the replacements steps, go to Operations to the top of the environment summary page and click **Force Deploy.** (Items in the plan have the left green arrow icon in the deployment overlay.)
6. Deploy.

>There is also an “Unreplace” button to unmark the VM should you change your mind before step (6). Once the deployment is kicked off, then it has to be completed.
Obviously the success of the replacement depends on the state of the OpenStack cloud. If there is a bad hypervisor, the Elastic Cloud team needs to ensure that it is disabled so that any new VM replacements do not get allocated to it and fail.



