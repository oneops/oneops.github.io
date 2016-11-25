---
layout: dev-doc
title: Pack Development
id: "pack Development"
---

# Good Defaults

* Have reasonable defaults for resources included in pack.
* For example, What would be **default** value of **compute size** for tomcat.


# Use Variables

Some of the use case for variables would be:

  1. If you use the same value in multiple places in the platform and you want them in sync
  2. Very frequently used attributes so the user doesn’t need to drill-down like version of an artifact
  3. attributes that the user ​*must*​ change, like name of the app or something like that

> The variables are de-referenced during the deployment plan generation on OneOps and  by the time the attribute is passed to the cookbook (workorder) it’s already substituted

See also:

* <a href="/user/references/variables.html">Variables</a>
 