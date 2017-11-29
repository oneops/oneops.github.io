---
layout: wmt/docs
side-navigation: user-navigation.html
title: Operation
---

# Operation

Operations is where you <a href="/user/operation/monitors.html">monitor</a> and
control your environments. On the summary tab, you can drill down by using the right navigation bar.

From the top level, with the graph tab, you can visualize the entire health of an environment. On the graph, you can
drill down to a component instance. Each component instance has configuration, monitors, logs, and actions.

Documentation about the __Operation__ phase in OneOps includes:

<ul>
{% for p in site.pages %}
{% if p.url contains page.url and p.url != page.url %}
  <li><a href="{{ p.url }}">{{ p.title }}</a></li>
{% endif %}
{% endfor %}
</ul>

![Ops graph](/assets/docs/local/images/ops-graph.png)
