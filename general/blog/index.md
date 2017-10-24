---
layout: wmt/default
title: OneOps Team Blog
---

<div class="row blog-page margin-bottom-30">
  <div class="col-md-2"><img src="/assets/wmt/img/icons/light/icon-blog.png" class="img-responsive"/></div>
  <div class="col-md-10">
    <!--{% include wmt/breadcrumbs.html %}-->
    <h1>{{ page.title }}</h1>

    <p>Whether we are planning an event, make a new release available, present at a conference or user group meeting or have something cool to share. The OneOps Team Blog here is the place to be for the latest news and more on OneOps.</p>
    <p>You might also be curious about what happens <a href="/general/in-the-press.html">In The Press and Elsewhere</a>.</p>
    <p>But now, here is the latest from the <em>OneOps team</em> - unless you want to see it all in the <a href="./archive.html">archive</a>:</p>
  </div>
</div>
  <hr/>
<div class="row blog-page">
  <div class="col-md-8">
    {% for post in site.posts limit: 10 %}
    <div class="blog">
      <h2><a href="{{ post.url }}">{{post.title}}</a></h2>
      <div class="blog-post-tags">
        <ul class="list-unstyled list-inline blog-info blog-tags">
          <li>
             {% for author in post.authors %}
               {% assign current = site.authors[author] %}
                  <a href="{{ current.web }}">{{ current.name }}</a>
                  {% unless forloop.last %}
                  ,
                  {% endunless%}
             {% endfor %}
          </li>
          <li><i class="icon-calendar" style="display:none;"></i> {{ post.date | date_to_string }}</li>
        </ul>
      </div>
      {{ post.excerpt }}
      <div class="blog-readmore">
        <a class="btn-u light-blue-internal-bg full-width" type="button" href="{{ post.url }}">Read More</a>
      </div>
    </div>
    <div class="clearfix"></div>    
    {% endfor %}

    <p><a href="./archive.html">Older Posts in the Archive</a></p>
  </div>
  <div class="col-md-1"></div><!-- END spacer div -->
  <div class="col-md-3">
    {% include blog-right-column.html %}
  </div>
</div>
