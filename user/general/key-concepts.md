---
layout: user-doc
title: User Key Concepts
id: "key-concepts"
---

The OneOps process uses the following phases:

* **[Design](#design-in-oneops)**: Where an application’s architecture is described
* **[Transition](#transition-in-oneops)**: Where an application design is realized in an environment
* **[Operations](#operations-in-oneops)**: Where instances are managed and monitored

# OneOps Continuous Lifecycle

With OneOps, your design becomes much more than a simple template. It's a continually maintained dataset where the
notion of change is always recognized.

In fact, OneOps was created from the ground up to manage the issues that arise with continuous change. In
addition, OneOps automatically scales and repairs your application to ensure high availability and optimal
utilization of your cloud infrastructure.

<video width="720" height="480" preload="metadata" controls="" class="grovo-video">
    <source src="http://videos.grovo.com/0515_walmart-what-is-oneops_4668.webm?vpv=1" type="video/webm">
    Your browser does not implement HTML5 video.
    </video>


The following diagram describes how Platforms, Components, and Instances relate to each other in the different
lifecycle phases: Design, Transition, and Operations.

![OneOps DTO](/assets/docs/local/images/oneops-dto.png)

![OneOps Product Overview](/assets/docs/local/images/oneops-product-overview.png)

OneOps streamlines the three phases of the lifecycle – **design, transition** and **operations.**


# Design in OneOps

![Basic Introduction Continuous Lifecycle Design](/assets/docs/local/images/basic-introduction-continuous-lifecycle-design.png)

Design is an area within an [assembly](#assembly) where the application architecture is described. The application
comprises of [platforms](#platforms) containing optional or required [components](#components).

* Applications can be:
  * Designed from scratch by adding [platforms](#platforms)
  * Bootstrapped from predefined Application templates called [catalogs](#catalogs)
* Multiple environments of application can share common design configuration (eg OS version would be common in
  dev, qa, prod environments).
* Configuration changes are buffered in a **Release** and are not applied until the release is committed, making
  them trackable and audit able. (Releases apply to transition too)

Define your application workload based on your architectural and application requirements.

* Visually assemble your application
* Select from a library of platform packs
* Fine-tune components inside each platform
* Modify your design with version control

<video width="720" height="480" preload="metadata" controls="">
    <source src="http://videos.grovo.com/0515_walmart-oneops-design-overview_4668.webm?vpv=1" type="video/webm">
    Your browser does not implement HTML5 video.
</video>

**See also**

 * **[Add a platform](/developer/content-development/add-a-platform.html)**
  * **[Add a component](/developer/content-development/add-a-new-component.html)**

# Transition Phase in OneOps

![Basic Introduction Transition Lifecycle Transition](/assets/docs/local/images/basic-introduction-continuous-lifecycle-transition.png)

Transition is an area within an Assembly where the application Design is realized in an [Environment](#environment). You can
have multiple Environments derived from a single Design.

Provision environments by mapping the design output against operational requirements.

* Create and customize multiple environments
* Specify availability requirements
* Bind to your cloud provider of choice
* Deploy with effortless automation

<video width="720" height="480" preload="metadata" controls="">
    <source src="http://videos.grovo.com/0515_walmart-oneops-transition-overview_4668.webm?vpv=1" type="video/webm">
    Your browser does not implement HTML5 video.
</video>


## Environment

An environment is a realization of the application Design after its operational requirements (e.g. single for dev
/redundant for qa and prod) are applied. It is an abstract layer of configuration, no real instances exist until
an Environment is deployed.


![Scaling Configuration](/assets/docs/local/images/key-concepts-environments.png)

**See also**

* [Environment Profiles](/user/references/environment-profiles.html)
* [Availability Modes](/user/references/availability-modes.html)
* [Transition](/user/transition/transition.html)
* [Environment](/user/transition/environment.html)
* [Monitoring](/user/references/monitoring-reference.html)


# Operations Phase in OneOps


![Basic Introduction Continuous Lifecycle Operations](/assets/docs/local/images/basic-introduction-continuous-lifecycle-operations.png)

Operations is an area within an Assembly where instances are managed and monitored. Each Environment is
represented in Operations.

Monitor and control your environments to maintain the required operational levels.

* Monitor the health of your application
* View configuration, metrics and logs
* Enable auto repair, auto scale and auto replace
* Perform manual control actions

<video width="720" height="480" preload="metadata" controls="">
    <source src="http://videos.grovo.com/0515_walmart-oneops-operations-overview_4668.webm?vpv=1" type="video/webm">
    Your browser does not implement HTML5 video.
</video>

## Clouds

Clouds in OneOps is logical collection of supply side services which satisfy business requirements of
Organization. Some examples of cloud services

* Compute service (supplied by private openstack , Azure, AWS, Rackspace)
* Storage
* Load Balancing
* DNS



## Assembly

An Assembly is an independent workspace where Applications are managed. One Organization can have multiple
Assemblies. Each Assembly has corresponding subspaces for Design, Transition and Operations.

<video width="720" height="480" preload="metadata" controls="">
    <source src="http://videos.grovo.com/0515_walmart-oneops-assembly-overview_4668.webm?vpv=1" type="video/webm">
    Your browser does not implement HTML5 video.
</video>

## Platforms, Platform Links and Components

# Platform

A Platform is a building block of an application. Each Platform type is backed by metadata which defines its
required and optional Component sets, along with its operational behavior.

## Platform Links

Within an Assembly, the end user can set *links to* dependencies between Platforms. These dependencies are used to
generate a proper deployment sequence for the Platforms. For example, when you link a web Platform to a database
Platform, the database deploys first. Then, when the web Platform comes up, the database Platform is ready.

![Platform Links](/assets/docs/local/images/platform-link.png)

## Component

Each Platform is comprised of Components which are the lowest-level building blocks in the OneOps system. Some
Component examples are compute, storage, Cassandra, PHP, and available components.

When you add a Platform to your application design, a set of **required Components** with default attribute values
are automatically created within the Platform. You can modify the attribute values for required Components and you
can add optional Components.  A Component has model and control logic to manage its lifecycle, such as add,
update, repair, and more.

## Component Dependency

There are Dependencies between Components within a platform. These Dependencies are used to generate a proper
sequence of deployment steps. The end user can add lateral Dependencies between neighboring optional
Components. For example: If you have a Build that depends on another Build, you can set a Component Dependency
between them.

## Catalog

You can bootstrap your design using pre-loaded application templates called Catalogs. OneOps provides Catalogs for
common commercial and open-source applications. There are different categories of Catalogs, such as content
management (e.g. WordPress).You can also create custom Designs and save them in a private Catalog. This enables
you to share Designs, which helps to drive architectural consistency within your organization.

## Organization

The OneOps Software as a Service (SaaS) solution is a multi-tenant application. An Organization is an isolated
entity within which all related Operations are performed.

## Environment Profiles

Environment profiles are templates that are used to derive concrete environments based on pre-defined
templates. Environment profiles are abstract environment definitions that allow environments to be categorized or
classified by associating a given environment with an underlying environment profile. Typical examples of profiles
include prod, QA, etc.

![Scaling Configuration](/assets/docs/local/images/environment-profiles-templates.png)
