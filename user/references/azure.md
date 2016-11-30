---
layout: user-doc
title: Azure
id: "azure"
---

Only Azure Resource Manager (ARM) is supported in OneOps. Currently only Linux workloads are supported. Windows will come at a later date.  
 

If you are **not** using Express Routes, everything is dynamically created apart from the 4 pieces of information needed to communicate with Azure; Tenant Id, Subscription Id, Client Id, and Client Secret.  


When you deploy into an Azure cloud, it will generate a Resource Group and Availability set in the first step of deployment. The resource group and availability set will be named: `{org}-{assembly}-{platform}-{env}-{region}`  


During creation of the computes the NIC's, OS disk, VNETs, Subnets, and public IPs will be created. If you are using the Express Route option, a public ip, VNET and Subnet will not be created, instead it will use what was configured when the cloud service was setup.  


After the compute is created the rest of the deployment is the same as it would be for the other cloud providers, except DNS, LB, and GDNS.  
 
## Azure DNS
 
OneOps creates DNS on Microsoft Azure as a resource by creating


* A **DNS Zone** resource in the Resource Group
* Followed by creating **DNS Record-Set(s)** in that zone

Record-Sets are assembled together in a single zone and will use any of two values (Type `A`,  Type `CNAME`).


* Record type **`A`** maps a hostname to an IP address.
* Record type **`CNAME`** creates an Alias of another domain name 

As a result the deployment has a DNS created with hostname mapping and domain alias if configured.

For more details on DNS see: <a href="/user/howto/add-cname-to-azure-dns.html">Azure DNS</a>  
 
## Load Balancer
 
OneOps creates and configures following resources in resource group to create a load balancer:


* **Front end IP configuration** - has public IP addresses for incoming network traffic.
* **Back end address pool** - has network interfaces (NICs) for the virtual machines to receive network traffic from the load balancer.
* **Load balancing rules** - has rules mapping a public port on the load balancer to port in the back end address pool. 
* **Inbound NAT rules** - has rules mapping a public port on the load balancer to a port for a specific virtual machine in the back end address pool.
* **Probes** - has health probes used to check availability of virtual machines instances in the back end address pool.
* **Servers** - your server machines (virtual machines) to entertain your requests

Before creating a load balancer following steps are performed on Microsoft Azure


* A *Virtual Network* is created with the specified subnet pool (for later use in backend IP pool) 
* A *Public IP* is devised that will be your internet facing IP for your servers
* An *Availability-Set* is generated and all your back-end servers belong to that availability-set
* And finally a *Load-Balancer* is set-up
* Next `n` Virtual Machines are provisioned to run your servers (where ‘n’ is the number of servers you want to Set-Up) and for each machine a NIC (network interface card) is built.
 
## Traffic Manager

Before a traffic manager is created on Azure, it requires 


* Deployed Azure cloud services, Azure websites, or other endpoints to production environment.
* A name decided for Traffic Manager domain.

This Traffic Manager domain name will also be used as a unique prefix to create the FQDN in the Azure public domain.

The result will be `<traffic-manager-domain-name>.trafficmanager.net`


* OneOps configured monitoring configuration.
* Traffic routing method `i.e Performance, Weighted or Priority`.

Based on above information OneOps creates Traffic Manager profile resource on Azure by:


1. Creating a Traffic Manager profile
2. Configuring traffic routing method settings
3. Configuring endpoints
4. Configuring monitoring settings

As a last step when the Traffic Manager Profile is created on Azure, OneOps points company's domain name DNS resource record to the created profile. Traffic Manager is live after this last step. 

`Note: Please do not make any changes to the Traffic Manager configurations from the portal.`