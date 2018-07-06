---
layout: wmt/docs
side-navigation: user-navigation.html
title: Logstash Component
---

# Logstash Component

The _logstash_ [component](./components.html) is available on all platforms. It
can be used to configure usage of
[Logstash](https://www.elastic.co/products/logstash).  Logstash is a
light-weight, open-source, server-side data processing pipeline that allows the
ingestion of data from a wide variety of sources, transform it on the fly, and
send it to Elasticsearch to be used with Kibana as part of the ELK stack.

Logstash overview:

- The Log/event processing engine written in JRuby and runs as a Java
  application on the JVM.
- The log lines flow through 3 different stages - Input, Filters and Outputs.
- There are many standard input, filter and output plugins available.
- Logstash needs a simple configuration file in JSON format that specifies
  input, filters and outputs.
- Logstash Forwarder is binary application written in Go. It tails log files and
  forwards the lines to downstream Logstash servers using the _lumberjack_
  protocol

Main goals of Logstash Forwarder tool design are

- Minimized resource usage where possible (CPU, memory, network)
- Secure transmission of logs
- Easy deployment with minimal moving parts

The Logstash forwarded run in userspace on the VM and gets installed as part of
[compute component](./compute-component.html) installation.
