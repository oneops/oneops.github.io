---
layout: admin-doc
title: Metric Data Source Type
id: metric-data-source-type
---

A dstype (Data Source Type) defines how the values are aggregated. We re-wrote RRD logic for a cassandra data store.

The dstype can be COUNTER, DERIVE, or GAUGE.

COUNTER will save the rate of change of the value over a step period. This assumes that the value is always increasing (the difference between the current and the previous value is greater than 0). Traffic counters on a router are an ideal candidate for using COUNTER as DST.

DERIVE is the same as COUNTER, but it allows negative values as well. If you want to see the rate of change in free disk space on your server, then you might want to use the DERIVE data type.

GAUGE does not save the rate of change. It saves the actual value itself. There are no divisions or calculations. Memory consumption in a server is a typical example of gauge.



