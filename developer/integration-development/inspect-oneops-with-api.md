---
layout: dev-doc
title: Inspecting OneOps with the OneOps API
---

The typical way of running OneOps is by having it [managed by OneOps itself](/admin/operate/oneops-manages-oneops.html).
The following example assumes that it is running in the organization `oneops` and the open source circuit of packs
[circuit-oneops-1](https://github.com/oneops/circuit-oneops-1/).

## Listing Packs

The user interface URL for showing the packs is `https://server/oneops/catalog#packs`. The equivalent JSON data is
available at `https://server/oneops/catalog/packs.json`:

```
{
  packs: {
    oneops: {
      docker: [
        "1"
      ],
      cassandra: [
        "1"
      ]
    }
  }
}
```

## Inspecting a Pack

As a next steps we investigate the `cassandra` pack in the user interface at
`https://server/oneops/catalog/packs/oneops/cassandra/1/platforms/cassandra`.

The components in the pack are available as JSON data at
`https://server/oneops/catalog/packs/oneops/cassandra/1/platforms/cassandra/components.json`. The information in the
response includes required as well as optional components in the pack:

```
[
  {
    rfcId: 0,
    releaseId: 0,
    ciId: 1592134537,
    nsPath: "/public/oneops/packs/cassandra/1",
    ciClassName: "mgmt.catalog.oneops.1.Storage",
    impl: null,
    ciName: "storage",
    ciGoid: "1592134537-31977-159212537",
    ciState: "default",
    rfcAction: null,
    releaseType: null,
    createdBy: null,
    updatedBy: null,
    rfcCreatedBy: null,
    rfcUpdatedBy: null,
    execOrder: 0,
    lastAppliedRfcId: 0,
    comments: "root:/usr/local/rvm/gems/ruby-1.9.3-p547/bin/knife",
    isActiveInRelease: false,
    rfcCreated: null,
    rfcUpdated: null,
    created: 1473894033684,
    updated: 1473894033684,
    ciAttributes: {
    volume_type: "GENERAL",
    size: "20G",
    slice_count: "1"
  },
  ciBaseAttributes: { },
  ciAttrProps: {
    owner: { }
  }
},
```

The map in `ciAttributes` contains the actual attributes of the component, based on its meta data definition and pack
overrides. You can get more information about a specific component by accessing the JSON formatted component data using
the component name. E.g. for the `volume` component use
`https://server/oneops/catalog/packs/oneops/cassandra/1/platforms/cassandra/components/volume.json`. The returned data includes
defined relationships for the component and other metadata such as `ciAttributes`, `requires`, `dependents` and `dependsOn`.

This data includes constraints such as only allowing one component per platform (`1..1`) and the requirement for another
component like a `compute`:

```
requires": {
  relationAttributes": {
    "constraint": "1..1",
   "services": "compute",
 }
}
```

## Class Metadata

The API includes a method to access the metadata for a given class with the help of its name - the `ciClassName` often
returned as part of other API calls for entities. The `metadata` API endpoints supports the `class_name` argument for a
request to a URL such as `https://server/metadata?class_name=catalog.oneops.1.Volume`. The metadata API returns all known data
about the specific class such as its default values, relations and other attributes:

```
{
  classId: 32172,
  className: "catalog.oneops.1.Volume",
  shortClassName: "Volume",
  superClassId: 32155,
  superClassName: "base.oneops.1.Volume",
  accessLevel: "global",
  impl: "oo::chef-11.18.12",
  isNamespace: false,
  flags: null,
  useClassNameNS: false,
  description: "Volume",
  extFormat: null,
  created: 1452727128309,
  mdAttributes: [ ... ],
  fromRelations: [ ... ],
  toRelations: [ ... ],
  actions: []
}
```
