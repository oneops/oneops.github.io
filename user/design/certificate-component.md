---
layout: wmt/docs
side-navigation: user-navigation.html
title: Certificate Component
---

# Certificate Component

The _certificate_ [component](./components.html) is part of every platform and
can be used to add SSL support to the platform e.g. Tomcat, Apache or
Elasticsearch. The _lb-certificate_ component is part of all platforms that
provide redundancy via load balancing and adds SSL support for these scenarios.

Both components share the setup and allow you to configure a number of details
about your SSL certificates. Locate the platform to which you want to add SSL
certificate support and press the _+_ button beside the _certificate_ or the
_lb-certificate_ component as desired and provide the necessary details:


## Attributes
* _Auto Generate_: Flag to enable automatic certificate generation.
* _Key_: Certificate key. The `.key` file contents.
* _Certificate_: Certificate content. The `.crt` file contents.
* _SSL CA Certificate Key_: Certificate of the certificate authority.
* _Pass Phrase_: Pass phrase for the certificate.
* _Convert to PKCS12_: Flag to determine if the certificate should be converted to the PKCS12 archive format.
* _Time remaining to expiry_: The time remaining until the certificate expires and needs renewal. Supports `y` (year),
`m` (month) and `d` (day) values such as `3m`. This data is taken into account for monitoring and notifications so users
are alerted about upcoming certificate expirations.
* _Directory path_: path where the certificate file is saved
* _SSL Certificate (PFX)_: Enables the certificate as a `.pfx` file for application gateway/certificate store.

These tips will help determining the correct certificate when receiving the
certificate as a `pem` file:

* _Key_: The `filename.key` file contents.
  * Use
  ```bash
  openssl rsa -in certificate.pem -out filename.key
  ```
  to create a key file from the pem file. This requires entering a pass phrase.
* _Certificate_: The first section of the `certificate.pem` file.
* _SSL CA Certificate Key_: Sections 2 and 3 from the `certificate.pem` file.
* _Pass Phrase_: The pass phrase entered in the `openssl` command.


## Automatic Certificate Generation

Automatic generation and provisioning of certificates can be enabled with the
_Auto Generate_ flag. It relies on the integration with a certificate management
web service as a cloud service as part of the OneOps deployment modeled.

_Common Name_: Full common name of the certificate to be provisioned. Maximum length is 64 characters<br/>

_Subject Alternative Name_: allows you to insert values into the certificates as
subject alternative names. This is an optional attribute and accepts
multiple SANs<br/>

_External (Internet Facing)_ and _Domain Name_: enable the setting and add a
domain name and the value is passed to the service so that it can be inserted
into the certificate. An example domain attribute value: "walmart.com"</br>

_Pass Phrase_: certificate download password. Must be minimum 12 and
maximum 20 characters, At least 1 upper case and 1 lower case letter, special
character and a number

Once generated, the certificate is downloaded and its data is used for the
values of the attributes _Key_, _Certificate_, _SSL CA Certificate Key_ and
_Time remaining to expiry_.

## Monitoring

A Nagios monitoring script is generated for the time remaining until the expiry
in each environment for certificates.  The created monitoring data is available
on the _monitors_ tab of the certificate component in the platform deployed in
an environment.

The monitoring triggers notifications when the expiry date is within the next
month and alerts are raised about the expiry. If you change the monitor
thresholds' _State_ from _Notify Only_ to _Defunct_, the certificate expiry
triggers an automatic replacement of the certificate with a new auto-provisioned
certificate.

Monitoring and automatic replacement is not supported for non-managed
certificates like the `lb-certificates`.
