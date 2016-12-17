---
layout: dev-doc
title: How to Deprecate a Pack
---

There are two flags available that allow you to deprecate a specific pack version:

{% highlight ruby %}
ignore true|false
enabled true|false
{% endhighlight %}

# `ignore`

The `ignore` flag is used before loading of the pack. If it is set to `true`, the pack will not be re-loaded and
therefore updated in OneOps. However a currently loaded pack will not be removed and therefore remain dormant in
place.

# `enabled`

This flag defines the visibility of pack during the creation of a platform. If `enabled` flag is set to `false`,
the pack will not be visible to a user while creating platform.

The pack can however still be used to create platform using API even when this flag is set to `false`.

*Note: If an existing environments uses a deprecated pack, it will not be affected and continue to function.*
