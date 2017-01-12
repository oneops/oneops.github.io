---
layout: user-doc
title: User Overview
---

A OneOps __user__ typically desires to __manage__ applications deployed to 
[virtual environments](https://en.wikipedia.org/wiki/Virtual_environment_software), called __cloud applications__.
The user interacts with __OneOps web application__ via the user interface and potentially via the API.

Activities performed depend on the security access level and are typically focussed around __application lifecycle 
management__ with OneOps including design, deployment and operation of cloud-based applications.

__Administrative users__ perform tasks in OneOps itself that __enable other users__ to manage their applications by 
configuring security, clouds and other aspects of OneOps, potentially working 
with [administrators](/admin/index.html).

Available resources for users include:

- [Key Concepts](/user/general/key-concepts.html): Key concepts for OneOps users.
- [Getting Started](/user/general/getting-started.html): Installation instructions.

OneOps enables continuous lifecycle management of complex, business-critical application workloads on any
cloud-based infrastructure. You can expect:

* Agility and speed
* Faster SDLC due to consistency between environments ,see [Design Phase](#design-phase)
* Improved end-to-end process, not just individual steps,see [lifecycle](/user/general/key-concepts.html#lifecycles)
* Operational Efficiency, see [Operations Phase](#operations-phase)
* Platform re-usability via best practices, see [Packs/Circuits](/user/general/platform-packs.html)
* Real-time resource utilization via auto-scale, see [auto-scale](/user/operation/auto-scale.html)
and [Monitoring](/user/operation/monitoring-reference.html)
* Application-driven access control policies, see [Teams in Organization](/user/account/create-a-team-in-an-organization.html)
* Abstraction and dynamic modeling of the demand and supply, see [clouds](/user/account/cloud-providers.html)

The following video provides an introduction:

<iframe src="https://player.vimeo.com/video/44430261" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><br/>

> If you don't have access to a OneOps installation you can get started with the installation instructions and more in 
the [administrator documentation](/admin/index.html).


<ul>
  <li><a href="/user/">Overview</a></li>
  <li><a href="/user/general/key-concepts.html" >Key Concepts</a></li>
  <li><a href="/user/general/getting-started.html" >Getting Started</a></li>
  <li>Typical Scenarios: 
    <ul>
      {% for currentpage in site.pages %}
        {% if currentpage.url contains "/user/typical-scenarios/" and currentpage.url != "/user/typical-scenarios/" %}
        <li><a href="{{ currentpage.url }}">{{ currentpage.title }}</a></li>
        {% endif %}
      {% endfor %}
    </ul>
  </li>
  <li>How To:
    <ul>
      {% for currentpage in site.pages %}
        {% if currentpage.url contains "/user/howto/" and currentpage.url != "/user/howto/" %}
        <li><a href="{{ currentpage.url }}">{{ currentpage.title }}</a></li>
        {% endif %}
      {% endfor %}
    </ul>
  </li>
  <li><a href="/user/general/testing.html">Testing & Debugging</a></li>
</ul>


