---
layout: dev-doc
title: How to deprecate a pack
id: deprecate-a-pack
---

There are 2 flags available in pack which allows smooth sunset of specific pack version
~~~ruby
ignore true|false
enabled true|false
~~~

# ignore

The flag is used to before loading the pack. If ignore is set to **true**, the pack will not be re-loaded (updated) in OneOps but it will not remove the current one (already loaded) so it will stay there dormant

# enabled

This flag defines the visibility of pack during create platform. If enabled is set to **false**, the pack will not be visible to user for creating new platforms
