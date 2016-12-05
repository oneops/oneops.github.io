---
layout: dev-doc
title: Best Practives
id: "best-practices"
---
 
The Developer Best Practices section includes the following topics:

<ul>
{% for p in site.pages %}
{% if p.url contains page.url and p.url != page.url %}
  <li><a href="{{ p.url }}">{{ p.title }}</a></li>
{% endif %}
{% endfor %}
</ul>
