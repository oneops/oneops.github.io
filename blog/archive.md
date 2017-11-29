---
layout: wmt/default
title: OneOps Team Blog Archive

---

<h1 class="yellow">{{ page.title }}</h1>

<p>The complete list of posts from the <em>OneOps team</em>:</p>

{% for post in site.posts %}
{% assign currentdate = post.date | date: "%Y" %}
{% if currentdate != date %}
<h1 id="y{{currentdate}}">{{ currentdate }}</h1>
{% assign date = currentdate %} 
{% endif %}

<p>
{{ post.date | date: "%-d %B %Y" }}:
<a href="{{ post.url }}">{{ post.title}}</a> by 
{% for author in post.authors %}{% assign current = site.authors[author] %}<a href="{{ current.web }}">{{ current.name }}</a>
{% unless forloop.last %},{% endunless%}
{% endfor %}
</p>

{% endfor %}
