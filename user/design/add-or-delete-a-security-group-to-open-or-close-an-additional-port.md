---
layout: user-doc
title: Add or Delete a Security Group to Open or Close an Additional Port
id: "add-or-delete-a-security-group-to-open-or-close-an-additional-port"
---

Security group is a mandatory component in all packs. It can be used to open up additional ports as required by the application.

# Solution

To add a Security Group, follow these steps:

1. Go to the design of the platform where you want to add the security group.
2. Select the **secgroup** component.

    ![Security Group](/assets/docs/local/images/secgroup.png)

3. In the secgroup details page, specify the multiple inbound rules as required in the form:

```
min max protocol cidr
```

* Min/Max: Indicates the port range. For a single port, select both as the same value.
* protocol: tcp/udp/icmp
* cidr: IP range in CIDR format. Select 0.0.0.0/0 to apply to all IPs
