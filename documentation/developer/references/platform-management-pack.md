---
layout: project
title: Platform Management Pack
id: platform-management-pack
---

A platform is added to the system by creating a Platform Management Pack (`Pack`) file and loading it into the <a onclick="javascript:loadContent('/documentation/developer/how-to/cms-sync.html');">CMS</a>. A Pack is a Ruby DSL file that models a platform. It exists in the packer directory structure.

The file contains:

* Component Resources: Named resources with the type (cookbook attribute) and the <a onclick="javascript:loadContent('/documentation/developer/key-concepts/index.html');">Component Class</a> name
* <a onclick="javascript:loadContent('/documentation/developer/key-concepts/index.html');">Relationships/dependencies</a> with flexing/scaling attributes
* <a onclick="javascript:loadContent('/documentation/developer/references/monitor.html');">Metrics/Thresholds</a> (optional) 

A Pack can extend another Pack, which keeps the model clean and manageable. Packs are versioned to match a set of recipes.

For instructions on how to add a new platform, refer to <a onclick="javascript:loadContent('/documentation/developer/how-to/add-a-platform.html');">Add a Platform</a>.

