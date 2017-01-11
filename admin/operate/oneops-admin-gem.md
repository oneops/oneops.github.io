---
layout: admin-doc
title: oneops-admin gem
id: oneops-admin-gem
---

Oneops-admin is a Ruby thor-based command-line to manage the inductor.  Jenkins copies the JAR built from the inductor repo into the gem. The oneops-admin gem installs an inductor command which has:


```
$ inductor
Commands:
inductor add # Add cloud to the inductor
inductor check # Inductor check
inductor check_agent # Inductor check agent
inductor create # Creates and configures a new inductor
inductor disable PATTERN # Disable inductor clouds matching the PATTERN
inductor enable PATTERN # Enable inductor clouds matching the PATTERN
inductor force_stop NAME # Inductor force stop (will kill -9)
inductor help COMMAND # Describe available commands or one specific command
inductor install_initd # Install /etc/init.d/inductor
inductor list PATTERN # List clouds in the inductor
inductor restart NAME # Inductor restart
inductor restart_agent NAME # Inductor restart
inductor restart_logstash_agent NAME # Inductor logstash agent restart
inductor start NAME # Inductor start
inductor start_agent NAME # Inductor log agent start
inductor start_logstash_agent NAME # Inductor logstash agent start
inductor status # Inductor status
inductor status_agent # Inductor log flume agent status
inductor status_logstash_agent NAME # Inductor logstash agent status
inductor stop NAME # Inductor stop (will finish processing active threads)
inductor stop_agent NAME # Inductor log agent stop
inductor stop_logstash_agent NAME # Inductor logstash agent stop
inductor tail # Inductor log tail
```
