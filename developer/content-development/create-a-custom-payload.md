---
layout: dev-doc
title: Create a Custom Payload
---

To get configuration data from other parts of your assembly, you can add a custom payload definition to the resource in a circuit.

Prerequisite: You must understand the bom, manifest, and base models.

Let's start with an sample payload that gets all the computes in an environment for the Cassandra component.

1. Go to a bom.oneops.1.Cassandra component.
2. Go up to the manifest component (manifest.oneops.1.Cassandra).
3. Use the DependsOn relation to get to the manifest compute.
4. To get the bom instances, use the base.RealizedAs relation.   

    ~~~
    'computes' => {
      'description' => 'computes',
      'definition' => '{
        "returnObject": false,
        "returnRelation": false,
        "relationName": "base.RealizedAs",
        "direction": "to",
        "targetClassName": "manifest.oneops.1.Cassandra",
        "relations": [
          { "returnObject": false,
          "returnRelation": false,
          "relationName": "manifest.DependsOn",
          "direction": "from",
          "targetClassName": "manifest.oneops.1.Compute",
          "relations": [
            { "returnObject": true,
            "returnRelation": false,
            "relationName": "base.RealizedAs",
            "direction": "from",
            "targetClassName": "bom.oneops.1.Compute"
            }
          ]
          }
        ]
      }'  
    }  
    ~~~

5. Use the cms-admin tool which is part of the CMS to visualize / verify the relation names, directions, and class names.

>
  * You can browse cms-admin using a "/" nspath starting point:
http://localhost:8080/cms-admin/ci.do?nspath=%2F&classname=&ciname=&Search=Search
  * You can use the instance /ci id in the url of OneOps ui to go directly to the ci:
http://localhost:8080/cms-admin/ci.do?id=482717

There are many examples of payloads in the circuits.  Most likely there is an existing payload you can reuse by changing a few classes.
