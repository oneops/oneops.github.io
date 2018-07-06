---
layout: wmt/docs
side-navigation: user-navigation.html
title: Logstash Component
---

# Logstash Component

The _logstash_ [component](./components.html) is available on all platforms. It
can be used to configure usage of
[Logstash](https://www.elastic.co/products/logstash).
Logstash is a light-weight, open-source, server-side data processing pipeline that allows the ingestion of data from a wide variety of sources, transform it on the fly, and send it to Elasticsearch to be used with Kibana as part of the ELK stack.

Logstash overview:

•Log/Event processing engine written in jruby and runs as a jvm application

•The log lines flow through 3 different stages: Input, Filters and Outputs

•There are many standard inputs, filters and output plugins available

•Logstash needs a simple config file in json format specify input, filters and outputs

•Logstash Forwarder is a “go” binary which tails log files and forwards the lines to downstream Logstash servers over “lumberjack” protocol

•Main goals of this tool are:

          - Minimize resource usage where possible (CPU, memory, network).

          - Secure transmission of logs.

          - Easy to deploy with minimal moving parts.

•Runs on user VMs

•Gets installed as part of compute cookbook
