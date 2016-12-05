---
layout: user-doc
title: Add ELK stack
---

This page details how to add [Elasticsearch](https://www.elastic.co/products/elasticsearch),
[Logstash](https://www.elastic.co/products/logstash) and [Kibana](https://www.elastic.co/products/kibana)
- the Elastic stack or ELK stack - to your application.

# Elasticsearch Setup

1. Add a new platform for Elasticsearch using the 'Elasticsearch with LB' pack.

1. If required, edit the configuration under the Elasticsearch component.

1. Commit the design changes and deploy the new platform.

1. Once Elasticsearch deployed successfully, you can access the user interface at http://ipaddress:9200


# Kibana Setup

1. Add a new platform for Kibana and a dependency to the Elasticsearch platform.

1. Configure the Kibana component pointing to the Elasticsearch component deployed above.

1. Commit the design changes and deploy Kibana.

1. Verify Kibana by accessing the user interface at http://ipaddress:5601/app/kibana


# Logstash Setup

The following steps are an example on how to configure Logstash to collect the Tomcat access log.

1. Add a Logstash component under the Tomcat platform.

1. Edit the inputs, filters and outputs option as required.

1. Deploy the Logstash component.

1. Verify Logstash started successfully without errors.


# Validation

1. Verify that indices are created on Elasticsearch after Logstash deployment at http://ipaddress:9200/_cat/indices and
status is green.

1. Now that logs are parsed and stored in Elasticsearch, you can configure Kibana to generate reports as required.