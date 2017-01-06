---
layout: user-doc
title: User Overview
---

A OneOps __user__ typically interacts with __OneOps web application__ via the user interface and potentially via the API.

Activities performed depend on the security access level and are typically focussed around __application lifecycle 
management__ with OneOps including design, deployment and operation of cloud-based applications.

__Administrative users__ perform tasks in OneOps itself that __enable other users__ to manage their applications by 
configuring security, clouds and other aspects of OneOps, potentially working 
with [administrators](/admin/overview/index.html).

Available resources for developers include:

- [Key Concepts](/developer/key-concepts): Key concepts for OneOps administrators.
- [Getting Started](/developer/getting-started): Installation instructions.
- [Administrator Index](/developer/developer-index.html): Index of all relevant administrator documentation.
- [All source code on GitHub]({{ site.github_url }})

At a minimum a developer needs to understand the basic concepts of [OneOps itself](/general/about.html) and
for [OneOps users](/user/overview/). Depending on the development task, [OneOps administrator](/admin/overview)
knowledge is potentially required as well.


> If you don't have access to a OneOps installation you can get started with the installation instructions and more in 
the [administrator documentation](/admin/overview).

OneOps enables continuous lifecycle management of complex, business-critical application workloads on any
cloud-based infrastructure. You can expect:

<iframe src="https://player.vimeo.com/video/44430261" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><br/>

* Agility and speed
* Faster SDLC due to consistency between environments ,see [Design Phase](#design-phase)
* Improved end-to-end process, not just individual steps,see [lifecycle](/user/key-concepts/index.html#lifecycles)
* Operational Efficiency, see [Operations Phase](#operations-phase)
* Platform re-usability via best practices, see [Packs/Circuits](/user/references/platform-packs.html)
* Real-time resource utilization via auto-scale, see [auto-scale](/user/references/auto-scale.html)
and [Monitoring](/user/references/monitoring-reference.html)
* Application-driven access control policies, see [Teams in Organization](/user/howto/create-a-team-in-an-organization.html)
* Abstraction and dynamic modeling of the demand and supply, see [clouds](/user/references/cloud-providers.html)

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

# OneOps Lifecycle Phases

![OneOps Product Overview](/assets/docs/local/images/oneops-product-overview.png)

OneOps streamlines the three phases of the lifecycle – **design, transition** and **operations.**

## Design Phase

![Basic Introduction Continuous Lifecycle Design](/assets/docs/local/images/basic-introduction-continuous-lifecycle-design.png)

Define your application workload based on your architectural and application requirements.

* Visually assemble your application
* Select from a library of platform packs
* Fine-tune components inside each platform
* Modify your design with version control

## Transition Phase

![Basic Introduction Transition Lifecycle Transition](/assets/docs/local/images/basic-introduction-continuous-lifecycle-transition.png)

Provision environments by mapping the design output against operational requirements.

* Create and customize multiple environments
* Specify availability requirements
* Bind to your cloud provider of choice
* Deploy with effortless automation

## Operations Phase

![Basic Introduction Continuous Lifecycle Operations](/assets/docs/local/images/basic-introduction-continuous-lifecycle-operations.png)

Monitor and control your environments to maintain the required operational levels.

* Monitor the health of your application
* View configuration, metrics and logs
* Enable auto repair, auto scale and auto replace
* Perform manual control actions
