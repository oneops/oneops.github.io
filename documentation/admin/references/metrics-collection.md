---
layout: admin-doc
title: Metrics Collection
id: metrics-collection
---

# Overview
OneOps uses *Logstash* and *Logstash-Forwarder* to collect
 performance metrics (like CPU, Memory, jvm metrics)

# Logstash

* Log/Event processing engine written in jruby and runs as a jvm application
* The log lines flow through 3 different stages:
  * Input
  * Filters
  * and Outputs
* There are many standard inputs, filters and output plugins available
* We have custom output plugin for calling using collector java code.
* Logstash needs a simple config file in json format specify input, filters and outputs
* Logstash  coexist on collector machine.

# Logstash-Forwarder

* It is a “go” binary which tails log files and forwards the lines to downstream Logstash servers over “lumberjack” protocol
* Main goals of this tool are:
  * Minimize resource usage where possible (CPU, memory, network).
  * Secure transmission of logs.
  * Easy to deploy with minimal moving parts.
* Runs on user VMs.
* Gets installed as part of compute cookbook

# How it all Works Together

![Logstash](/assets/docs/local/images/logstash-logstash.png)

# Setup/Installation Details

The Lumberjack protocol between the Logstash-Forwarder (Perf Agent running on each compute) and Logstash (Perf collector on server side) communicates over ssl and needs cert.
This is how it is set up on OneOps Core and Gateway assemblies:

1. You need to generate a  ssl cert for the domain name of the daq platform. You can check the fqdn component on the daq platform for the cname.
2. Add that cert in the “Perf Collector Certificate” attribute of the inductor component under inductor platform (gateway assembly).
   Inductor uses it to configure the perf-agents (logstash-forwarder) on each computes provisioned.
3. Add the same cert on the logstash-cert File component of daq platform (core assembly). There are 2 attributes :
	Content - this should have the cert.
	Destination Path - the path where the cert should be created (/opt/.certs/logstash.crt).
4. Add the ssl key for the cert on the logstash-key file component:
	Content should have the key
	Destination Path - the path where the cert key should be created. (/opt/.certs/logstash.key)
