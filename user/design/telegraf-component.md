---
layout: wmt/docs
side-navigation: user-navigation.html
title: Telegraf Component
---

# Telegraf Component

The _telegraf_ [component](./components.html) is available for all platforms. Telegraf is an agent written in Go for collecting, processing, aggregating, and writing metrics.

Design goals are to have a minimal memory footprint with a plugin system so that developers in the community can easily add support for collecting metrics .

Telegraf can be used to capture many different types of OS metrics such as OS/system metrics (e.g. CPU, network, disk, process, file descriptor, and memory).

Telegraf is plugin-driven and has the concept of 4 distinct plugins:

1, Input Plugins collect metrics from the system, services, or 3rd party APIs

2, Processor Plugins transform, decorate, and/or filter metrics

3, Aggregator Plugins create aggregate metrics (e.g. mean, min, max, quantiles, etc.)

4, Output Plugins write metrics to various destinations


