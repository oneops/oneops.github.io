---
layout: dev-doc
title: Override Platform Attributes
id: override-platform-attributes
---

You can override the platform attributes like auto-replace or auto-scale at individual circuit (pack) level.

Edit your circuit and add below hash to the circuit

``` ruby
platform :attributes => {
                "replace_after_minutes" => 60,
                "replace_after_repairs" => 3
        }
```
Apart from the above attributes, you can also configure any other platform attribute to have default values.

For the full set of attributes, refer to the platform metadata.rb:

<https://github.com/oneops/oneops-admin/blob/master/lib/base/platform/metadata.rb>

OneOps's base circuit is going to have the Auto-Replace set to true and have the values like in above example by default.

Individual circuit owners need to override these values in their circuits if they want different configuration. If not overriden, the values are inherited from base circuit.
