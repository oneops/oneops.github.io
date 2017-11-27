---
layout: wmt/docs
side-navigation: dev-navigation.html
title: Developer Overview
---

# Developer Overview

A OneOps __developer__ carries out __modifications__ of existing aspects of OneOps __or adds new aspects__. Typical
developer activities are:

- __Core development__: Development on any component of the __OneOps application__ stack itself
- __Content development__: Creation and maintenance of __OneOps packs__ and __circuits__.
- __Integrations development__:  Usage of the __OneOps API__ to create integrations with other applications or workflows

At a minimum a developer needs to understand the basic concepts of [OneOps itself](/general/about.html) and
for [OneOps users](/user/). Depending on the development task, [OneOps administrator](/admin/index.html)
knowledge is potentially required as well.

Available resources for developers include:

- [All source code on GitHub]({{ site.github_url }})

<ul>
  <li><a href="/developer/">Overview</a></li>
  <li><a href="/developer/general/key-concepts.html" >Key Concepts</a></li>
  <li><a href="/developer/core-development/index.html">Core Development:</a>
    <ul>
      {% for currentpage in site.pages %}
        {% if currentpage.url contains "/developer/core-development/" and currentpage.url != "/developer/core-development/" %}
        <li><a href="{{ currentpage.url }}">{{ currentpage.title }}</a></li>
        {% endif %}
      {% endfor %}
    </ul>
  </li>
  <li>Content Development:
    <ul>
      {% for currentpage in site.pages %}
        {% if currentpage.url contains "/developer/content-development/" and currentpage.url != "/developer/content-development/" %}
        <li><a href="{{ currentpage.url }}">{{ currentpage.title }}</a></li>
        {% endif %}
      {% endfor %}
    </ul>
  </li>
  <li>Integration Development:
    <ul>
      {% for currentpage in site.pages %}
        {% if currentpage.url contains "/developer/integration-development/" and currentpage.url != "/developer/integration-development/" %}
        <li><a href="{{ currentpage.url }}">{{ currentpage.title }}</a></li>
        {% endif %}
      {% endfor %}
    </ul>
  </li>
</ul>
