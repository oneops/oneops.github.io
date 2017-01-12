---
layout: user-doc
title: Security Groups
id: security-groups
---

A security group is a named collection of network access rules that is used to control the types of traffic that have access to your application. The associated rules in each security group control the traffic to platforms in the group.

In the old clouds, the security groups were provided by default at the cloud level. This allowed inter-communication between any platforms, which was a security concern. As a result, the new clouds that run Juno do not have any default security groups defined. Application teams need to add the secgroup component available in OneOps to open the relevant ports required for their application. The default list of ports for each platform is added to the circuits and shows up when the sec group component is added to the design in OneOps.

# Solutions

Three possible scenarios are described below.

## Platform with Security Groups

1. Review the ports that are added as part of this component and ensure that all the ports that are needed for your application are added.
2. If it is necessary to add or edit the ports, follow the steps in [Add or Delete a Security Group to Open or Close an Additional Port](/user/design/add-or-delete-a-security-group-to-open-or-close-an-additional-port.html).
    1. Make sure that port 22 is in the list or deployment will fail at the compute provisioning step.
    2. The default ports for the Tomcat, Jboss, nodejs should be open if the configuration has not changed and should have these ports. For a complete list of platforms, see the [List of Ports by Platform](/user/design/ports-by-platform.html).

| Platform | Port Rule
|----------|-----------
|Tomcat    |22 22 tcp 0.0.0.0/0<br/>8080 8080 tcp 0.0.0.0/0<br/>8443 8443 tcp 0.0.0.0/0<br/>8009 8009 tcp 0.0.0.0/0
|JBOSS     |22 22 tcp 0.0.0.0/0<br/>8080 8080 tcp 0.0.0.0/0<br/>8443 8443 tcp 0.0.0.0/0<br/>8009 8009 tcp 0.0.0.0/0
|nodejs    |22 22 tcp 0.0.0.0/0<br/>8080 8080 tcp 0.0.0.0/0<br/>8443 8443 tcp 0.0.0.0/0
|gluster   |22 22 tcp 0.0.0.0/0<br/>24007 24100 tcp 0.0.0.0/0<br/>24007 24100 udp 0.0.0.0/0<br>34865 34867 tcp 0.0.0.0/0<br/>34865 34867 udp 0.0.0.0/0<br/>111 111 tcp 0.0.0.0/0<br/>111 111 udp 0.0.0.0/0<br/>49152 49153 tcp 0.0.0.0/0<br/>49152 49153 udp 0.0.0.0/0

## Platform with No Security Groups


1. Go to your Design.
2. Click the Platform to which you want to add the security group.
3. Click **+** on the secgroup component.
4. Review the list of default ports available for that platform. (For example: below is a screenshot for the JBoss platform.)
  
    ![JBoss default](/assets/docs/local/images/jboss-default.png)
  
5. To add new ports that are not part of the list, follow the instructions at [Add or Delete a Security Group to Open or Close an Additional Port](/user/design/add-or-delete-a-security-group-to-open-or-close-an-additional-port.html).

## New Platform

The secgroup component is added by default as part of every platform.

> If an application requires other ports to be opened, it is important to do this so that the application works.
