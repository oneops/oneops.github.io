---
layout: post
title:  OneOps Releases 2016 Q1
published: true
authors: [ooteam, klohia, mmoser]
---

Wow. What a busy quarter we had. went open source in january and did not rest

<!--more-->


# Release 2016.03.30

Circuit Updates:

- Java 8 support added for solrcloud.rb
- Cloud RDBMS pack available
- Added JBoss version 6.4.0

# Release 2016.03.24

Circuit Updates:

- Kafka 0.9.0.1 available
- Added Carbonate tool to Graphite pack
- Added kafka-hdfs pack

# Release 2016.03.16

Circuit Updates:

- Added configurable repo path for main source Apache pack. 
- Added Dependency download to user

# Release 2016.03.09

- Ability to define pack level defaults for platform attributes like auto replace or auto scale configuration. 

Circuit Updates:

- add auto-start and monitoring for memcached
- cargovan-storm updated

# Release 2016.03.02

- OS package update action is available.

GUI updates:

- Platform diagram in design phase moved to a dedicated tab
- Delete environment button now moved from Summary to Configuration page view

Circuit Updates:

- Added storm version 0.10.0
- RHEL/CentOS 6.7 is now available and Default to Cloud setting is pointed to 6.7 image

# Release 2016.02.24

Circuit Updates:

Open Source release for packs:

- Zookeeper
- Redisio
- NodeJs

# Release 2016.02.17

Circuit Updates:

- Added thrift protocol in secGroup
- Added new Redisio version 3.0.4 and 3.0.7
- Added support for Graphite 0.9.15

# Release 2016.02.10

- New Settings tab added to assembly view. Delete assembly button moved under this tab.

Circuit Updates:

- secondary_down boolean flag added to Daemon component. This ensures alerts are received if flag is turned ON and secondary cloud daemon instances are UP.
- Apache Cassandra version 2.1.12 is available
- Enabled Ganglia monitoring in lola-spark pack

# Release 2016.02.03

- [Cost Management](/user/typical-scenarios/cost-management.html)
- [Auto-Scale](user/references/auto-scale.html) event severity update
- Inactivity login session timeout pop-up is replaced with top warning bar

# Release 2016.01.27

Circuit Updates:

- Upgraded zookeeper jdk to 8
- Added SolrMonitoring pack

# Release 2016.01.20

- Custom Monitoring
- Collapsable banner

# Release 2016.01.13

LB horizontal scaling:

- Every existing environment platform will undergo compute/fqdn/lb component update associated with any deployment post 13/01/2016

Auto healing flags moved from environment configuration in transition to platform in operate phase:

- 3 new buttons are now visible on platform operation page[auto-repair, auto-replace and auto-scale(visible only to redundant platforms)]
- The flags can no longer be configured on environment create/update
- This allows certain platforms to have auto replace enabled e.g web based platforms like tomcat while others can keep them disabled e.g. data based platforms like Couchbase
- Only auto-repair will be turned ON by default for all platforms.

UI additions/improvements:

- Security: User session inactivity timeout of 30mins 
- Security: Only one simultaneous session is allowed
- Notification graph now available on assembly, environment operation pages along with notification report page
- Improved performance of page loading
- Pagination for notification report with ability to filter on text in the subject as well as in the body

Circuit updates:

- Added new 'oneops' source. 
  - Users now have option to choose from 3 sources(main, oneops and walmartlabs) while creating new platform
  - The new 'oneops' source is the only source available to OneOps opensource 
  - This source will eventually replace entire 'main' source. 
  - Migration plan from main to oneops source will be announced separately
- added Ruby component to jenkinsslave pack
- new php version 5.5.30 available
- optional hostname component is available to all packs
- new es version 2.1.1 available
- Added MirrorMaker Lag monitoring