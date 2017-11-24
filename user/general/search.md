---
layout: wmt/docs
side-navigation: user-navigation.html
title: Search
---

# Search

The search feature allows you to locate entities such as users, assemblies, environments, computes and many others. It
is available via the _Search_ icon in the shape of a magnifying glass in the top right corner or _Search_ item in the
left hand navigation.

The _Organization Dashboard_ and the _Enviroment_ overview page both include dedicated search tab that automatically
narrow the search results to the relevant context.

Search provides a number of input fields to control the search and is started after pressing the _Run_ button. Results
are displayed on the right and are limited to a specific organization. They can be further refined with the filter
control above the list.

![Search](/assets/img/ui/search.png)

# Search in Action

<div class="video">
<iframe width="640" height="360" src="https://www.youtube.com/embed/a_h7jFRpkw0" frameborder="0" allowfullscreen></iframe>
</div>

# Search Criteria

## Query

The _Query_ input is used to provide the search criteria. In its simplest form it is a simple string, while you can
refine the search using the
[Elasticsearch Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html)

## Filters - Namespace

Namespace allows you to define the hierarchical path that restricts the search result. By default the path is set to the
current organization with `/<organization-name>`. Further restrictions can be achieved by appending assembly and
environment names and others in the syntax
`/<organization-name>/<assembly-name>/<environment-name>/[manifest/bom]/platform-name/platform-version`. `manifest` narrows the
search to the transition phase, while `bom` sets the operations phase.

## Filters - Class

Class enables fine-grained control to search only in specific entities and attributes. Available selections can be
determined with the auto-completion feature of the input. Simply start typing and inspect the list of available choices displayed.

Examples for available entities are:

- `catalog.*`  equivalent to the design phase
- `manifest.*` equivalent to the transition phase
- `bom.*` equivalent to the  operations phase
- account
- cloud
- catalog
- service

# Quick Search

Quick Search provides pre-configured searches that kick off at the press of a button or prefill the query and filters
input fields.

## All FQDNs

This quick search allows you to find all fully qualified domain name configurations by simply pressing the _All FQDNs_
button.

## Compute Instances by IP

This search allows you to locate a specific compute instance based on the IP number:

1. Press the _Compute Instances by IP_ button.
2. Enter the IP address in the _Query_ field. You can search for a range of addresses using an asterisk e.g. `192.168.1.*`
3. Press _Run_.

# Examples

## Locate Artifacts within an Environment in an Assembly

1. Set the _Namespace_ composed like `/<organization-name>/<assembly-name>/<environment-name>` in the _Filters_ section.
2. Set the _Class_ to `catalog.Artifact` for the design phase artifacts, or `manifest.Artifact` for the transition phase
4. CLick _Run_ to obtain the search results.

## List Loadbalancer Components in Transition Phase

Set the _Class_ to `manifest.Lb` and set the _Namespace_ to your organization and press _Run_. E.g. in the `services`
organization this results in `https://<your-server>/services/organization/search.json?ns_path=/services&class_name=manifest.Lb`.

## List Loadbalancer Components in Operations Phase

Set the _Class_ to `bom.Lb` and set the _Namespace_ to your organization and press _Run_. E.g. in the `services`
organization this results in `https://<your-server>/services/organization/search.json?ns_path=/services&class_name=bom.Lb`.

## List all Full Qualified Domain Name Components in Operation

Set the _Class_ to `bom.Fqdn` and set the _Namespace_ to your organization and press _Run_. E.g. in the `services`
organization this results in  `https://<your-server>/services/organization/search.json?ns_path=/services&class_name=bom.Fqdn`.

## List all Compute Nodes in Operation

Set the _Class_ to `bom.Compute` and set the _Namespace_ to your organization and press _Run_. E.g. in the `services`
organization use `https://<your-server>/services/organization/search.json?ns_path=/services&class_name=bom.Compute`.

## List of All Environments

Set the _Class_ to `manifest.Environment` and set the _Namespace_ to your organization and press _Run_.

## Locate the Compute for a Specific IP Address

Set the _Query_ to `ciAttributes.public_ip: 127.0.0.1` using the IP number you are looking for and press _Run_.

# Advanced Search and Search API

Further documentation covering advanced search and search API usage can be
[found in the developer section](/developer/integration-development/advanced-search).
