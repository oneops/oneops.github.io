---
layout: wmt/docs
side-navigation: user-navigation.html
title: Transition
searchindex: false
---

# Transition

Documentation about the __Transition__ phase in OneOps includes:

<ul>
{% for p in site.pages %}
{% if p.url contains page.url and p.url != page.url %}
  <li><a href="{{ p.url }}">{{ p.title }}</a></li>
{% endif %}
{% endfor %}
</ul>
