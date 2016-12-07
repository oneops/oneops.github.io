---
layout: user-doc
title: Add ELK Stack to an Application
---

This page details how to add [Elasticsearch](https://www.elastic.co/products/elasticsearch),
[Logstash](https://www.elastic.co/products/logstash) and [Kibana](https://www.elastic.co/products/kibana)
- the Elastic stack or ELK stack - to an application.

# Elasticsearch Setup

1. Add a new platform for Elasticsearch using the 'Elasticsearch with LB' pack.

1. If required, edit the configuration under the Elasticsearch component. For example, change the number of shards or
replicas used or other parameters as desired.

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

1. Edit the inputs, filters and outputs options as required. Here is an input example:

```
Inputs : file {path => "/opt/tomcat7/logs/access*.log" sincedb_path => "/opt/logstash/sincedb-access" }
```

1. Deploy the Logstash component.

1. Verify Logstash started successfully without errors by inspecting the log on the VM running Tomcat and Logstash.


# Validation

1. After the Logstash deployment, verify that indices are created on Elasticsearch at http://ipaddress:9200/_cat/indices
and that the status is green.

1. Now that logs are parsed and stored in Elasticsearch, you can configure Kibana to generate reports as required 
and detailed in the [Kibana documentation](https://www.elastic.co/guide/en/kibana/current/createvis.html).