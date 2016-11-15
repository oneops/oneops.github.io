---
layout: project
title: Packs API
id: packs-api
---

# List

Get a list of packs available for this organization.

~~~http
GET /packs
~~~

## Response

~~~ruby
<%= headers 200 %> <%= json(:packs) { |h| [h] } %>
~~~
