---
layout: project
title: Cost Management
id: "Cost Management"
---

# Cost Management

To provide an overview of cost management capabilities in OneOps product. The cost management feature allows organization administrators to:

* Define a cost structure for all cloud services offerings
* Set limits/quotas on cloud service allocations (actual + reserved) of cloud services offerings per assembly
* Reporting on current cloud service allocation (actual + reserved)

# Details

Cost management feature will add the following:

* Cloud service offerings information in CMS with index in ES to capture the unit resource costs associated with consuming cloud resources (to be used both for tracking  
Cost as well as for active quota limits)

* Relationships between assembly environments and cloud offerings in CMS with index in ES to capture the current allocations, actual + reserved. (to be used for current allocation 
Reports and for real-time quota limits)

* Deployment time cost capture in ES as part of the workorders to capture the actual utilization of resources over time (to be used as historical event stream for showback and chargeback reporting)
 
Cost Management features can be categorized primarily into the following three categories:

* **Cost Tracking** - modeling and maintenance of offerings and cost tracking during deployments with reporting
* **Cost Reporting** - implement cost index in the backend and a cost explorer in the UI
* **Cost Management** - limits, budgets, projections, monthly billing/chargeback
