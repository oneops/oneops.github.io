---
layout: dev-doc
title: Developer - General Aspects
---

general stuff about development and add links to general stuff (beyond what we got in )

<ul>
{% for p in site.pages %}
{% if p.url contains page.url and p.url != page.url %}
  <li><a href="{{ p.url }}">{{ p.title }}</a></li>
{% endif %}
{% endfor %}
</ul>