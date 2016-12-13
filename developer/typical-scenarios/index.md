---
layout: dev-doc
title: Developer Typical Scenarios
id: typical-scenarios
---

The Developer Typical Scenarios section includes the following topics:

<ul>
{% for p in site.pages %}
{% if p.url contains page.url and p.url != page.url %}
  <li><a href="{{ p.url }}">{{ p.title }}</a></li>
{% endif %}
{% endfor %}
</ul>
