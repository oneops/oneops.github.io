---
layout: project
title: Check Status, Repair and Restart a VM
id: check-status-repair-restart-vm
---

# Solution

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

