---
layout: general-doc
title: Blog

---

<h1 class="yellow">OneOps Team Blog</h1>
<div>
 <div class="col-md-8">
 <p>Whether we are planning an event, make a new release available, present at a conference or user group meeting or
 have something cool to share. The OneOps Team Blog here is the place to be for the latest news and more on OneOps.</p>
 <p>You might also be curious about what happens <a href="/general/in-the-press.html">In The Press and Elsewhere</a>.</p>
 <p>But now, here is the latest from the <em>OneOps team</em> - unless you want to see it all in the 
 <a href="./archive.html">archive</a>:</p>
 </div>
 <div class="col-md-4"> <img src="/assets/img/blogging.jpg"/></div>
</div>

{% for post in site.posts limit: 15 %}
{{ post.date | date: "%-d %B %Y" }} -
{% for author in post.authors %}{% assign current = site.authors[author] %}<a href="{{ current.web }}">{{ current.name }}</a>
{% unless forloop.last %},{% endunless%}
{% endfor %}
<a href="{{ post.url }}" class="blogtitle">{{ post.title}}</a>
{{ post.excerpt }}
<a href="{{ post.url }}">Read more ...</a>
<hr>
{% endfor %}

<p><a href="./archive.html">Older Posts in the Archive</a></p>
