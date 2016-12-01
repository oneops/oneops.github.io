---
layout: user-doc
title: Configure Tomcat HttpConnector Attributes in Oneops
id: configure-tomcat-httpconnector-attributes-in-oneops
---

# Solution

To add attributes to a connector element or change the default value of a connector attribute, follow the steps below. For additional details, refer to <a href="http://tomcat.apache.org/tomcat-7.0-doc/config/http.html" target="_blank">Tomcat Connector</a>.


1. Go to the Tomcat configuration in your design.
2. Change the protocol to what is appropriate for your application or port. (Normally you would do this in design.) The default value is the same as the Tomcat default which is `'HTTP/1.1'`.

    |Key 'HTTP/1.1'                 | Value 'HTTP/1.1'                            |
|-------------------------------|---------------------------------------------|
|Blocking Java connector        |   org.apache.coyote.http11.Http11Protocol   |
|Non blocking Java connector    |   org.apache.coyote.http11.Http11NioProtocol|
|The APR/native connector       |   org.apache.coyote.http11.Http11AprProtocol|

    ![Security Group](/assets/docs/local/images/tomcat-attributes.png)

3. Change the attributes that require tuning by using **Additional attributes needed for connector config.***

~~~xml
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
~~~

>Currently you can not add multiple connectors to Tomcat. It is important to test performance on these settings in the lower environment before you do it in production.

The SSL connector is only configured if you have KeyStore and certificate optional component. For instructions on how to enable SSL, refer to <a href="/user/howto/add-certs-to-compute-to-enable-ssl.html">Add Certs to Compute to Enable SSL</a>

# See Also


* <a href="/user/howto/add-certs-to-compute-to-enable-ssl.html">Add Certs to Compute to Enable SSL</a>
* <a href="/user/references/#catalina-out-in-tomcat">catalina-out in Tomcat</a>
