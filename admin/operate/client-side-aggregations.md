---
layout: admin-doc
title: Client-Side Aggregations
id: client-side-aggregations
---

To minimize complexity and maximize scalability metrics are aggregated and time-aligned on the source.  

It uses the nagios service_perfdata_file_processing_command on a 30sec interval (0.02s real/wall time usage).

# Details

* Monitor ci -> /etc/nagios/conf.d -> nagios interleaves and executes -> /var/log/nagios/perf.log
* Nagios service_perfdata_file_processing_command  /opt/nagios/libexec/calc_perf_buckets.rb (~200 lines)
* ...debug log snippet …

```
flush 1m-avg CpuIdle - 1433451960 - 1433452020
time:val:delta:weight 1433451992:96.39:32:0.53
time:val:delta:weight 1433452052:96.18:28:0.47
aggregate: 96.292
 …
```

* Outputs to service.perflog which logstash transports
format:

```
<epoc> <pretty time> <ci_id>:<ci_name>:<bucket-stat (1m-avg)> <perf blob (key=value space delimited)>
```
