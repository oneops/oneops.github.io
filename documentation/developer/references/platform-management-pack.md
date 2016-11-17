---
layout: dev-doc
title: Platform Management Pack
id: platform-management-pack
---

A platform is added to the system by creating a Platform Management Pack (`Pack`) file and loading it into the [CMS](/documentation/developer/how-to/cms-sync.html). A Pack is a Ruby DSL file that models a platform. It exists in the packer directory structure.

The file contains:

* Component Resources: Named resources with the type (cookbook attribute) and the [Component Class](/documentation/developer/key-concepts/index.html) name
* [Relationships/dependencies](/documentation/developer/key-concepts/index.html) with flexing/scaling attributes
* [Metrics/Thresholds](/documentation/developer/references/monitor.html) (optional) 

A Pack can extend another Pack, which keeps the model clean and manageable. Packs are versioned to match a set of recipes.

For instructions on how to add a new platform, refer to [Add a Platform](/documentation/developer/how-to/add-platform.html).

