---
layout: post
title:  OneOps Releases 2016 Q2
published: true
authors: [klohia, ksaroya, mmoser]
---

Sticking to our weekly release cycle, we implemented a whole bunch of new features as well as got bugs and problems
eliminated. Among others, we added a typeahead feature for lists and other UI elements and a few other improvements on
user interface. Numerous packs also got a refresh treatment.

<!--more-->

so here are the releases of Q2


# Release 2016.06.22

- Design pull feature is completely async. On design pull failure, an error message will be displayed on environment summary page
- Ability to browse logs in full screen. On deployment log, click on lookup icon to view formatted or unformatted log in a separate browser tab 
- [OneOps Core release tag 16.06.24-RC1](https://github.com/oneops/display/releases/tag/16.06.24-RC1)

# Release 2016.06.08

- Added prompt/placeholder display in the form attribute input to help user with form input entry especially for structured attributes like hash and array.
- Added "health" tab to platform operations page. Extended instance list filtering and sorting with "namespace" and "component type". Improved generic list filtering typeahead usability.
- [OneOps Core release tag 16.06.08-RC1](https://github.com/oneops/display/releases/tag/16.06.08-RC1)

# Release 2016.06.01

- Improved parsing error reporting and handling for design load.
- Added  'Replace" and 'Undo Replace' options to the actions drop-down operations
- Added cloud marker for instance page
- [OneOps Core release tag 16.06.02-RC1](https://github.com/oneops/display/commits/16.06.02-RC1)

# Release 2016.05.25

- Enhanced RFC history view for any DJ resource. The history will show the list of historical RFCs for committed releases for a given CI and linked relations 
- [OneOps Core release tag 16.05.25-RC2](https://github.com/oneops/display/releases/tag/16.05.25-RC2)

# Release 2016.05.18

- Allow to express json attributes as true nested structures in design load/export.
- [OneOps Core release tag 16.05.18-RC1](https://github.com/oneops/display/releases/tag/16.05.18-RC1)
- [Circuit-oneops-1 release tag 1-5.0.280](https://github.com/oneops/circuit-oneops-1/releases/tag/circuit-oneops-1-5.0.280)
- [Circuit-main-1 release tag 1-2.0.441](https://gecgithub01.walmart.com/walmartlabs/circuit-main-1/releases/tag/circuit-main-1-2.0.441)
- [Circuit-main-2 release tag 1.0.77](https://gecgithub01.walmart.com/walmartlabs/circuit-main-2/releases/tag/circuit-main-2-1.0.77)
- [Walmartlabs-1 release tag 1-1.0.425](https://gecgithub01.walmart.com/walmartlabs/circuit-walmartlabs-1/releases/tag/circuit-walmartlabs-1-1.0.425)

# Release 2016.05.11

- Added support for viewing/browsing the public packs loaded in the OneOps instance 
- Additional filter for notification sink.
- [OneOps Core 16.05.12-RC4](https://github.com/oneops/display/releases/tag/16.05.12-RC4)
- [Circuit-oneops-1 5.0.273](https://github.com/oneops/circuit-oneops-1/releases/tag/circuit-oneops-1-5.0.273)
- [Circuit-main-1 2.0.428](https://gecgithub01.walmart.com/walmartlabs/circuit-main-1/releases/tag/circuit-main-1-2.0.428)
- [Circuit-main-2 1.0.76](https://gecgithub01.walmart.com/walmartlabs/circuit-main-2/releases/tag/circuit-main-2-1.0.76)
- [Walmartlabs-1 1.0.415](https://gecgithub01.walmart.com/walmartlabs/circuit-walmartlabs-1/releases/tag/circuit-walmartlabs-1-1.0.415)

# Release 2016.05.06

- OneOps variable typeahead (lookup)

Circuit Update

- Added support for logstash version 2.2.2
- added process monitoring for storm
- added netscaler gslb site support for azure sites

- [OneOps Core 16.05.04-RC1](https://github.com/oneops/display/releases/tag/16.05.04-RC1)
- [Circuit-oneops-1 5.0.257](https://github.com/oneops/circuit-oneops-1/releases/tag/circuit-oneops-1-5.0.257)
- [Circuit-main-1 2.0.422](https://gecgithub01.walmart.com/walmartlabs/circuit-main-1/releases/tag/circuit-main-1-2.0.422)
- [Circuit-main-2 1.0.76](https://gecgithub01.walmart.com/walmartlabs/circuit-main-2/releases/tag/circuit-main-2-1.0.76)
- [Walmartlabs-1 1.0.408](https://gecgithub01.walmart.com/walmartlabs/circuit-walmartlabs-1/releases/tag/circuit-walmartlabs-1-1.0.408)

# Release 2016.04.27

- Improved error message
- New Circuits available under "oneops" source
  - Flamegraph
  - Dotnetcli
  - F5 cloud service

Circuit Update

- Added wrapper support for JBoss 6.4.0
- Added  carogoavan-0.2 version support for EC Pipeline
- Enable/disable available Apache modules
- Added process to verify solrcloud is up and running
- Changing default value for phi_convict_threshold from 8 to 12 to reduce the floppiness of the node availability on ops-center.PGPDBAAS-4449
- Sensu plug in support added from Central Monitoring component for Cassandra

- [OneOps Core 16.04.27-RC1](https://github.com/oneops/display/tree/16.04.27-RC1)
- [Circuit-oneops-1 1-5.0.246](https://github.com/oneops/circuit-oneops-1/releases/tag/circuit-oneops-1-5.0.246)
- [Walmartlabs-1 1.0.399](https://gecgithub01.walmart.com/walmartlabs/circuit-walmartlabs-1/releases/tag/circuit-walmartlabs-1-1.0.399)
- [Circuit-main-1 2.0.407](https://gecgithub01.walmart.com/walmartlabs/circuit-main-1/releases/tag/circuit-main-1-2.0.407)
- [Circuit-main-2 1.0.75](https://gecgithub01.walmart.com/walmartlabs/circuit-main-2/releases/tag/circuit-main-2-1.0.75)

# Release 2016.04.20

Circuit Update

- Spark Pack version 1.6.1 added to Circuit Main 1
- Compute auto-repair to reboot couchbase server with noted conditions are met
- Centos 7.2 support added
- Added support for Apache Storm verison 1.0.0
- Graphite: check dup or under-repl metric files

# Release 2016.04.13

Circuit Update

- DSE pack- Java 8 and DSE 4.8.4 as default
- Jboss version 4.3 pack available
- Added Play pack version 2.3

# Release 2016.04.06

Circuit Update

- Added ES pack version 2.2.1
- Keystore component  added so users can add certs to node computes.
- Added ring support for Kafka-hdfs pack
- Added Apache 2.4.17 version
