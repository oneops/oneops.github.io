---
layout: dev-doc
title: Developer - General Aspects
---

Before you go about developing on OneOps itself - [Core Development](../core-development/index.html), on configuration 
for OneOps - [Content Development](../content-development/index.html), or integrating OneOps with other tools via APIs
- [Integration Development](../integration-development/index.html), you want to learn more about general aspects of
OneOps-related development. 

Here are a bunch of resources to do just that:

<ul>
{% for p in site.pages %}
{% if p.url contains page.url and p.url != page.url %}
  <li><a href="{{ p.url }}">{{ p.title }}</a></li>
{% endif %}
{% endfor %}
</ul>