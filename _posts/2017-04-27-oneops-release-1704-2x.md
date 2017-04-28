---
layout: post
title: Triplet - OneOps Releases 17.04.19, 17.04.21 and 17.04.26
published: true
authors: [mmoser]
---

Since our last release we have continued to focus on performance improvements big and small, all across the various
components of OneOps. A lot of them have just been in the background and have no user facing direct impact apart from
actions completing faster and everything feeling a bit zippier. So this time we are rolling up three release notes into
one. 

<!--more-->

One of the main focus points of the performance improvements was around improvements to compute updates. We now support
certain specific simple changes to be carried out on an existing compute instead of recycling the compute and creating
new fresh replacement. This removes the need for provisioning, OS and software installation and more that can typically
take between 60 and 120 seconds and results in the necessary changes to be performed in a few seconds now.

Besides these and other performance improvements we also implemented a few other changes and improvements:

# Changes

* Support for running compliance scripts on Windows - [PR](https://github.com/oneops/circuit-oneops-1/pull/806)
and [PR](https://github.com/oneops/oneops-admin/pull/184)
* Support for domain accounts as users in Windows computes - [PR](https://github.com/oneops/circuit-oneops-1/pull/798)

# Bug Fixes and Improvements

* Improved error message for failing volume mount action [PR](https://github.com/oneops/circuit-oneops-1/pull/811)

# Source Release Tags 17.04.19

- [oneops-admin tag 17.04.19-RC1](https://github.com/oneops/oneops-admin/tree/17.04.19-RC1)
- [db-schema tag 17.04.19-RC1](https://github.com/oneops/db-schema/tree/17.04.19-RC1)
- [cmsdal tag 17.04.19-RC1](https://github.com/oneops/cmsdal/tree/17.04.19-RC1)
- [display tag 17.04.19-RC1](https://github.com/oneops/display/tree/17.04.19-RC1)
- [oo-commons tag 17.04.19-RC1](https://github.com/oneops/oo-commons/tree/17.04.19-RC1)
- [adapter tag 17.04.19-RC1](https://github.com/oneops/adapter/tree/17.04.19-RC1)
- [amp-plugin tag 17.04.19-RC1](https://github.com/oneops/amq-plugin/tree/17.04.19-RC1)
- [antenna tag 17.04.19-RC1](https://github.com/oneops/antenna/tree/17.04.19-RC1)
- [controller tag 17.04.19-RC1](https://github.com/oneops/controller/tree/17.04.19-RC1)
- [daq tag 17.04.19-RC1](https://github.com/oneops/daq/tree/17.04.19-RC1)
- [opamp tag 17.04.19-RC1](https://github.com/oneops/opamp/tree/17.04.19-RC1)
- [search tag 17.04.19-RC1](https://github.com/oneops/search/tree/17.04.19-RC1)
- [sensor tag 17.04.19-RC1](https://github.com/oneops/sensor/tree/17.04.19-RC1)
- [inductor tag 17.04.19-RC1](https://github.com/oneops/inductor/tree/17.04.19-RC1)
- [cms-admin tag 17.04.19-RC1](https://github.com/oneops/cms-admin/tree/17.04.19-RC1)
- [transmitter tag 17.04.19-RC1](https://github.com/oneops/transmitter/tree/17.04.19-RC1)
- [transistor tag 17.04.19-RC1](https://github.com/oneops/transistor/tree/17.04.19-RC1)
- [oneops-admin tag 17.04.19-RC1](https://github.com/oneops/oneops-admin/tree/17.04.19-RC1)
- [circuit-oneops version 1-5.0.636](https://github.com/oneops/circuit-oneops-1/releases/tag/circuit-oneops-1-5.0.636)

# Source Release Tags 17.04.21

- [oneops-admin tag 17.04.21-RC2](https://github.com/oneops/oneops-admin/tree/17.04.21-RC2)
- [db-schema tag 17.04.21-RC2](https://github.com/oneops/db-schema/tree/17.04.21-RC2)
- [cmsdal tag 17.04.21-RC2](https://github.com/oneops/cmsdal/tree/17.04.21-RC2)
- [display tag 17.04.21-RC2](https://github.com/oneops/display/tree/17.04.21-RC2)
- [oo-commons tag 17.04.21-RC2](https://github.com/oneops/oo-commons/tree/17.04.21-RC2)
- [adapter tag 17.04.21-RC2](https://github.com/oneops/adapter/tree/17.04.21-RC2)
- [amp-plugin tag 17.04.21-RC2](https://github.com/oneops/amq-plugin/tree/17.04.21-RC2)
- [antenna tag 17.04.21-RC2](https://github.com/oneops/antenna/tree/17.04.21-RC2)
- [controller tag 17.04.21-RC2](https://github.com/oneops/controller/tree/17.04.21-RC2)
- [daq tag 17.04.21-RC2](https://github.com/oneops/daq/tree/17.04.21-RC2)
- [opamp tag 17.04.21-RC2](https://github.com/oneops/opamp/tree/17.04.21-RC2)
- [search tag 17.04.21-RC2](https://github.com/oneops/search/tree/17.04.21-RC2)
- [sensor tag 17.04.21-RC2](https://github.com/oneops/sensor/tree/17.04.21-RC2)
- [inductor tag 17.04.21-RC2](https://github.com/oneops/inductor/tree/17.04.21-RC2)
- [cms-admin tag 17.04.21-RC2](https://github.com/oneops/cms-admin/tree/17.04.21-RC2)
- [transmitter tag 17.04.21-RC2](https://github.com/oneops/transmitter/tree/17.04.21-RC2)
- [transistor tag 17.04.21-RC2](https://github.com/oneops/transistor/tree/17.04.21-RC2)
- [oneops-admin tag 17.04.21-RC2](https://github.com/oneops/oneops-admin/tree/17.04.21-RC2)
- [circuit-oneops version 1-5.0.645](https://github.com/oneops/circuit-oneops-1/releases/tag/circuit-oneops-1-5.0.645)

# Source Release Tags 17.04.26

- [oneops-admin tag 17.04.26-RC2](https://github.com/oneops/oneops-admin/tree/17.04.26-RC2)
- [db-schema tag 17.04.26-RC2](https://github.com/oneops/db-schema/tree/17.04.26-RC2)
- [cmsdal tag 17.04.26-RC2](https://github.com/oneops/cmsdal/tree/17.04.26-RC2)
- [display tag 17.04.26-RC2](https://github.com/oneops/display/tree/17.04.26-RC2)
- [oo-commons tag 17.04.26-RC2](https://github.com/oneops/oo-commons/tree/17.04.26-RC2)
- [adapter tag 17.04.26-RC2](https://github.com/oneops/adapter/tree/17.04.26-RC2)
- [amp-plugin tag 17.04.26-RC2](https://github.com/oneops/amq-plugin/tree/17.04.26-RC2)
- [antenna tag 17.04.26-RC2](https://github.com/oneops/antenna/tree/17.04.26-RC2)
- [controller tag 17.04.26-RC2](https://github.com/oneops/controller/tree/17.04.26-RC2)
- [daq tag 17.04.26-RC2](https://github.com/oneops/daq/tree/17.04.26-RC2)
- [opamp tag 17.04.26-RC2](https://github.com/oneops/opamp/tree/17.04.26-RC2)
- [search tag 17.04.26-RC2](https://github.com/oneops/search/tree/17.04.26-RC2)
- [sensor tag 17.04.26-RC2](https://github.com/oneops/sensor/tree/17.04.26-RC2)
- [inductor tag 17.04.26-RC2](https://github.com/oneops/inductor/tree/17.04.26-RC2)
- [cms-admin tag 17.04.26-RC2](https://github.com/oneops/cms-admin/tree/17.04.26-RC2)
- [transmitter tag 17.04.26-RC2](https://github.com/oneops/transmitter/tree/17.04.26-RC2)
- [transistor tag 17.04.26-RC2](https://github.com/oneops/transistor/tree/17.04.26-RC2)
- [oneops-admin tag 17.04.26-RC2](https://github.com/oneops/oneops-admin/tree/17.04.26-RC2)
- [circuit-oneops version 1-5.0.652](https://github.com/oneops/circuit-oneops-1/releases/tag/circuit-oneops-1-5.0.652)

Enjoy,

_OneOps Team_
