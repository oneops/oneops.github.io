---
layout: admin-doc
title: Administrator - General Aspects
---

general stuff about administrator stuff and add links to general stuff (beyond what we got index)

<ul>
{% for p in site.pages %}
{% if p.url contains page.url and p.url != page.url %}
  <li><a href="{{ p.url }}">{{ p.title }}</a></li>
{% endif %}
{% endfor %}
</ul>

