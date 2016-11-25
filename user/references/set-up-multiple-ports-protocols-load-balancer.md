---
layout: user-doc
title: Set Up Multiple Ports/Protocols in Load Balancer
id: set-up-multiple-ports-protocols-load-balancer
---

There is a syntax to declare the virtual port/protocol and the instance port/protocols for the LB component. Each vport/vprotocol and iport/iprotocol combination is encapsulated in a single listener array as shown in the screenshot below. For a single listener, the syntax is `"vprotocol vport iprotocol iport"`. For multiple ports/protocols, it is possible to have multiple entries of listeners to be configured in the LB component.

![Multiple ports protocols](/assets/docs/local/images/multiple-ports-protocols.png)

There is also a map-based syntax for the ECV declaration. The ECV map entries have the key as the instance port and the URL as the health-check URL pattern, with the HTTP method for the service listening on that port. To ensure that monitors are created for all service groups, it is necessary to add ECV entries for the non-http services by using non-existing URL patterns.

[comment]: # (IMAGE-REQUIRED: set-up-multiple-ports.png)
