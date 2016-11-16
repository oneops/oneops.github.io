---
layout: user-doc
title: Enable https for a Service (LB Certs)
id: enable-https-for-service-lbcerts
---

This assumes that you have an SSL certificate. (If you need one, contact InfoSec.)

# Solution

## Design

1. In the Design phase, add an optional LB certificate.
    
    ![LB certificate](/assets/docs/local/images/lb-certificate.png)
    
2. Enter the certificate details obtained from InfoSec.
    * Key Contents. 
    * Cert Contents.
    * Passphrase
    * Directory

## Transition

1. Edit the LoadBalancer component.
    
    ![LB](/assets/docs/local/images/lb.png)
    
    1. Enable https in the LB component.
    2. Change the Virtual Server port to 443.
2. Set the SSL termination at the NetScaler.   
3. Change the Instance (for your server) port to 8080     
    1. Set the SSL termination at the server or Tomcat.
    2. Add the Certificate into the Design.
    3. Add the KeyStore.
    4. Click **commit** and then **deploy.**  
    
    If you are modifying the existing environment, touch the FQDN component and then commit.



