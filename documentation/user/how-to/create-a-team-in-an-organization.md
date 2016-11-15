---
layout: project
title: Create a Team in an Organization
id: create-a-team-in-an-organization
---

# Solution

<video width="720" height="480" preload="metadata" controls="" class="grovo-video">
    <source src="http://videos.grovo.com/walmart-oneops-0215_creating-teams-in-an-org_4668.webm?vpv=1" type="video/webm">
    Your browser does not implement HTML5 video. 
</video>

Creating a team is the cleaner way to assign roles in OneOps.


1. Login to the OneOps environment.
2. If you are an admin of a organization, you can see the tab, **Team.**
3. Create a new team and assign the appropriate roles to it.
4. Edit the assembly.
5. Click **Team.**
6. Click **edit** and select the newly created Team.

## About Team Fields

The following is some information about team fields:


* **Name:** Name of team
* **Description:** A brief description about the purpose of the team
Access Management
* **Manage Access:** When checked and this team is added to a cloud or an assembly, manage access allows team members to manage other team assignments.  Additionally, when checked, manage access allows teams members to create new clouds and assemblies.
* **Organization Scope:** When checked, this team automatically has access to all assemblies and clouds in the organization (without the need to assign the team explicitly and governed by the permissions specified below)
* **Cloud Permissions:** Allows members to have a complete view of the cloud with limited or complete write/execute privileges depending upon the selected permissions listed below
* **Services:** When checked and this team is added to a cloud or has Organization Scope, it allows team members to manage cloud services, for example, add/update/delete cloud services.
* **Compliance:** When checked and this team is added to a cloud, it allows team members to approve deployment, involving corresponding cloud. For example, if a team has this permission and there is one cloud named qa-azure1 with compliance object added, then all deployments involving the qa-azure1 cloud would require an approval. This approval can be granted by admin or members of this team's.
* **Support:** When checked and this team is added to a cloud, it allows team members to approve deployment, involving the corresponding cloud. For example, suppose a team has this permission and there is one cloud named stg-openstack1 with a support object added, then all deployments involving the stg-openstack1 cloud would require an approval. This approval can be granted by admin or members of this team's.
* **Assembly Permissions:** Allows members to have a complete view of the assembly with limited or complete write/execute privileges depending upon the selected permissions listed below. The permissions are also called DTO (design, transition and operations) permissions.
* **Design:** When checked and this team is added to an assembly, it allows the team members to manage the design including add/update/delete platform, components and variables within the assembly
* **Transition:** When checked and this team is added to an assembly, it allows team members to manage the transition phase which allows members access to:
    * Add/update/delete environment
    * Add/update/delete component monitor thresholds
    * Update components and variables within the environment
    * Pull design
    * Commit open releases 
    * Perform deployments
* **Operations:** When checked and this team is added to an assembly, it allows team members to manage the operate phase allowing members access to execute any actions/procedures and mark any instance for replacement.
* **User Members:** Add one or more individual users
* **Group Members:** Add one or more groups
