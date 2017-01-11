---
layout: dev-doc
title: CMS Sync
---

To update the CMS database with new component metadata and/or platform management packs, we extended Chef's knife to load (model sync) the files in the directory to the database.

This sync is shown in the Preload Configuration section below:

![Platform create flow](/assets/docs/local/images/platform-create-flow.png)

```
# need to be in the root packer directory

# full sync components, platforms, services, etc
bundle exec rake install

# model only - components and relationships
util/reload_model
-or-
knife model sync -a
knife model sync -a -r

# components only
knife model sync -a

# relations only
knife model sync -a -r

# single pack
util/reload_pack <packname>
-or-
bundle exec knife pack upload platform/<packname> --reload

# providers only
bundle exec rake providers
```