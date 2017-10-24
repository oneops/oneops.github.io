---
layout: wmt/post
title: Fixer Upper - OneOps Release 17.04.05-STABLE
published: true
authors: [mmoser]
---

This week we are improving performance for plan generation, expanding the SQL Server support and fixing a few bugs.

<!--more-->

## New Features

* Support for _artifact_ component in [SQL Server pack](/user/design/ms-sqlserver-pack.html) - [PR](https://github.com/oneops/circuit-oneops-1/pull/778)

## Bug Fixes and Improvements

* Performance improvements for complex deployment plan generation - [PR](https://github.com/oneops/transistor/pull/101)
* Fix for loss of default monitors due to pull design - [PR](https://github.com/oneops/transistor/pull/104)
* Fix for intermittent problem with expanding log tab for deployment overlay and timeline tab - [Commit](https://github.com/oneops/display/pull/178/commits/1c9c1f2b4f5a901da46ffd8a1897f289fbc14777)
* Fix password creation problem for OneOps user on Windows compute - [PR](https://github.com/oneops/circuit-oneops-1/pull/780)

## Source Release Tags

- [oneops-admin tag 17.04.05-STABLE](https://github.com/oneops/oneops-admin/tree/17.04.05-STABLE)
- [db-schema tag 17.04.05-STABLE](https://github.com/oneops/db-schema/tree/17.04.05-STABLE)
- [cmsdal tag 17.04.05-STABLE](https://github.com/oneops/cmsdal/tree/17.04.05-STABLE)
- [display tag 17.04.05-STABLE](https://github.com/oneops/display/tree/17.04.05-STABLE)
- [oo-commons tag 17.04.05-STABLE](https://github.com/oneops/oo-commons/tree/17.04.05-STABLE)
- [adapter tag 17.04.05-STABLE](https://github.com/oneops/adapter/tree/17.04.05-STABLE)
- [amp-plugin tag 17.04.05-STABLE](https://github.com/oneops/amq-plugin/tree/17.04.05-STABLE)
- [antenna tag 17.04.05-STABLE](https://github.com/oneops/antenna/tree/17.04.05-STABLE)
- [controller tag 17.04.05-STABLE](https://github.com/oneops/controller/tree/17.04.05-STABLE)
- [daq tag 17.04.05-STABLE](https://github.com/oneops/daq/tree/17.04.05-STABLE)
- [opamp tag 17.04.05-STABLE](https://github.com/oneops/opamp/tree/17.04.05-STABLE)
- [search tag 17.04.05-STABLE](https://github.com/oneops/search/tree/17.04.05-STABLE)
- [sensor tag 17.04.05-STABLE](https://github.com/oneops/sensor/tree/17.04.05-STABLE)
- [inductor tag 17.04.05-STABLE](https://github.com/oneops/inductor/tree/17.04.05-STABLE)
- [cms-admin tag 17.04.05-STABLE](https://github.com/oneops/cms-admin/tree/17.04.05-STABLE)
- [transmitter tag 17.04.05-STABLE](https://github.com/oneops/transmitter/tree/17.04.05-STABLE)
- [transistor tag 17.04.05-STABLE](https://github.com/oneops/transistor/tree/17.04.05-STABLE)
- [oneops-admin tag 17.04.05-STABLE](https://github.com/oneops/oneops-admin/tree/17.04.05-STABLE)
- [circuit-oneops version 1-5.0.620](https://github.com/oneops/circuit-oneops-1/releases/tag/circuit-oneops-1-5.0.620)

Enjoy,

_OneOps Team_
