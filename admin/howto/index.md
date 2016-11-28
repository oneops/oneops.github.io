---
layout: admin-doc
title: Build and Install 
id: build-install-configure-an-inductor
---

~~~ bash
#1. Build the jar file. It is in `target/inductor-VERSION.jar`.

mvn clean package


#2. Build the gem.


gem build inductor.gemspec


#It creates an `inductor-VERSION.gem` in the root directory.

#3. Install the gem from the root directory.


gem install inductor-VERSION.gem
~~~

# Configure

For a configuration guide with screenshots, see [Getting Started](../getting-started/#getting-started).

The inductor gem creates configuration files and directories when the `inductor add` command is run.

For a private zone, the authorization key is specified when you create the zone from the UI.

For a public zone, the key is specified in the packer/services/provider file.

For reference only:

A `conf.dir` argument is passed to the inductor at runtime and contains an inductor.properties.

This is generated via the inductor gem when `inductor add` is run.

The following are sample contents:

~~~bash
# usually set by inductor gem or inductor_config_gen and based on zone
amq.user =
amq.pass =
amq.in_queue = public.packer.providers.aws-ec2.ec2.us-east-1a.controller.workorders
amq.out_queue = controller.response
amq.connect_string = failover:(ssl://kloopzmq:61617?keepAlive=true)?initialReconnectDelay=1000&startupMaxReconnectAttempts=2
packer_home = /opt/gw-packer/current
retry_count = 2
ip_attribute = public_ip
scan_path = /opt/oneops/inductor/retry
scan_period = 5
data_dir = /opt/oneops/tmp
mgmt_domain = changeme.oneops.com
~~~ 



<h1 class="primary" id="load-content-model-images">Load Content</h1>

# Circuit Overview

A circuit is a chef ruby-dsl based model of some application or service.  It contains the model of what resources / components are required, optional and how they relate to each other.  Two common relations are depends_on and managed_via.  An architect would usually design a pack to capture best practices for the different availablity modes / operational modes.

An example would be a tomcat circuit.  In the circuit file it would contain a compute, java, tomcat, and artifacts and/or build components and describe the dependencies and where they run (managed_via relation).  

A prior name of a circuit was a pack.  Whenever you see the term pack in oneops, its the same thing as a circuit.


# Circuit repo

The basic circuit repo is: https://github.com/oneops/circuit-oneops-1

It contains 3 primary directories for the models:

1. /components - which can be implmented in chef cookbooks, puppet modules, and soon ansible playbooks.  Each component has a doc dir which has the image the ui will use for the component.  
2. /clouds - default / templates for clouds and cloud services.
3. /packs - the directory with all the packs/circuits


# Load content

There is a circuit command which is part of the oneops-admin gem. This circuit command is used to load content / the model.

Download and install the latest gem from the build server or build yourself from https://github.com/oneops/oneops-admin

advanced option to use object store backed images and docs, is to modify the circuit repos .chef/knife.rb with some object store config.  Example lines to add to circuit-oneops-1/.chef/knife.rb:

~~~bash
object_store_provider 'OpenStack'
object_store_user 'oneops'
object_store_pass 'redacted'
object_store_endpoint 
environment_name 'int-1503'
~~~

Then to perform the content upload, aka model sync:

~~~bash
cd /opt/oneops
circuit create
cd circuit
# this will load the base model / classes and relationships.
circuit init
cd /opt/oneops/circuit-oneops-1
# this runs knife model sync, knife pack sync and knife cloud sync
circuit install
~~~



<h1 class="primary" id="sensors">Sensors</h1>

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



<h1 class="primary" id="set-up-log-forwarding-to-es-with-logstash">Set Up Log Forwarding to ES with Logstash</h1>

The inductor logstash-forwarder agent is installed as part of the inductor setup . For more details on inductor setup refer,
[build-install-configure-an-inductor](/admin/howto/build-install-configure-inductor.html) document.
Retrieve the logstash cert from any of the ES nodes and update it at this path /logstash-forwarder/cert/logstash-forwarder.crt 


Once the cert is updated restart the inductor logstash agent via the command *inductor restart_logstash_agent cloud-name*.