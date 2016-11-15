---
layout: project
title: Add Certs to Compute to Enable SSL
id: "add-certs-to-compute-to-enable-ssl"
---

# Solution

To enable SSL, add certs to the compute.


1. Login to OneOps.
2. Go to assembly.
3. Add a component certificate.
    * Key: Your private key. (Use the same key as below for KeyStore!)
    * Certificate: Your server certificate
    * SSL CA Cert Key: Your Certificate Authority's certificate
    * Passphrase: For your certificate (for example, 'changeit')
4. Add a Component KeyStore.
    * KeyStore filename: End product is a .jks file which is located at this filename location.
    * KeyStore password: Passphrase for the .jks file. It must be the same as the private key above!

>If Tomcat is used, the user must supply the SSL port number, which is in addition to the Certificate and KeyStore as indicated above.


