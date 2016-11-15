---
layout: project
title: Relations
id: relations
---

The following model diagrams describe the relationships for Design, Transition, and Operations in the OneOps UI. <a onclick="javascript:loadContent('/documentation/developer/key-concepts/index.html');">Relationships</a> also have attributes, some of which are used to scale.

# Design

In the Design aspect, we model the base application:

* No environmental 
* No operational components

![Design relations](/assets/docs/local/images/design-relations.png)

# Transition

In the Transition aspect, we model two additional objects:

* **IaaS components:** Can be load balancers (`haproxy`) or DNS (`djbdns`). Can also use provider-based ones like `route-53`, `dyndns`, `elb`, etc.
* **Monitors:** Use to customize monitors for each environment

![Transition relations](/assets/docs/local/images/transition-relations.png)

# Operations

In the Operations aspect, we create `bom` components for the manifest components with relation to the Binding (cloud provider).

![Operations relations](/assets/docs/local/images/operations-relations.png)


