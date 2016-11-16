---
layout: user-doc
title: Manage OneOps User Accounts
id: manage-oneops-user-accounts
---

# Account Access Overview

OneOps administrator accounts have powerful controls that can help you customize team and individual access. By following these best practices, you can easily set up OneOps to suit your business needs.

Make customizing access within OneOps simply by creating teams within your organization. You can add users to a team at any time, and assign privileges to the team as a whole. That way you can give groups of users the same access quickly and easily.

# Definitions


* **User:** An individual registered user to OneOps. It can be any user or a Service Account
* **Group:** List of users grouped together under one name.
* **Team:** A way to manage user access by allowing or restricting accesses and permissions


## Register New User

A new user has to log into the OneOps site and accept the terms and conditions. When the user is added to the system, the user can be granted access to one or more organizations by adding the user to an existing group or team or simply adding the user without any specific team access. User once added to an organization, without team specific priviledge has read-only access to all clouds within the organization, but no access to assemblies.

## About Groups

Users can also be managed using groups. A group has one or more users. Such groups can then be added to one or more teams.


* Groups can be created under user profile section /account/profile#groups
* Any number of users can be added to a group
* Add either a user or a group to teams inside organizations
* Groups can span organizations, hence the group name is unique in the system. 
* Groups are self-governed by group admins regardless of organization associations.

## About Teams

Team is the way to manage access control for the users.

* Teams are unique per organization
* New teams can be added to an account under an organization /<org-name>/organization/edit#teams


See <a href="javascript:loadContent('/documentation/user/how-to/create-a-team-in-an-organization.html');">Create Team</a>

# Frequently used team access scenarios

## Complete Control within an Organization.

>The Admin is the most powerful control and should be limited to very few associates in an organization. Admin has priviledge to add/update/delete any resource within an organization

An admin team pre-exists in all of the organizations. Add the user or group to this admin team.

![Admin team add user](/assets/docs/local/images/admin-team-add-user.png)

## Read-Only Access to all resources within an Organization

Create a team with both Manage Access and Organization Scope checked and uncheck all Cloud/Assembly permissions. Members of this team have read-only access to the complete organization.

## Ability to Create Assembly and Cloud without any DTO Permissions

Create a team with Manage Access checked only. Members of this team are only able to create a new assembly or cloud without the ability to add platforms/environments to the assembly or cloud services to the cloud.

## Ability to Manage an Assembly

Create a team with Assembly Permissions checked (all DTO). Add this team to the assembly where members are required management access

## Ability to Create and Manage an Assembly

Create a team with Manage Access checked along with Assembly permissions. Members of this team have rights to create and manage their assemblies.

## Ability to Approve Deployments

Create a team with Organization Scope checked along with compliance or support permission as required. Add a Support/Compliance object to the clouds which would require deployment approval from this team members to proceed.

