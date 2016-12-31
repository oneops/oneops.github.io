---
layout: general-doc
title: Blog

---

# OneOps Team Blog

Whether we are planning an event, make a new release available, present at a conference or user group meeting 
or have something cool to share. This is the place to check out for the latest on OneOps. 

You might also want to check out what happens [In The Press and Elsewhere](/general/in-the-press.html).

But now, here is the latest from the OneOps team:

{% for post in site.posts %}
{{ post.date | date: "%-d %B %Y" }} -
{% for author in post.authors %}{% assign current = site.authors[author] %}<a href="{{ current.web }}">{{ current.name }}</a>
{% unless forloop.last %},{% endunless%}
{% endfor %}
<div class="blogtitle">{{ post.title}}</div>
{{ post.excerpt }}
<a href="{{ post.url }}">Read more ...</a>
<hr>
{% endfor %}
