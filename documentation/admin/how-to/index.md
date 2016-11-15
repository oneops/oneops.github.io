---
layout: project
title: How To 
id: how-to
---

# Build and Install

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
