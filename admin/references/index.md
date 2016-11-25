---
layout: admin-doc
title: Action Order
id: actionorder
---

An ActionOrder is almost identical to a workorder, but instead of an rfcCi, it has only a ci. 

An ActionOrder is dispatched by the controller to run some action such as: reboot, repair, snapshot, restore, etc.



<h1 class="primary" id="client-side-aggregations">Client-Side Aggregations</h1>

To minimize complexity and maximize scalability metrics are aggregated and time-aligned on the source.  

It uses the nagios service_perfdata_file_processing_command on a 30sec interval (0.02s real/wall time usage).

# Details

* Monitor ci -> /etc/nagios/conf.d -> nagios interleaves and executes -> /var/log/nagios/perf.log
* Nagios service_perfdata_file_processing_command /opt/nagios/libexec/calc_perf_buckets.rb (~200 lines)
* ...debug log snippet …

~~~
flush 1m-avg CpuIdle - 1433451960 - 1433452020
time:val:delta:weight 1433451992:96.39:32:0.53
time:val:delta:weight 1433452052:96.18:28:0.47
aggregate: 96.292
 …
~~~

* Outputs to service.perflog which logstash transports
format:

~~~
<epoc> <pretty time> <ci_id>:<ci_name>:<bucket-stat (1m-avg)> <perf blob (key=value space delimited)>
~~~



<h1 class="primary" id="inductor">Inductor</h1>

The **Inductor** consumes WorkOrders (rfc / configuration change) or ActionOrders
(`start`, `stop`, etc) from a queue by zone, executes them and posts a result
message back to the **controller**.

The `account.Cloud.location` is used by the controller to publish the order into a queue.  The inductors consume,
does the work and publish the result back to the `controller.response queue`.

![Inductor controller](/assets/docs/local/images/inductor-controller.png)

Here is the logical flow from CMS:

![CMS order execution](/assets/docs/local/images/cms-order-execution.png)

# Inductor Details

The inductor is Java core with Ruby for control. The Java side is standard maven + spring,basically a Spring `DefaultMessageListenerContainer` using Apache Commons DefaultExecutor
to spawn either **local** chef-solo (for IaaS or non-managed via orders) or a **remote**
via SSH chef-solo execution.

The image below shows a logical view of the classes in `com.oneops.inductor`.

![Inductor WorkOrder Executor](/assets/docs/local/images/inductor.png)


There is a ruby gem to simplify setup and control.

# Source / Downloads

* [Repo](https://github.com/oneops/inductor)
* [Gem](https://github.com/oneops/oneops-admin)

# Control

An Inductor runs using Java jar with a several arguments. There is a gem or bash script to make easier.

Inductor gem: inductor help, start, stop, restart, status

or

Inductor control bash script located in the root dir of the repo: ./inductor start,stop,restart,status

# Logs / Inductor Log Agent and Sink

The Inductor will put logs where the conf.dir's log4j.xml specifies. The gem redirects to the relative log dir.

The inductor logs are shipped using logstash forwarder to backe end elastic search cluster.

The UI uses the daq api (Spring based) PerfController to get data.

# All Components

* See the <a href="/admin/key-concepts/#oneops-system-architecture">OneOps System Architecture Diagram</a>



<h1 class="primary" id="metric-data-source-type">Metric Data Source Type</h1>

A dstype (Data Source Type) defines how the values are aggregated. We re-wrote RRD logic for a cassandra data store.

The dstype can be COUNTER, DERIVE, or GAUGE.

COUNTER will save the rate of change of the value over a step period. This assumes that the value is always increasing (the difference between the current and the previous value is greater than 0). Traffic counters on a router are an ideal candidate for using COUNTER as DST.

DERIVE is the same as COUNTER, but it allows negative values as well. If you want to see the rate of change in free disk space on your server, then you might want to use the DERIVE data type.

GAUGE does not save the rate of change. It saves the actual value itself. There are no divisions or calculations. Memory consumption in a server is a typical example of gauge.



<h1 class="primary" id="metrics-collection">Metrics Collection</h1>

# Overview
OneOps uses *Logstash* and *Logstash-Forwarder* to collect performance metrics (like CPU, Memory, jvm metrics)

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
	


<h1 class="primary" id="oneops-admin-gem">oneops-admin gem</h1>

Oneops-admin is a Ruby thor-based command-line to manage the inductor.  Jenkins copies the JAR built from the inductor repo into the gem. The oneops-admin gem installs an inductor command which has:


~~~ bash
mschwan@L-SB81K2FFT4-M:~ >inductor
Commands:
inductor add # Add cloud to the inductor
inductor check # Inductor check
inductor check_agent # Inductor check agent
inductor create # Creates and configures a new inductor
inductor disable PATTERN # Disable inductor clouds matching the PATTERN
inductor enable PATTERN # Enable inductor clouds matching the PATTERN
inductor force_stop NAME # Inductor force stop (will kill -9)
inductor help COMMAND # Describe available commands or one specific command
inductor install_initd # Install /etc/init.d/inductor
inductor list PATTERN # List clouds in the inductor
inductor restart NAME # Inductor restart
inductor restart_agent NAME # Inductor restart
inductor restart_logstash_agent NAME # Inductor logstash agent restart
inductor start NAME # Inductor start
inductor start_agent NAME # Inductor log agent start
inductor start_logstash_agent NAME # Inductor logstash agent start
inductor status # Inductor status
inductor status_agent # Inductor log flume agent status
inductor status_logstash_agent NAME # Inductor logstash agent status
inductor stop NAME # Inductor stop (will finish processing active threads)
inductor stop_agent NAME # Inductor log agent stop
inductor stop_logstash_agent NAME # Inductor logstash agent stop
inductor tail # Inductor log tail
~~~



<h1 class="primary" id="oneops-manages-oneops">OneOps Manages OneOps</h1>

We have two separate instances of OneOps named **prod** and **admin**.
They are in **different regions**, managing each other.

We did this by creating a seed environment from our qa env.

oneops-manages-oneops

1. The seed env created our first env: admin.
2. Then we took a snapshot of the database in the seed env and shutdown the env.
3. The admin env then created a prod env and restored the snapshot from the seed.
4. When prod came up it had all the data to manage admin. This enabled prod and admin to manage each other.