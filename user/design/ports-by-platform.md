---
layout: wmt/docs
side-navigation: user-navigation.html
title: Ports by Platform
id: ports-by-platform
---

# Ports by Platform

| Pack Name                                     | Versions                  | Port Numbers   |
|-----------------------------------------------|---------------------------|----------------|
|<a href="http://cassandra.apache.org/" target="_blank">Cassandra**</a>    | 0.8<br/>1.2               |22,<br/>*1024-65535*
|<a href="http://www.couchbase.com/" target="_blank">Couchbase</a>         | 2.5.2<br/>2.2.0           |Secgroup already present<br/>22 22 tcp 0.0.0.0/0", "4369 4369 tcp 0.0.0.0/0", "8091 8092 tcp 0.0.0.0/0", "18091 18092 tcp 0.0.0.0/0", "11214 11215 tcp 0.0.0.0/0", "11209 11211 tcp 0.0.0.0/0", "21100 21299 tcp 0.0.0.0/0
|Squid                                          | 3.1.10                    |22, 80, 8080
|<a href="http://couchdb.apache.org/" target="_blank">CouchDB</a>          | 1.4.0                     |*22,5984,6984*
|<a href="http://www.postgresql.org/" target="_blank">Postgressql</a>      | 9.1                       |22,5432
|MySQL                                          | 5.1.7                     |*22 22 tcp 0.0.0.0/0*<br/>3306 3306 tcp 0.0.0.0/0
|Activemq                                       | 5.5.1<br/>5.9.1<br/>5.10.0|*22 22 tcp 0.0.0.0/0*<br/>61616 61617 tcp 0.0.0.0/0
|Rails                                          | | 22,80,443
|Java ws                                        | | *22,8080,8443*
|Ruby                                           | 1.8.7<br/>1.9.3<br/>2.0.0|*22*
|PHP                                            | | *22,80,443*
|Tomcat| 6.0 7.0 |22, 8080, 8443<br/> *Add 8009*
|Jboss |5.1.2<br/> 5.1.sterling |"22 22 tcp 0.0.0.0/0",<br/> "8080 8080 tcp 0.0.0.0/0",<br/> "8443 8443 tcp 0.0.0.0/0",<br/> "8009 8009 tcp 0.0.0.0/0"
|Apache |2.2.21 |*22,80,443*
|Elastic Search with LB | |22,9200-9400
|Custom | |22
