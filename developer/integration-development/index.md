---
layout: dev-doc
title: Integration Development
---

TBD - what is integration evelopment

and what content do we have about it

API usage for integration with other tools or simple task automation with scripts and so on 

<ul>
{% for p in site.pages %}
{% if p.url contains page.url and p.url != page.url %}
  <li><a href="{{ p.url }}">{{ p.title }}</a></li>
{% endif %}
{% endfor %}
</ul>