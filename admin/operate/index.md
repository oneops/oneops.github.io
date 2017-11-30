---
layout: wmt/docs
title: Administrator Operation
side-navigation: admin-navigation.html
searchindex: false
---

# Administrator Operation

This documentation section about operating aspects for OneOps administrators includes:

<ul>
{% for p in site.pages %}
{% if p.url contains page.url and p.url != page.url %}
  <li><a href="{{ p.url }}">{{ p.title }}</a></li>
{% endif %}
{% endfor %}
</ul>
