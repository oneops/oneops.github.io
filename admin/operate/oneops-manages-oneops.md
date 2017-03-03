---
layout: admin-doc
title: OneOps Manages OneOps
id: oneops-manages-oneops
---

We have two separate instances of OneOps named **prod** and **admin**.
They are in **different regions**, managing each other.

We did this by creating a seed environment from our qa env.

oneops-manages-oneops

1. The seed env created our first env: admin.
2. Then we took a snapshot of the database in the seed env and shutdown the env.
3. The admin env then created a prod env and restored the snapshot from the seed.
4. When prod came up it had all the data to manage admin. This enabled prod and admin to manage each other.
