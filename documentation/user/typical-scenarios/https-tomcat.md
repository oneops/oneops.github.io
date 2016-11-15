---
layout: project
title: How to enable HTTPS on Tomcat in OneOps
id: "https-tomcat"
---

# Scenario Context

This page summarizes steps to enable HTTPS on Tomcat in OneOps.

# Prerequisites

* Basic Understanding of OneOps
* OneOps Access & Capacity
* A Tomcat Design
* A valid certificate
    * Include Private Key
    * Inclue Root Chain
    * Chain Order: End-entity first
    * Format: Base64 (OpenSSL)
    * Password: create a password

# Security Options

## Option 1: SSL Termination at Load Balancer

In this method communication from client to the load balancer is encrypted (HTTPS), but the communication from load balancer to Tomcat is server is in clear text (HTTP).

## Option 2:SSL Termination at Tomcat

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

