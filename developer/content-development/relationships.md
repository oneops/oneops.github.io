---
layout: dev-doc
title: Relationships
---

Relationships have attributes like other objects modeled in OneOps. We are working on adding pages to visualize and explain all of them.

There are two primary relationships used in packs:

* `depends_on` Sets the order of deployment and dependency tree for escalation
* `managed_via` How to know where to connect for management. In most cases, this is a compute, but in some, it is a cluster or ring.

Relationships are modeled like [components](/developer/general/key-concepts.html#component), with the same directory structure. Relationships also have attributes.

For more detail regarding relations for Design, Transition and Operations, see
[Relations](/developer/core-development/relations.html).

List of relationships:

```
authenticates
binds_to
composed_of
controlled_by
depends_on
deployed_to
escorted_by
forwards_to
links_to
managed_via
manages
provides
realized_as
realized_in
requires
secured_by
serviced_by
supplied_by
utilizes
value_for
watched_by
```

