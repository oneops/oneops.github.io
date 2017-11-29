---
layout: wmt/docs
side-navigation: user-navigation.html
title: Keystore Component
---

# Keystore Component

The _keystore_ [component](./components.html) works together with the _certificate_ component of a platform to
[manage SSL certificates](./certificate-component.html) and uses the certificates in the Keystore used in the Java
platform and therefore platforms such as Tomcat, Kafka and others.

## Attributes

_KeyStore Filename_: the filename for the keystore, typically with a `.jks` extension.<br>
_KeyStore password_: the password to access the keystore. It should be the same passphrase as used in the certificate
component<br>

## Example

See a full example usage in [the certificate component documentation](./certificate-component.html)
