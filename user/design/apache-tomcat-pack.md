---
layout: user-doc
title: Apache Tomcat Pack
---

<img src="/assets/img/logos/integrations/tomcat.png" align="right"/>

The _Tomcat_ [pack](./packs.html) provides the user with the ability to use [Apache Tomcat](http://tomcat.apache.org/)
as a platform in their assembly.


## Example -  Log file catalina.out

The default log file for Tomcat is `catalina.out` and both `System.out` and `System.err`  are redirected to it. The location
of the file is configured via _LogFilesPath_ and defaults to `/log/apache-tomcat`. The system logrotate is used to control
the rotation and retention on the basis of eight days or 2GB per compute. 

Keep in mind that compute storage is ephemeral and log as therefore not kept. For all critical application logging and
statistics gathering usage of _logmon_ is recommended.

## Example - SSL Termination for Tomcat 

SSL configuration for Tomcat is similar to the usage with the [apache pack](./apache-http-server-pack.html) relying on 
the [certificate component](./ssl-certificate-component.html). As a Java application, Tomcat also requires configuration
of the [keystore component](./keystore-component.html).

### At Load Balancer

In this method communication from client to the load balancer is encrypted (HTTPS), but the communication from load 
balancer to Tomcat is server is in clear text (HTTP).

1. Add a new _lb-certificate_ component to the _tomcat_ platform design and configure the certificate details.
2. Disable the _Enable TLSv1_ configuration on the _tomcat_ component.
3. Add a load balancer _lb_ component and set the _Listeners_ to `https 443 http 8080`.
   If using octavia software loadbalancers set the _Listeners_ to `terminated_https 443 http 8080`.
4. Commit the design changes and proceed with [deployment as usual](./components.html).

### Directly at Tomcat 

In this method communication is encrypted from client to load balancer (HTTPS) and from load balancer to Tomcat (HTTPS).

1. Add a new _certficate_ component to the _tomcat_ platform in design and configure the certificate.
2. Add a _keystore_ component and [configure it](./keystore-component.html).
3. Configure the _SSL Port_ in your _tomcat_ component as needed. The default is 8443.
4. If desired, disable the _HTTP Connector_ in the _tomcat_ component.
5. Add a load balancer _lb_ component and set the _Listeners_ to `ssl_bridge 443 ssl_bridge 8443`.
   If using octavia software loadbalancers set the _Listeners_ to `https 443 https 8443`.
6. Commit the design changes and proceed with [deployment as usual](./components.html).

## Example - Configure Tomcat HttpConnector Attributes

To add attributes to a connector element or change the default value of a connector attribute, follow the steps below.
For additional details, refer to 
[the Tomcat Connection documentation](http://tomcat.apache.org/tomcat-7.0-doc/config/http.html").

1. Go to the Tomcat configuration in your design.
2. Change the protocol to what is appropriate for your application or port - Normally done in design. The default value is the same as the Tomcat default which is `'HTTP/1.1'`.

|Key 'HTTP/1.1'                 | Value 'HTTP/1.1'                            |
|-------------------------------|---------------------------------------------|
|Blocking Java connector        |   org.apache.coyote.http11.Http11Protocol   |
|Non blocking Java connector    |   org.apache.coyote.http11.Http11NioProtocol|
|The APR/native connector       |   org.apache.coyote.http11.Http11AprProtocol|

3. Change the attributes that require tuning by using **Additional attributes needed for connector config.***

```
   <!-- A "Connector" represents an endpoint by which requests are received
         and responses are returned. Documentation at :
         Java HTTP Connector: /docs/config/http.html (blocking & non-blocking)
         Java AJP  Connector: /docs/config/ajp.html
         APR (HTTP/AJP) Connector: /docs/apr.html
         Define a non-SSL HTTP/1.1 Connector on port 8080 -->

    <!-- A "Connector" using the shared thread pool-->
    <Connector executor="tomcatThreadPool"
               port="8080"
               protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443"
              maxKeepAliveRequests="100"
               <!--  All additional Attributes go here eg below -->
               />

    <!-- Define a SSL HTTP/1.1 Connector on port 8443
         This connector uses the JSSE configuration, when using APR, the
         connector should be using the OpenSSL style configuration
         described in the APR documentation -->

<!-- opted in to ssl activation w/ keystore -->
<Connector port="8443"
protocol="HTTP/1.1" SSLEnabled="true"
maxThreads="50"
keystoreFile="/app/certs/keystore.jks"
keystorePass="changeit"
scheme="https" secure="true"
clientAuth="false"  sslProtocol="TLSv1" sslEnabledProtocols="TLSv1,TLSv1.1,TLSv1.2"
 <!--  All additional Attributes go here eg below -->
 />
```

Currently you can not add multiple connectors to Tomcat. It is important to test performance on these settings in the lower environment before you do it in production.

The SSL connector is only configured, if you have KeyStore and certificate optional component. For instructions on how to enable SSL, refer to <a href="/user/design/ssl-certificate-component.html">SSL Certificate Component</a>
