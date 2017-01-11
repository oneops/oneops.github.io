---
layout: dev-doc
title: Metadata
---

Metadata files model components and have several parts:

* `base/required` Attributes (name, desc, etc)
* `grouping` Sub-groups of attributes CMS models (For an advanced example, see the token metadata.)
* `attributes` Defaults, format: UI metadata
* `recipes` Default actions. Add, update and delete are assumed and do not need to be added. Actions can also be added using the UI as on-demand attachments.

The following is an example of a metadata file:


# 1: base/required attributes

```
name             "Apache"
description      "Installs/Configures Apache"
long_description IO.read(File.join(File.dirname(__FILE__), 'README.md'))
version          "0.1"
maintainer       "Kloopz, Inc."
maintainer_email "dev@kloopz.com"
license          "Copyright OneOps, All rights reserved."
```

# 2: grouping - sub-groups of attributes cms models

Usually dont need to change this. Its for when different types can have different attributes. See the token metadata for example.

```
grouping 'default',
  :access => "global",
  :packages => [ 'base', .. 'manifest', 'bom' ]
```

# 3: attributes

```
attribute 'install_type',
  :description => "Installation Type",
  :required => "required",
  :default => "repository",
  :format => {
    :category => '1.Source',
    :help => 'Select the type of installation - standard OS '+
             'repository package or custom build from source code',
    :order => 1,
    :form => { 'field' => 'select', 
               'options_for_select' => [['Repository package','repository'],
                                        ['Build from source','build']] }
  }
```

# 4. recipes - default actions. 

Actions can also be added via UI in design mode as on-demand Attachments. 

```
recipe "status", "Apache Status"
recipe "start", "Start Apache"
recipe "stop", "Stop Apache"
recipe "restart", "Restart Apache"
recipe "repair", "Repair Apache"
```

# See Also

* <a href="/developer/general/key-concepts.html">Key Concepts </a>
* <a href="/user/references/attachments.html">Attachments</a>

