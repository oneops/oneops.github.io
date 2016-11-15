---
layout: project
title: catalina.out in Tomcat
---

* System.out and System.err are both redirected to catalina.out by default, in the Tomcat container.
* If the Console appender is on the log4j, the Console appender redirects the System.out to catalina.out.
* The location of log files is determined by "LogFilesPath". (Check the value /assembly/ (design|transition)/<tomcatplatform>/tomcat.) By default, the location of catalina.out in the Tomcat pack, is/log/apache-tomcat. (It is not recommended to change this default.)

![Tomcat Logfiles Path](/assets/docs/local/images/tomcat-logfiles-path.png)


* The rotation/retention policy on the Tomcat catalina.out is controlled by logrotate. By default, the rotation is done on the basis of eight days or 2GB/VM.
* Do not rely on the log files on the compute because the compute storage is ephemeral.
* All application logging /stats should be done with the recommended logmon.
