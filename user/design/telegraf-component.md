---
layout: wmt/docs
side-navigation: user-navigation.html
title: Telegraf Component
---

# Telegraf Component

The _telegraf_ [component](./components.html) is available for all
platforms. Telegraf is an agent for collecting, processing, aggregating, and
writing metrics. It is available as a standalone binary and is written in Go.

Design goals are to have a minimal memory footprint with a plugin system so that
developers in the community can easily add support for collecting metrics .

Telegraf can be used to capture many different types of OS metrics such as
OS/system metrics (e.g. CPU, network, disk, process, file descriptor, and
memory).

Telegraf is plugin-driven and has the concept of 4 distinct plugins:

- _Input Plugins_ collect metrics from the system, services, or 3rd party APIs.
- _Processor Plugins_ transform, decorate, and/or filter metrics.
- _Aggregator Plugins_ create aggregate metrics and calculate values such as
  mean, min, max, quantiles and others.
- _Output Plugins_ write metrics to various destinations.


