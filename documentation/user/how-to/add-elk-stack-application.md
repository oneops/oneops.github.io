---
layout: user-doc
title: Add ELK stack
id: "add-elk-stack"
---

#Steps

##ElasticSearch setup

1.Add new platform for elasticsearch using 'ElasticSearch with LB' pack.

![Add ElasticSearch Platform](/assets/docs/local/images/es-pack.png)

2.Configure elasticsearch component with required configuration as shown below.

![ElasticSearch Component](/assets/docs/local/images/es-component-config.png)

3.Commit the design changes and deploy the new platform changes.

4.Once elasticsearch deployed successfully. Verify the http://ipaddress:9200

![ElasticSearch Response](/assets/docs/local/images/es-response.png)

##Kibana Setup

1. Add new platform for kibana and dependecy to elasticsearch platform.

![Kibaba Platform](/assets/docs/local/images/kibana-platform.png)

2.Configure kibana component pointing to elasticsearch deployed above.

![Kibana Component](/assets/docs/local/images/kibana-component.png)

3.Commit the design changes and deploy kibana.

4.Verify kibana by accessing http://ipaddress:5601/app/kibana

![Kibana Application](/assets/docs/local/images/kibana-app.png)


##Logstash setup

Configuring logstash to collect tomcat access log.

1.Add logstash component under tomcat platform.

![Kibana Application](/assets/docs/local/images/logstash-tomcat.png)

2. Deploy the logstash component.

3. Verify logstash started successfully without errors.


##ELK Validation

1.Verify index (http://ipaddress:9200/_cat/indices) are created on elasticsearch after logstash deployment and status is green.

![ElasticSearch Indices](/assets/docs/local/images/es-indices.png)

2.Now log are parsed and stored in elastic search. Configure kibana to generate reports as required.	

