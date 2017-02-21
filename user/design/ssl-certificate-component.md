---
layout: user-doc
title: SSL Certificate Component
---

# Introduction

The _certificate_ component is part of every platform and can be used to add SSL support to the platform e.g. Tomcat,
Apache or Elasticsearch. The _lb-certificate_ component is part of all platforms that provide redundancy via load
balancing and adds SSL support for these scenarios.

Both components share the setup and allow you to configure a number of details about your SSL certificates. Locate the
platform to which you want to add SSL certificate support and press the _+_ button beside the _certificate_ or the
_lb-certificate_ component as desired and provide the necessary details: 


# Attributes

_Name_: name for the certificate<br>
_Auto Generate_: flag to enable automatic certificate generation<br>
_Key_: certificate key, `.key` file content<br>
_Certificate_: certificate content, `.crt` file content<br>
_SSL CA Certificate Key_: certificate of the certificate authority<br>
_Pass Phrase_: pass phrase for the certificate<br>
_Convert to PKCS12_: flag to determine if the certificate should be converted to the PKCS12 archive format<br>
_Time remaining to expiry_: the time remaining until the certificate expires and needs renewal, supports y (year), 
m (month) and d (day) vaules such as `3m`<br>
_Directory path_: path where the certificate file is saved<br>


# Automatic Certificate Generation

Automatic generation and provisioning of certificates can be enabled with the _Auto Generate_ flag. It relies on the 
integration with a certificate management web service as a cloud service as part of the OneOps deployment modeled .


_Common Name_: tbd
_Subject Alternative Name_: tbd
_External (Internet Facing)_: tbd
_Domain Name_: tbd

The infosec’s walmart cert management service is modeled as a cloud service in oneops. It requires mutual TLS authentication. OneOps team DL and application id form a pair of credentials


As of now, the web service allows OneOps to manage only those certs which are provisioned by these credentials


The certificate component in oneops has now additional fields that are required for provisioning a certificate. the “common name” field requires a single word content. OneOps appends the cusotmer_domain to this name while provisioning the cert. If someone wants a specific name(s), it should be added in the array of SANs
The cert content will be downloaded in case the cert already exists for the given common name. If it does not exist, OneOps will create the cert and then download it. After that, the cert will be split in 3 fields (using the openssl commands) to populate the contents of existing fields of the cert component: key, cert and CA cert.
It also populates the “expiry date” of the cert. (It uses openssl command in the recipe for deriving the exp date)
OneOps also supports the expiration of the cert component. If the cert is auto-provisioned, OneOps configures nagios script to generate perf data for time remaining to expiry. The metrics do show up on the regular metrics monitor screen on the cert component
In case managed-via certs, there is default monitor added too. It will notify as soon as the expiry date is within one month
OneOps will alert in case the expiry date is approaching soon.
You could also change the monitor from notify to defunct. Defunct is a new ops state added in oneops. Defunct monitor once triggered results in auto-replace deployment.
The cert replace deployment would renew the cert using the infosec’s web service. The renewal happens only if the expiry is within one month or already past. Otherwise replace is just “add” which will download the existing cert
one can also add expiration period manually like "1y" or "2m" or "50d" for existing cert CIs which were configured manually. This should set the monitor script accordingly and help users know when the cert is expiring. They would get oneops alerts.
This is enabled for the certificate component in circuit-main-1 and circuit-oneops-1


# Example - Enable SSL on Tomcat

1. Locate your Tomcat platform in your assembly
2. Add a _certficate_ component and configure it.
3. Add a _keystore_ component and [configure it](./keystore-component.html).
4. Configure the _SSL Port_ in your _tomcat_ component as needed. The default is 8443.

