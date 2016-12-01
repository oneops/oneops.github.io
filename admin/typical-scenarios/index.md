---
layout: admin-doc
title: Upgrading OneOps
id: upgrading-one-ops
---

# Upgrading OneOps in Production instance.

Most of the times, **upgrading** OneOps is *just* deploying a latest build of source code in production. This typically involves

* Building OneOps deployable refer [build](https://github.com/OneOps/build-wf).
* Changing **version** of OneOps which will result in release comprising of almost all platforms (where ever variable is referred)
* We do **Zero Downtime Deployments** by having
    1. Setting up suitable cloud priority on deployments.
    2. Disable *ECV* before deployment and then **ON** after the code is deployed.

This is simplified by having OneOps (management) managing OneOps.
