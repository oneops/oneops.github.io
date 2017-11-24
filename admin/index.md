---
layout: wmt/docs
title: Administrator Overview
side-navigation: admin-navigation.html
---

# Administrator Overview

A OneOps **administrator** is responsible for
**installing, updating and operating** the **OneOps** application and its
components.

Once OneOps is running the administrator or administrative users can configure clouds, organizations and other
components with the OneOps application. This enables the creation of assemblies that contain applications and allow
their deployment and management by other users.

All these activities and concepts and the relevant terminology are described in the [user documentation](/user/).

Resources for OneOps administrators:

<ul>
  <li><a href="./index.html">Overview</a></li>
  <li><a href="./key-concepts.html">Key Concepts</a></li>
  <li><a href="./installation.html">Installation</a></li>
  <li>Operate:
    <ul>
      {% for currentpage in site.pages %}
        {% if currentpage.url contains "/admin/operate/" and currentpage.url != "/admin/operate/" %}
        <li><a href="{{ currentpage.url }}">{{ currentpage.title }}</a></li>
        {% endif %}
      {% endfor %}
    </ul>
  </li>
</ul>
