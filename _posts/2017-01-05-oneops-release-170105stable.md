---
layout: post
title:  It's a Big One - OneOps Release 17.01.05-STABLE
published: true 
authors: [klohia, ksaroya, mmoser]
---

We are kicking off the year 2017 with a release that brings a host of new features and bug fixes after slowing down a bit in [Q4 2016](/general/blog/2016-12-28-oneops-releases-2016-q4.html). And there are
some significant ones like PoC-type support for the [Google Cloud Platform](https://cloud.google.com/), various
improvements for Windows computes and a number of UI enhancements.

And we are not slowing down either. The next release is already in the pipeline with numerous merges pending. But
let's not get ahead of ourselves. Check out what is in the new  `17.01.05-STABLE` release first.

<!--more-->


# New Features

- Auto-pause feature for deployment before deployment steps
- New _Timeline_ tab in the _Design_ section showing releases
- New _Timeline_ tab in the environment transition section showing releases
- Beta release of support of Windows images via openstack cloud
- Ability to execute attachments around actions e.g. execute attachment after restart
- Phase 1 for version controlled configuration with backend APIs
- Option to suppress load alerts during compute replacement
- Ability to create separate alerts for different socket states
- Bulk pull of a design to multiple environments
- Log4j property configuration support for Tomcat
- Proof of concept for support for Google Cloud Platform usage as cloud provider
- API for cloud offerings

# Bug Fixes and Improvements

Numerous bug fixes made it into this release. Here is a list of the more significant ones: 

- Fixed nginx status action and website repair
- Correction on state counter values in notification
- Allow chaining of global variables and correct interpolation
- Updated look and feel for action buttons
- Enable access to local platform variables in action recipes
- Redis pack deployment and compute replacement fixes

# Source Release Tags


- [oneops-admin tag 17.01.05-STABLE](https://github.com/oneops/oneops-admin/tree/17.01.05-STABLE)
- [db-schema tag 17.01.05-STABLE](https://github.com/oneops/db-schema/tree/17.01.05-STABLE)
- [cmsdal tag 17.01.05-STABLE](https://github.com/oneops/cmsdal/tree/17.01.05-STABLE)
- [display tag 17.01.05-STABLE](https://github.com/oneops/display/tree/17.01.05-STABLE)
- [oo-commons tag 17.01.05-STABLE](https://github.com/oneops/oo-commons/tree/17.01.05-STABLE)
- [adapter tag 17.01.05-STABLE](https://github.com/oneops/adapter/tree/17.01.05-STABLE)
- [amp-plugin tag 17.01.05-STABLE](https://github.com/oneops/amq-plugin/tree/17.01.05-STABLE)
- [antenna tag 17.01.05-STABLE](https://github.com/oneops/antenna/tree/17.01.05-STABLE)
- [controller tag 17.01.05-STABLE](https://github.com/oneops/controller/tree/17.01.05-STABLE)
- [daq tag 17.01.05-STABLE](https://github.com/oneops/daq/tree/17.01.05-STABLE)
- [opamp tag 17.01.05-STABLE](https://github.com/oneops/opamp/tree/17.01.05-STABLE)
- [search tag 17.01.05-STABLE](https://github.com/oneops/search/tree/17.01.05-STABLE)
- [sensor tag 17.01.05-STABLE](https://github.com/oneops/sensor/tree/17.01.05-STABLE)
- [inductor tag 17.01.05-STABLE](https://github.com/oneops/inductor/tree/17.01.05-STABLE)
- [cms-admin tag 17.01.05-STABLE](https://github.com/oneops/cms-admin/tree/17.01.05-STABLE)
- [transmitter tag 17.01.05-STABLE](https://github.com/oneops/transmitter/tree/17.01.05-STABLE)
- [transistor tag 17.01.05-STABLE](https://github.com/oneops/transistor/tree/17.01.05-STABLE)
- [oneops-admin tag 17.01.05-STABLE](https://github.com/oneops/oneops-admin/tree/17.01.05-STABLE)
- [circuit-oneops version 1-5.0.507](https://github.com/oneops/circuit-oneops-1/tree/circuit-oneops-1-5.0.507)

Enjoy,

_OneOps Team_
