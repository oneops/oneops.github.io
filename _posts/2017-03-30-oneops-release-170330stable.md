---
layout: wmt/post
title: Visibility - OneOps Release 17.03.30-STABLE
published: true
authors: [mmoser]
---

Visibility and control is theme that can be seen in our current release. Specifically we are adding visibility into some
statistics about pack usage in operation.  This information is useful for pack users, authors and administrators.
And we are adding control to restrict pack usage for authors.

<!--more-->

The operation statistics are visible to users when creating a pack and include information such as number of assemblings
using the pack, number of computes and others.

<img src="../../assets/img/ui/pack-operation-stats.png"/>

As a pack developer or author you can restrict your pack to be used only in specified organizations. This allows you to
e.g. restrict it to your own organization while you develop it and improve it.

Beyond these changes we have a couple of other improvements for you:

## New Features

* Display pack usage related operation statistics
  * when adding platform in assembly creation screen for users
  * in pack administration section
  * see [Commit](https://github.com/oneops/display/commit/77a57fe6cb8231c3fc34e7667be739dfbc46d45c)
* Support for Windows domain account usage with SQL server pack - [PR](https://github.com/oneops/circuit-oneops-1/pull/750)
* Ability for pack author/owner to restrict usage to specific organizations in a OneOps deployment - [Commit](https://github.com/oneops/display/commit/77a57fe6cb8231c3fc34e7667be739dfbc46d45c)

## Bug Fixes and Improvements

* Display specific threshold violation directly with unhealthy compute display - [Commit](https://github.com/oneops/display/pull/173/commits/2bac557cb5e86b677b7ee5777661ef73eff84df2)
* Performance improvements for deployment plan generation - [PR](https://github.com/oneops/transistor/pull/101)
* Changed default step size for compute replacements to use stepped roll out instead of 100%
* Ensure master volume is correctly created for Elasticsearch pack - [PR](https://github.com/oneops/circuit-oneops-1/pull/759)

## Source Release Tags

- [oneops-admin tag 17.03.30-STABLE](https://github.com/oneops/oneops-admin/tree/17.03.30-STABLE)
- [db-schema tag 17.03.30-STABLE](https://github.com/oneops/db-schema/tree/17.03.30-STABLE)
- [cmsdal tag 17.03.30-STABLE](https://github.com/oneops/cmsdal/tree/17.03.30-STABLE)
- [display tag 17.03.30-STABLE](https://github.com/oneops/display/tree/17.03.30-STABLE)
- [oo-commons tag 17.03.30-STABLE](https://github.com/oneops/oo-commons/tree/17.03.30-STABLE)
- [adapter tag 17.03.30-STABLE](https://github.com/oneops/adapter/tree/17.03.30-STABLE)
- [amp-plugin tag 17.03.30-STABLE](https://github.com/oneops/amq-plugin/tree/17.03.30-STABLE)
- [antenna tag 17.03.30-STABLE](https://github.com/oneops/antenna/tree/17.03.30-STABLE)
- [controller tag 17.03.30-STABLE](https://github.com/oneops/controller/tree/17.03.30-STABLE)
- [daq tag 17.03.30-STABLE](https://github.com/oneops/daq/tree/17.03.30-STABLE)
- [opamp tag 17.03.30-STABLE](https://github.com/oneops/opamp/tree/17.03.30-STABLE)
- [search tag 17.03.30-STABLE](https://github.com/oneops/search/tree/17.03.30-STABLE)
- [sensor tag 17.03.30-STABLE](https://github.com/oneops/sensor/tree/17.03.30-STABLE)
- [inductor tag 17.03.30-STABLE](https://github.com/oneops/inductor/tree/17.03.30-STABLE)
- [cms-admin tag 17.03.30-STABLE](https://github.com/oneops/cms-admin/tree/17.03.30-STABLE)
- [transmitter tag 17.03.30-STABLE](https://github.com/oneops/transmitter/tree/17.03.30-STABLE)
- [transistor tag 17.03.30-STABLE](https://github.com/oneops/transistor/tree/17.03.30-STABLE)
- [oneops-admin tag 17.03.30-STABLE](https://github.com/oneops/oneops-admin/tree/17.03.30-STABLE)
- [circuit-oneops version 1-5.0.615](https://github.com/oneops/circuit-oneops-1/releases/tag/circuit-oneops-1-5.0.615)

Enjoy,

_OneOps Team_
