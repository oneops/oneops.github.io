---
layout: user-doc
title: Add ELK stack
id: "add-elk-stack-to-application"
---

#Steps

##ElasticSearch setup

1.Add new platform for elastic search using 'ElasticSearch with LB' pack.

2.If required edit the configuration under elastic search component  .

3.Commit the design changes and deploy the new platform changes.

4.Once elastic search deployed successfully. Verify the http://esipaddress:9200


##Kibana Setup

1.Add new platform for kibana and dependency to es platform.

2.Configure kibana component pointing to elasticsearch deployed above.

3.Commit the design changes and deploy kibana.

4.Verify kibana by accessing http://ipaddress:5601/app/kibana


##Logstash setup

Sample on how to configure logstash to collect tomcat access log.

1.Add logstash component under tomcat platform.Edit the inputs,filters and outputs options with required.

2.Deploy the logstash component.

3.Verify logstash started successfully without errors.


##ELK Validation

1.Verify index (http://ipaddress:9200/_cat/indices) are created on elasticsearch after logstash deployment and status is green.


2.Now log are parsed and stored in elastic search. Configure kibana to generate reports as required.	