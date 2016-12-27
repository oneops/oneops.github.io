---
layout: admin-doc
title: Administrator Key Concepts
id: key-concepts
---

>It's a multi-cloud application orchestrator. OneOps lets you design your application in a cloud agnostic way (by
>abstracting multiple cloud providers). It manages your application's design, deployments, operations &
>monitoring.  Check out the [list of supported cloud providers](/integrations.html#clouds).


# Architecture Overview

OneOps includes a **self service portal** for users to administer the applications, has a back end **automation
engine** to support complete application life cycle management.

![Architecture Overview](/assets/docs/local/images/architecture-overview-user.png)

OneOps has a **back end loop** to **monitor** resources and can trigger **auto-repairs**, **auto-scales** or
**notifications**

# System Architecture

The diagram below depicts a detailed system architecture .

![System Architecture](/assets/docs/local/images/architecture-diagram.png)



## Web App aka *display*

* Self service portal for managing **applications, clouds, organization,services**.
* Rest based API's to do almost anything which can be done on UI.
* Can be integrated with sign on from AD

* [source](https://github.com/oneops/display)

## CLI

Command line *ruby gem* for managing almost all aspects of OneOps.

* [source](https://github.com/oneops/cli)

## User DB

*User schema* to manage users, organization.

## Packer/Circuit

Its a ruby based gem which is responsible for loading packs.

*  [source](https://github.com/oneops/oneops-admin)

## CMS API aka adapter

Java based rest api to manage model, assemblies, environment.

*  [source](https://github.com/oneops/adapter)

## Transistor

Transistor is core web application responsible for creating design, *deployment* plan, comparing whats *deployed* to
whats **intended** conforming to pack, user changes to configuration on design or Transistor..

*  [source](https://github.com/oneops/transistor)

## DAQ

DAQ provides rest apis to get data collected via collectors. Used for graphing monitor details in UI.

*  [source](https://github.com/oneops/daq)

## Antenna

Antenna is responsible for persisiting/serving OneOps notifications into Cassandra db and distribute them to the
configured **Notification Sinks**.

*  [source](https://github.com/oneops/antenna)

## Configuration Management Database

* System of records for all assemblies,enviroments,deployments.

*  [source](https://github.com/oneops/db-schema)

## Transmitter (Publisher)

This component tracks the CMS changes and post the events on the messaging bus.

* [source](https://github.com/oneops/transmitter)

## Perfdata

We store metrics collected from back end into Cassandra

## Elastic Search

Elastic search is used to store notifications generated from OneOps and *deployment logs* are stored.

## Search

All **cms**,*controller* events and notifications are fed
into elastic search which helps in implementing

* Policy
* Cost
* Deployment/Release histories.

*  [source](https://github.com/oneops/search)

## Message Bus

OneOps uses apache active mq as messaging layer for internal  internal communication between components.

## Sensor

Sensor consumes metrics coming from collector and generate events if thresholds violations are detected and
generate Ops events.  [Esper](http://www.espertech.com/) based CEP to detect monitor thresholds violations

*  [source](https://github.com/oneops/sensor)

## Opamp

Its an OneOps **event processor** to trigger auto-healing, auto-replace,or generate notifications.

*  [source](https://github.com/oneops/opamp)

## Collector

Its a Logstash collector which **collect metrics** from managed instances in OneOps.

*  [source](https://github.com/oneops/daq)

## Controller

Its an **activiti** based workflow engine responsible for *distributing* OneOps **work orders and action orders**.

*  [source](https://github.com/oneops/controller)

# Inductor

The Inductor *consumes WorkOrders or ActionOrders* from a queue by zone, executes them and posts a *result*
message back to the *controller*.  It is written in Java and uses a <a
href="http://docs.spring.io/spring-framework/docs/3.0.5.RELEASE/api/org/springframework/jms/listener/DefaultMessageListenerContainer.html"
target="_blank">Spring Listener Container</a> and <a href="https://commons.apache.org/proper/commons-exec/"
target="_blank">Apache Commons Exec</a> for process execution.

Inductor can be installed via oneops-admin gem  .

See Also

* <a href="/admin/howto/build-install-configure-an-inductor.html">Installing Inductor</a>
* <a href="/admin/references/inductor.html">CookBook execution</a>

## Workorders

A WorkOrder is a collection of managed objects that are used to add, update or delete a component.

## ActionOrders

An ActionOrder is almost identical to a workorder, but instead of an rfcCi, it has only a CI. An ActionOrder is
dispatched by the controller to run some action such as: reboot, repair, snapshot, restore, etc.
