---
layout: admin-doc
title: Administrator Overview
---

A OneOps **administrator** is responsible for **installing, updating and operating** the **OneOps** application and its
components. 

Once OneOps is running the administrator or administrateive users can configure clouds, organizations and other
components with the OneOps application. This enables the creation of assemblies that contain applications and allow
their deployment and management by other users.

All these activities and concepts and the relevant terminology are described in the [user documentation](/user/).

Resources for OneOps administrators:

<ul>
  <li><a href="/admin/index.html">Overview</a></li>
  <li><a href="/admin/general/key-concepts.html" >Key Concepts</a></li>
  <li>Install: 
    <ul>
      <li><a href="/admin/install/index.html" >Installation</a></li>
      <li><a href="/admin/install/install-with-vagrant.html" >Installing with Vagrant</a></li>
      <!-- <li><a href="/admin/install/install-with-ami.html" >Installing with -->
	  <!-- AMI</a></li> -->
    </ul>
  </li>
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
