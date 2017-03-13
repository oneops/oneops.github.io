---
layout: user-doc
title: Apache Tomcat Pack
---

<img src="/assets/img/logos/integrations/apache.png" align="right"/>

The _Tomcat_ [pack](./packs.html) provides the user with the ability to use [Apache Tomcat](http://tomcat.apache.org/)
as a platform in their assembly.


## Examples


### Configure Tomcat HttpConnector Attributes in Oneops

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

### catalina.out in Tomcat

* System.out and System.err are both redirected to catalina.out by default, in the Tomcat container.
* If the Console appender is on the log4j, the Console appender redirects the System.out to catalina.out.
* The location of log files is determined by "LogFilesPath". (Check the value /assembly/ (design|transition)/<tomcatplatform>/tomcat.) By default, the location of catalina.out in the Tomcat pack, is/log/apache-tomcat. (It is not recommended to change this default.)

![Tomcat Logfiles Path](/assets/docs/local/images/tomcat-logfiles-path.png)


* The rotation/retention policy on the Tomcat catalina.out is controlled by logrotate. By default, the rotation is done on the basis of eight days or 2GB/VM.
* Do not rely on the log files on the compute because the compute storage is ephemeral.
* All application logging /stats should be done with the recommended logmon.

### How to enable HTTPS on Tomcat in OneOps

This section summarizes steps to enable HTTPS on Tomcat in OneOps.

Prerequisites:

* Basic Understanding of OneOps
* OneOps Access & Capacity
* A Tomcat Design
* A valid certificate
    * Include Private Key
    * Inclue Root Chain
    * Chain Order: End-entity first
    * Format: Base64 (OpenSSL)
    * Password: create a password


#### Option 1: SSL Termination at Load Balancer

In this method communication from client to the load balancer is encrypted (HTTPS), but the communication from load balancer to Tomcat is server is in clear text (HTTP).

#### Option 2:SSL Termination at Tomcat

In this method communication is encrypted from client to load balancer (HTTPS) and from load balancer to Tomcat (HTTPS).

## Option 1 Instructions


1. Login to OneOps
2. Go to the Design phase of your Tomcat platform
3. Add a new lb-certificate
    * Save with the default values.
    * Do not enter any certificate details here. You will enter that information in the Transition phase.
4. Configure Tomcat Component
    * Click on your Tomcat Component
    * Press the Edit button
    * Disable TLSv1(Enable TLSv1 = Disabled)
5. Save & Commit
6. Go to your environment in the Transition phase
    * Note the steps in the transition phase will have to be performed for each environment used by this Tomcat platform.
7. Click on your Tomcat platform
8. Configure lb-certificate component
    * Click on your lb-certificate component
    * Open your certificate pem file you downloaded from Venafi in a text editor (Textpad, Notepad++, Atom, etc.)
    * Fill in the lb-certificate fields as shown in the image.
    * Press the lock icon beside each field you modified to prevent future design pulls from overwriting the values.
    * Save 
9. Configure lb-component
    * Click on the lb-component
    * Listeners = "https 443 http 8080"
    * You must replace the existing listener settings for non-SSL. Do not add a 2nd listener. OneOps will allow you to deploy a lb component will multiple listeners, but the app will only respond on one of them.
    * ECV = change your ECV to use port 8080
    * Press the lock icon beside fields you modified to prevent future design pulls from overwriting the values.
    * Save
10. Deploy your application

## Option 2 Instructions 


1. Perform all the steps from Option 1 excluding step 9 "Configure lb-component".
2. Go to Design phase of your Tomcat platform
3. Add a new certificate component
    * Save with the default values.
    * Do not enter any certificate details here. You will enter that information in the Transition phase.
4. Add a new keystore component
    * Set a password. It does not have to match the password for your certificate.
5. Configure Tomcat Component
    * Click on your Tomcat Component
    * Press the Edit button
    * Disable HTTP Connector (Enable HTTP Connector = Disabled)
6. Save and Commit
7. Go to your environment in the Transition phase
    * Note the steps in the transition phase will have to be performed for each environment used by this Tomcat platform.
8. Pull your design
9. Click on your Tomcat platform
10. Configure certificate component
    * Click on your certificate component
    * Open your certificate pem file you downloaded from Venafi in a text editor (Textpad, Notepad++, Atom, etc.)
    * Fill in the certificate fields in the same way you did for the lb-certificate in the Option 1. See the image in that section.
    * Press the lock icon beside each field you modified to prevent future design pulls from overwriting the values.
    * Save
11. Configure lb-component
    * Click on the lb-component
    * Listeners = "ssl_bridge 443 ssl_bridge 8443"
    * You must replace the existing listener settings for non-SSL. Do not add a 2nd listener. OneOps will allow you to deploy a lb component will multiple listeners, but the app will only respond on one of them.
    * ECV = change your ECV to use port 8443
    * Press the lock icon beside fields you modified to prevent future design pulls from overwriting the values.
    * Save
12. Deploy your application

