---
layout: admin-doc
title: Sensors
id: sensors
---

Sensors wrap an Esper CEP engine with sharding logic to load EQL statements and consume PerfEvents that are produced by the collectors. If threshold/statements are violated, then OpsEvents are produced and opamp consumes to produce ActionOrders or WorkOrders.

The sharding logic does a mod of the manifest ID and poolsize global var to load statements from sensor_ksp on DAQ/Cassandra and consume from an opsmq `perf-in-q-<shard>`.
	
# re-shard
 
1. Change the `SENSORPOOLSIZE` global var.
2. Disable opamp (soon to be: disable sensor heartbeat monitoring).
3. Commit and deploy only the sensor.
4. While the sensor is bootstrapping (takes ~10 minutes), touch the update daq collector-artifact and daq logstash. (The env var is set in an attachment for logstash.) 
5. Commit and deploy (takes ~10 minutes).
6. Verify that the queues on opsmq are clear and that the number of unhealthy components is normal. 
7. Enable opamp / sensor heartbeat monitoring.

