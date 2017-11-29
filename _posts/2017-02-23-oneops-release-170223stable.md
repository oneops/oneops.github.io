---
layout: wmt/post
title:  Glorious Charts - OneOps Release 17.02.23-STABLE
published: true
authors: [klohia, mmoser,]
---

<img src="/assets/img/ui/monitors-chart.png" width="300" align="right"/>

Nothing beats charts full of [monitoring data](/user/operation/monitors.html), when it comes to investigating problems
with your application running in operation. And with this release we are bringing you a few key improvements to an
already amazing monitoring system.  You got to check it out and to make that easy we even have a demo video for you.

<!--more-->

Of course, this release includes a bunch of other improvements and bug fixes, but first .. have a look at this:

<div class="video">
<iframe width="640" height="360" src="https://www.youtube.com/embed/mFeohNtc5Es" frameborder="0" allowfullscreen></iframe>
</div>

<br/><br/>

And before you read ahead - a special shout out goes to [Lev](https://github.com/lkhusid) for his great work on the
charts and the CLI!

## New Features

* Many improvements to the charting system and user interface for monitoring, specifically around zoom features,
pop-out, navigation and others.

## Bug Fixes and Improvements

* Better visibility for [favorites](/user/general/favorites.html) icon beside entities name
* Improved ability to apply security compliance to computes
* Fixed regression on release restore features
* New flag for packs to manage behavior of `Proceed_on_failure` for delete work orders
* OneOps [CLI](https://github.com/oneops/cli) release 0.4.1 improvements:
  * Scaling action for transition/component
  * Explicit enable/disable platform action.
  * Concise way of specifying command in go yaml configuration
  * Env release commit/discard are moved to environment command
  * Sync mode for environment release commit
  * Design yaml load support for `go`
  * `go` help and yaml example
  * Optional attribute locking  for `go` command flow.

## Source Release Tags

- [oneops-admin tag 17.02.23-STABLE](https://github.com/oneops/oneops-admin/tree/17.02.23-STABLE)
- [db-schema tag 17.02.23-STABLE](https://github.com/oneops/db-schema/tree/17.02.23-STABLE)
- [cmsdal tag 17.02.23-STABLE](https://github.com/oneops/cmsdal/tree/17.02.23-STABLE)
- [display tag 17.02.23-STABLE](https://github.com/oneops/display/tree/17.02.23-STABLE)
- [oo-commons tag 17.02.23-STABLE](https://github.com/oneops/oo-commons/tree/17.02.23-STABLE)
- [adapter tag 17.02.23-STABLE](https://github.com/oneops/adapter/tree/17.02.23-STABLE)
- [amp-plugin tag 17.02.23-STABLE](https://github.com/oneops/amq-plugin/tree/17.02.23-STABLE)
- [antenna tag 17.02.23-STABLE](https://github.com/oneops/antenna/tree/17.02.23-STABLE)
- [controller tag 17.02.23-STABLE](https://github.com/oneops/controller/tree/17.02.23-STABLE)
- [daq tag 17.02.23-STABLE](https://github.com/oneops/daq/tree/17.02.23-STABLE)
- [opamp tag 17.02.23-STABLE](https://github.com/oneops/opamp/tree/17.02.23-STABLE)
- [search tag 17.02.23-STABLE](https://github.com/oneops/search/tree/17.02.23-STABLE)
- [sensor tag 17.02.23-STABLE](https://github.com/oneops/sensor/tree/17.02.23-STABLE)
- [inductor tag 17.02.23-STABLE](https://github.com/oneops/inductor/tree/17.02.23-STABLE)
- [cms-admin tag 17.02.23-STABLE](https://github.com/oneops/cms-admin/tree/17.02.23-STABLE)
- [transmitter tag 17.02.23-STABLE](https://github.com/oneops/transmitter/tree/17.02.23-STABLE)
- [transistor tag 17.02.23-STABLE](https://github.com/oneops/transistor/tree/17.02.23-STABLE)
- [oneops-admin tag 17.02.23-STABLE](https://github.com/oneops/oneops-admin/tree/17.02.23-STABLE)
- [circuit-oneops version 1-5.0.569](https://github.com/oneops/circuit-oneops-1/releases/tag/circuit-oneops-1-5.0.569)

Enjoy,

_OneOps Team_
