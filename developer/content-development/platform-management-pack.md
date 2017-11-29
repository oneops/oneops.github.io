---
layout: wmt/docs
side-navigation: dev-navigation.html
title: Platform Management Pack
---

# Platform Management Pack

A platform is added to the system by creating a Platform Management Pack (`Pack`) file and loading it into the
[CMS](/developer/content-development/cms-sync.html). A Pack is a Ruby DSL file that models a platform. It exists in the packer directory structure.

The file contains:

* Component Resources: Named resources with the type (cookbook attribute) and the
  [Component Class](/developer/general/key-concepts.html) name
* [Relationships/dependencies](/developer/general/key-concepts.html) with flexing/scaling attributes
* [Metrics/Thresholds](/developer/content-development/monitor.html) (optional)

A Pack can extend another Pack, which keeps the model clean and manageable. Packs are versioned to match a set of recipes.

For instructions on how to add a new platform, refer to [Add a Platform](/developer/content-development/add-a-platform.html).
