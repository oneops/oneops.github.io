---
layout: dev-doc
title: How To Deprecate A Pack
---

There are 2 flags available in pack which allow easy sunset of specific pack version
~~~ruby
ignore true|false
enabled true|false
~~~

# ignore

The flag is used before loading of the pack. If `ignore` flag is set to `true`, the pack will not be re-loaded (updated) in OneOps but it will not remove the current one (already loaded) so it will stay there dormant.

# enabled

This flag defines the visibility of pack during the creation of a platform. If `enabled` flag is set to `false`, the pack will not be visible to user to create platform
The pack can still be used to create platform using API even when this flag is `false`

#

*Note: If there are existing environments using such sunset packs, they will continue to function.*
