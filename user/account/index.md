---
layout: user-doc
title: Account
---

Administrative users of OneOps typically manage the account configuration and related aspects in OneOps such as 
security setup and cloud configuration:

<ul>
{% for p in site.pages %}
{% if p.url contains page.url and p.url != page.url %}
  <li><a href="{{ p.url }}">{{ p.title }}</a></li>
{% endif %}
{% endfor %}
</ul>