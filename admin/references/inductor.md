---
layout: admin-doc
title: Inductor
---

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


# Inductor Directory Structure

The directory structure after you have created inductor successfully will look like this,

```
cd /opt/oneops/inductor
├── circuit-oneops-1 -> /home/oneops/build/circuit-oneops-1 from (https://github.com/oneops/circuit-oneops-1)
├── clouds-available # All inductor which are created will go in this
│   └── public.oneops.clouds.aws
├── clouds-enabled
│   └── public.oneops.clouds.aws -> ../clouds-available/public.oneops.clouds.aws
├── Gemfile
├── Gemfile.lock
├── init.d
│   └── inductor
├── lib
│   └── client.ts
├── log
└── shared ## Refer (https://github.com/oneops/oneops-admin/tree/master/lib/shared)
    ├── cookbooks
    ├── exec-gems.yaml
    ├── exec-order.rb
    └── hiera.yaml
```


