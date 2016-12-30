---
layout: general-doc
title: Blog

---

Whether we are planning an event, make a new release available, present at a conference or user group meeting 
or have something cool to share. This is the place to check out for the latest on OneOps. 

You might also want to check out what happens [In The Press and Elsewhere](/general/in-the-press.html).

But now, here is the latest from the OneOps team:

{% for post in site.posts %}
<div>{{ post.date | date: "%-d %B %Y" }}</div>
{{ post.excerpt }}
__[Read more ... ]({{ post.url }})__
<br><br>
{% endfor %}
