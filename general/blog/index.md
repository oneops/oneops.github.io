---
layout: general-doc
title: Blog

---

Whether we are planning an event, make a new release available, present at a conference or user group meeting 
or have something cool to share. This is the place to check out for the latest on OneOps. 

So here is the latest: 

{% for post in site.posts %}
{{ post.date | date: "%-d %B %Y" }}

# <a href="{{ post.url }}">{{ post.title }}</a>
{{ post.excerpt }}  <a href="{{ post.url }}">Read more...</a>

{% endfor %}
