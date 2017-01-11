---
layout: dev-doc
title: Core Development
---

__Core development__ is all about development on any component of the __OneOps application__ stack itself.
All source code for the various components is [available on GitHub]({{ site.github_url }}).

Resources available for core development:

<ul>
{% for p in site.pages %}
{% if p.url contains page.url and p.url != page.url %}
  <li><a href="{{ p.url }}">{{ p.title }}</a></li>
{% endif %}
{% endfor %}
</ul>
