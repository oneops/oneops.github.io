---
layout: dev-doc
title: Packs API
id: packs-api
---

# List

Get a list of packs available for this organization.

```
GET /packs
```

## Response

```
<%= headers 200 %> <%= json(:packs) { |h| [h] } %>
```
