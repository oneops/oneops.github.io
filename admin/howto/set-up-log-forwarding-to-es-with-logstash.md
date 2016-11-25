---
layout: admin-doc
title: Set Up Log Forwarding to ES with Logstash
id: set-up-log-forwarding-to-es-with-logstash
---

The inductor logstash-forwarder agent is installed as part of the inductor setup . For more details on inductor setup refer,
[build-install-configure-an-inductor](/admin/howto/build-install-configure-inductor.html) document.
Retrieve the logstash cert from any of the ES nodes and update it at this path /logstash-forwarder/cert/logstash-forwarder.crt 


Once the cert is updated restart the inductor logstash agent via the command *inductor restart_logstash_agent cloud-name*.
