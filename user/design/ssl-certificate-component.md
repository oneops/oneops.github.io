---
layout: user-doc
title: SSL Certificate Component
---

The _certificate_ [component](./components.html) is part of every platform and can be used to add SSL support to the
platform e.g. Tomcat, Apache or Elasticsearch. The _lb-certificate_ component is part of all platforms that provide
redundancy via load balancing and adds SSL support for these scenarios.

Both components share the setup and allow you to configure a number of details about your SSL certificates. Locate the
platform to which you want to add SSL certificate support and press the _+_ button beside the _certificate_ or the
_lb-certificate_ component as desired and provide the necessary details: 


## Attributes

_Name_: name for the certificate<br>
_Auto Generate_: flag to enable automatic certificate generation<br>
_Key_: certificate key, `.key` file content<br>
_Certificate_: certificate content, `.crt` file content<br>
_SSL CA Certificate Key_: certificate of the certificate authority<br>
_Pass Phrase_: pass phrase for the certificate<br>
_Convert to PKCS12_: flag to determine if the certificate should be converted to the PKCS12 archive format<br>
_Time remaining to expiry_: the time remaining until the certificate expires and needs renewal, supports y (year),
m (month) and d (day) vaules such as `3m`, this data is taken into account for monitoring and notifications so users 
are alerted about upcoming certificate expiries.<br>
_Directory path_: path where the certificate file is saved<br>


## Automatic Certificate Generation

Automatic generation and provisioning of certificates can be enabled with the _Auto Generate_ flag. It relies on the
integration with a certificate management web service as a cloud service as part of the OneOps deployment modeled.

_Common Name_: a single word string that is used as part of a unique identifier for the provisioned certificate<br/>
_Subject Alternative Name_: allows you to insert values into the certificates as subject alternative names<br/>
_External (Internet Facing)_ and _Domain Name_: enable the setting and add a domain name and the value is passed to the 
service so that it can be inserted into the certificate<br/>

Once generated, the certificate is downloaded and its data is used for the values of the attributes _Key_,
_Certificate_, _SSL CA Certificate Key_ and _Time remaining to expiry_.

## Monitoring

A Nagios monitoring script is generated for the time remaining until the expiry in each environment for certificates.
The created monitoring data is available on the _monitors_ tab of the certificate component in the platform deployed in
an environment.

The monitoring triggers notifications when the expiry date is within the next month and alerts are raised about the
expiry. If you change the monitor thresholds' _State_ from _Notify Only_ to _Defunct_, the certificate expiry triggers
an automatic replacement of the certificate with a new auto-provisioned certificate.

Monitoring and automatic replacement is not supported for non-managed certificates like the `lb-certificates`.



