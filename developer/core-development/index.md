---
layout: dev-doc
title: Core Development
---

TBD - what is core development

and what content do we have about it

<ul>
{% for p in site.pages %}
{% if p.url contains page.url and p.url != page.url %}
  <li><a href="{{ p.url }}">{{ p.title }}</a></li>
{% endif %}
{% endfor %}
</ul>
