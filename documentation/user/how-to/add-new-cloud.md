---
layout: user-doc
title: Add a New Cloud
id: "add-a-new-cloud"
---

# Solution

A cloud can be defined as a group of services which enables resource allocation/usage. It contains services such as Rackspace/AWS used for the compute creation, Nexus service is used to store the artifacts or repos, f5/citrix netscaler service is used for the load balancing and many more. OneOps creates multiple clouds per organization.


1. Log into OneOps.
2. Select the Organization.
3. Click “Add new Cloud.”
    1. Enter the cloud name.
    2. Enter the description.
    3. Select **Custom** and enter the auth Key.
4. Log into OneOps.
5. Select your cloud.
6. Add the Openstack Service
    1. Select the Service: ex `openstack:cloudName`.
    2. Enter the Name, tenant, username and password.
    3. Click **save.**
    4. Click on the service.
    5. Click **status.**
    6. Check whether the Quota is populated or not.
7. Add the remaining appropriate services:
    * Nexus Service
    * Load balancer
    * Nexus
    * Mirrors
8. Add any variables as needed.
