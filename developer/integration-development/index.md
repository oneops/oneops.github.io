---
layout: dev-doc
title: Integration Development
---

__Integrations development__ is all about using the various __OneOps APIs__ to create integrations with other 
applications or workflows. These could be simple scripts to automate commonly performed actions or integration
with other applications to support your specific use cases.

- [Advanced Search](#advanced-search)
- [REST API](#rest-api)
  - [API Usage Examples](#api-usage-examples)
  - [API Reference](#api-reference)

## Advanced Search

One aspect of integration work is to find the correct resources and entities to work with. The usage of
[advanced search](./advanced-search.html) is crucial as it works directly of the raw data rather than secondary indices.

## REST API

OneOps includes a very comprehensive REST-based API. Most URLs in OneOps that result in a rendered user interface can be
modified to return JSON data for the same entity.

For example the configured clouds in your organization `example` in your OneOps instance are available as user interface
URL via `http://server/example/clouds`. On the other hand you can retrieve this list of clouds in JSON format with a 
HTTP GET call of `http://server/example/clouds.json` and it would look similar to:


```
[
  {
    ciId: 12346769,
    ciName: "admin",
    ciClassName: "account.Cloud",
    impl: "oo::chef-11.4.0",
    nsPath: "/example/_clouds",
    ciGoid: "78267-1249-6754169",
    comments: "",
    ciState: "default",
    lastAppliedRfcId: 0,
    createdBy: "admin",
    updatedBy: null,
    created: 1393611787803,
    updated: 1404278533896,
    nsId: 78467,
    ciAttributes: {
      adminstatus: "active",
      auth: "",
      description: "Admin network",
      location: "/public/example/clouds/admin"
    },
    attrProps: { }
  },
...
```

The same pattern of a JSON equivalent for a user interface URL applies to specific entities. E.g. the edit URL for a
component could be `https://server/oneops/assemblies/31561093/design/platforms/65971847/components/65971878/edit`. Appending
`.json` to the URL so it ends in `.../edit.json` displays the data in raw JSON.

### API Usage Examples

- [Inspecting OneOps with the OneOps API](inspect-oneops-with-api.html)

### API Reference

- [OneOps API Overview](./oneops-api-documentation.html)
- [Assemblies API](./assemblies-api.html)
- [CI Notifications API](./ci-notifications-format.html)
- [Cloud Offerings API](./cloud-offerings-api.html)
- [Design Attachments API](./design-attachements-api)

