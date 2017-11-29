---
layout: wmt/docs
side-navigation: dev-navigation.html
title: Advanced Search and Search API
---

By default, [search](/user/general/search) runs against Elasticsearch indices that are generated based on the actual
data in a content management system CMS. Advanced search can be activated by appending `?source=cms` to the URL and
access the CMS directly.

# Search Criteria

The advanced search mode adds further controls to the search criteria beyond the criteria from
[standard search](/user/general/search).

## Scope

Scope sets the phase of the OneOps lifecycle or narrows the search to a specific core entity such as `account`.
For example, to search realized instances of a compute, select `operations(bom*)`. To go to the compute configuration
that is specific to an environment, choose `transition(manifest*)`.

## Class

The class input allows you to define a specific entity class to be searched and supports auto-completion.

## Attribute

Once a class is selected, the attribute control aloows you to compose a entity-specific condition for the search with
the attribute name, value and a match with `equal`, `not equal` or `contains`.

For example, the compute class has various attributes like public_ip, public_dns, osname and many others, which can be
used to create a search condition to find a specific compute.
