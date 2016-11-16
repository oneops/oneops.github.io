---
layout: user-doc
title: Enable HTTPS on Apache HTTP On OneOps
id: "https-apache-http"
---

# Scenario Context

With Apache HTTP Server in OneOps you have 2 options in configuring HTTPS. Options 1 terminates SSL at the load balancer. So the traffic is only encrypted to the load balancer and is clear test from load balancer to web server. Option 2 encrypts the traffic all the way to the web server.  This tutorial provides the steps for Option 2. 

# Prerequisites

* Basic Understanding Of OneOps
* OneOps Access & Capacity
* Understanding of how to deploy Apache HTTP Server in OneOps
* A Valid Certificate issued
    * Include Private Key: Enabled
    * Include Root Chain: Enabled
    * Chain Order: End-entity first
    * Format: Base64 (OpenSSL)
    * Password: create a password

# Enable HTTPS

**These instructions assume you already have a working Apache HTTP Server platform and just need to enable HTTPS.**

1. Login to OneOps
2. Go to Design for your Apache HTTP Server platform
3. Configure website component
    * Select your website component
    * Press the Edit button
    * Listen Port = 443
    * SSL = On
    * Certificate details can be added in Design or Transition. In most cases you'll want to do it in Transition so you can have different certificates for test, qa, prod, etc. If you want to configure the cert in Transition, save the website component and move to the next step.
    * SSL Certificate & SSL CA Certificate Key
        1. Open your certificate that was downloaded from Venafi in a text editor. You'll need to copy values from the certificate into the appropriate fields. Copy the fields exactly as they are within the certificate. Do not try to merge all the lines of the cert into a single line.
        2. Include both the first and lines lines of each section ( "-----BEGIN CERTIFICATE-----" and "-----END CERTIFICATE-----") when you copy data into OneOps
        3. SSL Certificate = The first section of file that starts with "-----BEGIN CERTIFICATE-----" and ends with "-----END CERTIFICATE-----"
        4. SSL CA Certificate Key
    * 2 sections. copy and paste both into the field
    * Both the 2nd and 3rd sections that start with "-----BEGIN CERTIFICATE-----" and ends with "-----END CERTIFICATE-----"
    * SSL Certificate Key
        1. The key is encrypted. We have to decrypt it before copying it into the field. Decrypting the key required OpenSSL. So you'll need to be on a computer with OpenSSL. It is installed on Linux and Mac by default. It is not installed on Windows by default.
        2. OpenSSL rsa -in filename.pem -out filename.key
        3. You will be prompted for the certificate password
        4. Copy the contents of the new .key file into the SSL Certificate Key field
    * Save changes
4. Configure apache component
    * Select your apache component
    * Press the Edit button
    * Listen Ports = Remove port 80 unless you're planning to host multiple websites with some not requiring HTTPS
    * Enable TLSv1 = Disabled
    * Save changes
5. Add a lb-certificate component
    * Press the + button on lb-certificate to add the component
    * Certificate details can be added in Design or Transition. In most cases you'll want to do it in Transition so you can have different certificates for test, qa, prod, etc. If you want to configure the cert in Transition, save the lb-certificate component and move to the next step.
    * Key = The 4th section from your certificate pem filestarting "-----BEGIN CERTIFICATE-----" and ends with "-----END CERTIFICATE-----"
        1. Do not use the decrypted key file created earlier
    * Certificate = The 1st section from the certificate pem file
    * SSL CA Certificate Key = both sections 2 and 3 from the certificate pem file
    * Pass Phrase = the certificate password
    * Save changes
6. Commit changes
7. Go to Transition
8. Pull your updated design
9. Select your Apache HTTP Server platform
10. Select the lb component
    * Press the Edit button
    * Listeners = "ssl_bridge 443 ssl_bridge 443"
    * ECV = change the port to 443
    * Click on the lock beside Listeners to prevent this changes from being reset when the next design is pulled
    * Save changes
11. If you did not add your SSL Certificate details in Design for your lb-certificate and apache components, do it now
    * Follow the instructions listed above when you were still in design
    * Click on the lock beside field you updated to prevent future design pulls from overwriting these fields.
12. Commit & Deploy
13. Restart web server from Operations if this is not the initial deployment
    * Apache HTTP Server does not automatically get restarted when new configuration is deployed


