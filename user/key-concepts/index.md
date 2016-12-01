---
layout: user-doc
title: Key Concepts
id: "key-concepts"
---

The OneOps process uses the following phases:


* **[Design][]**: Where an application’s architecture is described
* **[Transition][]**: Where an application design is realized in an environment
* **[Operations]**: Where instances are managed and monitored

# Lifecycles

The following diagram describes how Platforms, Components, and Instances relate to each other in the different lifecycle phases: Design, Transition, and Operations.

![OneOps DTO](/assets/docs/local/images/oneops-dto.png)

# Design in OneOps

Design is an area within an [assembly][] where the application architecture is described. The application comprises  of [platforms][] containing optional or required [components][].

* Applications can be:
  * Designed from scratch by adding [platforms][]
  * Bootstrapped from predefined Application templates called [catalogs][]

* Multiple environments of application can share common design configuration (eg OS version would be common in dev, qa, prod environments).
* Configuration changes are buffered in a **Release** and are not applied until the release is committed, making them trackable and audit able. (Releases apply to transition too)


<video width="720" height="480" preload="metadata" controls="">
    <source src="http://videos.grovo.com/0515_walmart-oneops-design-overview_4668.webm?vpv=1" type="video/webm">
    Your browser does not implement HTML5 video.
</video>

**See also**

 * **[Add a platform][]**
  * **[Add a component][]**
  * **[Platform Dependency][]**
 * **[Packs/Circuits][]**

# Transition in OneOps

Transition is an area within an Assembly where the application Design is realized in an [Environment][]. You can have multiple Environments derived from a single Design.

<video width="720" height="480" preload="metadata" controls="">
    <source src="http://videos.grovo.com/0515_walmart-oneops-transition-overview_4668.webm?vpv=1" type="video/webm">
    Your browser does not implement HTML5 video.
</video>


## Environment

An environment is a realization of the application Design after its operational requirements(eg single for dev /redundant for qa and prod) are applied. It is an abstract layer of configuration, no real instances exist until an Environment is deployed.


![Scaling Configuration](/assets/docs/local/images/key-concepts-environments.png)

**See also**

* [Environment Profiles][]
* [Availability Modes][]
* [Detailed Transition][]
* [Detailed Environment][]
* [Monitoring][]

# Operations in OneOps
Operations is an area within an Assembly where instances are managed and monitored. Each Environment is represented in Operations.

<video width="720" height="480" preload="metadata" controls="">
    <source src="http://videos.grovo.com/0515_walmart-oneops-operations-overview_4668.webm?vpv=1" type="video/webm">
    Your browser does not implement HTML5 video.
</video>


## Clouds

Clouds in OneOps is logical collection of supply side services which satisfy business
requirements of Organization. Some examples of cloud services

* Compute service (supplied by private openstack , Azure, AWS, Rackspace)
* Storage
* Load Balancing
* DNS



## Assembly

An Assembly is an independent workspace where Applications are managed. One Organization can have multiple Assemblies. Each Assembly has corresponding subspaces for Design, Transition and Operations.

<video width="720" height="480" preload="metadata" controls="">
    <source src="http://videos.grovo.com/0515_walmart-oneops-assembly-overview_4668.webm?vpv=1" type="video/webm">
    Your browser does not implement HTML5 video.
</video>

## Platforms, Platform Links and Components

# Platform
A Platform is a building block of an application. Each Platform type is backed by metadata which defines its required and optional Component sets, along with its operational behavior.

## Platform Links
Within an Assembly, the end user can set *links to* dependencies between Platforms. These dependencies are used to generate a proper deployment sequence for the Platforms. For example, when you link a web Platform to a database Platform, the database deploys first. Then, when the web Platform comes up, the database Platform is ready.

![Platform Links](/assets/docs/local/images/platform-link.png)

## Component
Each Platform is comprised of Components which are the lowest-level building blocks in the OneOps system. Some Component examples are compute, storage, Cassandra, PHP, and available components.

When you add a Platform to your application design, a set of **required Components** with default attribute values are automatically created within the Platform. You can modify the attribute values for required Components and you can add optional Components.
A Component has model and control logic to manage its lifecycle, such as add, update, repair, and more.

## Component Dependency
There are Dependencies between Components within a platform. These Dependencies are used to generate a proper sequence of deployment steps. The end user can add lateral Dependencies between neighboring optional Components. For example: If you have a Build that depends on another Build, you can set a Component Dependency between them.

## Catalog

You can bootstrap your design using pre-loaded application templates called Catalogs. OneOps provides Catalogs for common commercial and open-source applications. There are different categories of Catalogs, such as content management (e.g. WordPress).You can also create custom Designs and save them in a private Catalog. This enables you to share Designs, which helps to drive architectural consistency within your organization.

## Organization

The OneOps Software as a Service (SaaS) solution is a multi-tenant application. An Organization is an isolated entity within which all related Operations are performed.

## Environment Profiles

Environment profiles are templates that are used to derive concrete environments based on pre-defined templates. Environment profiles are abstract environment definitions that allow environments to be categorized or classified by associating a given environment with an underlying environment profile. Typical examples of profiles include prod, QA, etc.

![Scaling Configuration](/assets/docs/local/images/environment-profiles-templates.png)



[Account]:/user/howto/set-up-your-user-account.html
[Add a component]:/user/howto/add-specific-component-to-a-design.html
[Add a Platform]:/user/howto/add-a-platform-to-a-design.html
[Assembly]:../key-concepts/#assembly
[attachments]:/user/references/#attachments
[auto-scale]:/user/references/#auto-scale
[Availability Modes]:/user/references/#availability-modes
[catalogs]:/user/howto/catalogs.html
[clouds]:/user/references/#cloud-providers
[commit design]:/user/howto/add-a-platform-to-a-design.html
[Components]:../key-concepts/#component
[create assembly]:/user/howto/create-assemblies-to-design-applications.html
[create design]:/user/howto/add-new-cloud.html
[create environment]:/user/howto/create-an-environment.html
[create platform]:/user/howto/add-a-platform-to-a-design.html
[deploy to cloud]:/user/howto/deploy-to-cloud.html
[Design]:../key-concepts/#design-in-oneops
[Detailed Environment]:/user/references/#environment
[Detailed Transition]:/user/references/#transition
[Environment Profiles]:/user/references/#environment-profiles
[Environment]:/user/key-concepts/#environment
[initial set up]:/admin/getting-started/
[Monitoring]:/user/references/#monitoring-reference
[Operations]:/user/key-concepts/#operations-in-oneops
[Packs/Circuits]:/user/references/#platform-packs
[Platform Dependency]:/user/references/#platform-links-reference
[platforms]:/user/key-concepts/#platform
[Transition]:/user/key-concepts/#transition-in-oneops
[User]:/developer/key-concepts/
[variables]:/user/references/#variables
[view status]:/user/howto/control-environment.html
