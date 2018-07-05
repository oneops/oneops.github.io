---
layout: wmt/docs
side-navigation: user-navigation.html
title: Filebeat Component
---

# Filebeat Component

The _filebeat_ [component](./components.html) is available on all platforms and allows log forwarding with [Filebeat](https://www.elastic.co/products/beats/filebeat). It is a lightweight shipper for forwarding and centralizing log data. 

Installed as a component on your platform, Filebeat monitors the log files or locations 
that you specify, collects log events, and forwards them to either to Elasticsearch or Logstash for indexing.

When you start Filebeat, it starts one or more inputs that look in the locations you’ve specified for log data. For each log that Filebeat locates, Filebeat starts a harvester.Each harvester reads a single log for new content and sends the new log data to libbeat, which aggregates the events and sends the aggregated data to the output that you’ve configured for Filebeat.
