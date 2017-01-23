---
layout: user-doc
title: Add a New Azure Cloud
id: "add-a-new-azure-cloud"
---

# Solution

To add a new cloud for Azure, follow these steps:  


1. Log into OneOps.
2. Select the organization.
3. Click “Add new Cloud.”
    * Enter the name.
    * Enter the description.
    * Select **Custom** and enter the auth Key.
4. Go to the box.
5. Add the inductor with the authorization key.
6. Log into OneOps.
7. Select your cloud.
8. Add the cloud services needed for Azure
9. Compute  
    * Select the Service: ex `azure-eastus2`.  
    * Enter the tenant, client id, subscription id, and client secret.  
    * These values will come from setting up your organization in the Azure portal.  This should be done prior to configuring an Azure cloud.  
    * Express Routes are only used if you need a private connection from your network and Azure. By default, do not select it.  
    * **With Express Routes NOT selected:**
    * Enter a Network address range: ex `10.0.0.5/16`  
    * Enter a Subnet address range: ex `10.0.0.5/24`  
    * Enter a DNS server(ip): ex `8.8.8.8`
    * You can leave the rest with default values.  
    * Click **save.**  
    * Edit the service.  
    * Click **status.**  
    * Validate the status check is successful.  
10. Add the remaining services:
    * Azure DNS
    * Azure LB
    * Azure Traffic Manager
    * Mirrors
11. Add the variable:
    * cloudName: name of the cloud

----

* If **Express Routes** is something you plan on using you will be expected to provide the following.  
* Enter the Resource Group in Azure that has the VNET which is connected to the express route.  
* Enter the VNET name  
* The Resource Group and VNETs are things that need to be setup prior to configuring this cloud.  If you are using Express Routes you already know you will be using a specific address space and that will need to be configured on the VNET/Subnets in this resource group.
  
