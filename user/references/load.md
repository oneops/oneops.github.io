---
layout: user-doc
title: Load
id: "load"
---

`Load` feature can be used to bulk update an assembly design using a YAML file defining global variables, platforms, local variables, components and attachments. The file can be loaded using any of the following:

* **UI** page for design load by uploading the yaml file or posting the yaml content directly in the text area. To get to the design load page in the UI go to the assembly design and click on the `Load` button in the header.
* **CLI** command `oneops design load`. The defaults path for the Design file is `./oneops-design.yaml`. For additional information see <a href="/admin/key-concepts/index.html">CLI</a> section.
* **API** call for design load. For additional information see <a href="/developer/references/design-attachments-api.html">Design API</a> reference.


# Global Variables

Variables that can be used anywhere in the design and are referenced via `$OO_GLOBAL{...}` syntax. For additional information on global variables see <a href="/user/references/variables.html">variables</a> reference page.

```
variables:
   MYGLOBALVAR1: "foo"
   MYGLOBALVAR2: "bar"
```

# Platforms

Definition of platforms to be loaded inside the assembly design.

> Multiple design files can be loaded with separate platform definitions in each. `Load` operation performs an upsert for each platform found in the file, but does not do any platform deletions.  Deletes must be done directly via the UI/CLI/API per platform, not via load.

This section contains a list of all configuration options supported by a platform definition.

## pack

A string in the form of `<source>/<name>:<version>` declaring the pack to be used for this platform. For additional information on packs see <a href="/user/references/platform-packs.html">platform packs</a>.

```
pack: oneops/tomcat:1
```

## major_version

Major version of the platform. For new design this will usually be set to 1 and increased when a platform version upgrade is needed.

```
major_version: '1'
```

## links

Links are used to describe dependencies between platforms. For additional information on links between platforms see <a href="/user/references/platform-links.html">platform links</a>.

```
links:
   - db
   - mq
```

## platform variables

Platform variables that can be used inside the specified platform in design and are referenced via `$OO_LOCAL{...}` syntax. For additional information on platform variables see <a href="/user/references/variables.html">variables</a> reference page.

```
variables:
  MYLOCALVAR1: "foo"
  MYLOCALVAR2: "bar"
```

# Components

Definition of components inside the platform.

> Only optional components or components with custom attribute values need to be specified in this section.  All other components declared in the packs are inherited using the default pack values.

`components` is a three-level structure with the 1st key a string in the format `<resource template>/<class name>` matching the corresponding entities in the pack. The 2nd key is the unique name of the component and the 3rd key is any of the attributes supported in the metadata for that component class. See the corresponding pack and component documentation for possible values.

```
artifact/Artifact:
  artifact:
    install_dir: /app/artifact
    version: '1.0'
```

# Attachments

'attachments' can be used in the same level as the component attributes to declare component attachments.

```
attachments:
  myscript:
    path: /tmp/myscript.sh
    exec_cmd: /tmp/myscript.sh
    priority: '1'
    content: |-
      #!/bin/sh
      echo "hello"
    run_on: before-add,before-replace,before-update
```

# Example yaml file

```
variables:
  MYGLOBALVAR1: "foo"
  MYGLOBALVAR2: "bar"
platforms:
  app:
    pack: oneops/tomcat:1
    major_version: '1'
    variables:
      MYLOCALVAR1: "foo"
      MYLOCALVAR2: "bar"
    links:
       - db
       - mq
    components:
      artifact/Artifact:
        artifact:
          install_dir: /app/artifact
          version: '1.0'
      tomcat/Tomcat:
        tomcat:
          attachments:
            myscript:
              path: /tmp/myscript.sh
              exec_cmd: /tmp/myscript.sh
              priority: '1'
              content: |-
                #!/bin/sh
                echo "hello"
              run_on: before-add,before-replace,before-update
```
