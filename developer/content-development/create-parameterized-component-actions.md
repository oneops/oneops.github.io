---
layout: dev-doc
title: Create Parameterized Component Actions
---

# Summary

As a cookbook or circuit developer, if you want to accept user inputs before executing any component actions and use those input values inside the action recipe, you need to specify those details in the `metadata.rb` of that cookbook as mentioned in the details below.

# Details

Let's say you need to add an action (or modify an existing action) to accept a text input called "path" and some more inputs from the user. You need to modify the metadata.rb of that cookbook and add "args" metadata to the action as shown below:

```
metadata.rb
recipe "restart", "restart application"
recipe "stop", "stop application"

recipe 'run-script',
        :description => 'Run a script',
        :args => {
  "path" => {
    "name": "path",
    "description": "Path to a file",
    "defaultValue": "",
    "required": true,
    "dataType": "string"
  }
}
```

> Right now, only string (text field) is supported on gui. Rest of the types will be supported soon and this document will be updated then

* The content of the "args" can be either Ruby hash or a plain JSON.

* After you sync this new `metadata.rb` using the knife plugin, the end user sees the GUI dialog box to enter those inputs before starting the procedure execution.

* In your recipe code, you can use the "arglist" field from the json "node" payload to use the input values.

* Example take a look at volume [component](https://github.com/oneops/circuit-oneops-1/blob/master/components/cookbooks/volume/metadata.rb) and look for `log-grep-count`
