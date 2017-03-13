---
layout: user-doc
title: Apache HTTP Server Pack
---

<img src="/assets/img/logos/integrations/apache.png" align="right"/>

The _Apache_ [pack](./packs.html) provides the user with the ability to use the 
[Apache HTTP Server](http://httpd.apache.org/) as a platform in their assembly.


## Examples

### Deploy a Website with Apache HTTP on OneOps

# Scenario Context
This will guide you thru deploying a simple Apache HTTP Server site.

# Prerequisites
* Basic Understanding Of OneOps
* OneOps Access & Capacity
* Your site's content must be stored in a repository such as Nexus. OneOps will download the content during deployment.

# Deploy The Site
1. Login to OneOps
2. Create a new assembly if needed or go to your existing assembly
3. Go to Design
4. Create a new Platform
    * Press the Add button or New Platform link on the right side of the Design page.
    * Name = create a unique name. This name will be part of your URL.
    * Pack Source = main
    * Pack Name = Apache
5. Configure Apache component
    * Select the apache component
    * Press the Edit button
    * Security Settings
        1. Server Signature = Off
        2. Enable TRACE HTTP Method = Off
        3. Enable ETags = Off
        4. Enable PHP Info Index = Disabled
        5. Modify other Apache settings are required by your project
    * Save changes
6. Configure User Component (optional)
    * If ssh access is needed to your cloud servers, add a user component and click on it.
    * Press the Edit button
    * Username = app **Note: The users doesn't have to be named app, but name is used by most developers and will be used in the this documentation.**
    * Add your ssh key by pressing the add button beside "Authorized Keys" and pasting your key into the text field.
    * Multiple keys are allowed
    * Modify other values as required.
    * Save changes
7. Configure compute component
    * Select compute component
    * Ensure the OS Type is Redhat or CentOS version 6.6 or newer
    * If the OS Type is "Default of the Cloud", the newest version of CentOS will typically be used. Confirm this is true before moving to production.
    * Modify other values as required.
    * Save changes if anything was modified.
8. Configure website component
    * Select the website component
    * No changes are needed to the website config if you are planning to use HTTP (not HTTPS)
        1. For instructions on enabling HTTPS, see Enable HTTPS On Apache HTTP On OneOps
        2. The default Document Root will be /var/www on most OS Types, but you can change it and other values.
    * Upload your content
        1. Content is added to the website using the attachments tab of the web site
        2. Press attachments
        3. Press the "New Attachment" button or "New Attachment..." link
        4. Name = Provide a unique name
        5. Source URL = URL to download the site's content. Typically this will be zip or tar file located in Nexus.
        6. Destination Path = where to put the content. Typically this will be your website's document root
        7. Execute Command
    * Enter any commands needed to prepare your content
    * If your content is in a zip or tar file, enter the commands to extract it.
    * The content will be downloaded with root ownership and 600 permissions. The web server runs as user "apache" so it will be not able to read the content.
    * Example:
    
```
chown app:app <file name>
chmod 644 <file name>
```

8. Run on Events
    * When do you want the content downloaded?
    * Recommended: After Add, After Replace, After Update, On Demand
9. Configure any other components as needed by your site
10. Commit changes
11. Go to Transition and pull the design.
12. Configure Load Balancer (optional - only needed for redundant environments)
    * Select your platform from the environment page
    * Select the lb component
    * Press the Edit button
    * Listeners = "http 80 http 80"
        **Note: This setting is different if HTTPS is being used. For enabling HTTPS, see Enable HTTPS On Apache HTTP On OneOps**
    * ECV
        1. Used for monitoring. Provide information for a static page that can be monitored and the web server port on the compute.
        2. Example: 80 = GET /index.html
    * Click on the lock icon beside both the Listeners and ECV values to prevent the settings from being overwritten when the next design is imported.
    * Save
13. Commit & Deploy

# Other Details

Apache HTTP Server does not automatically restart if you make additional changes & deployments after the initial deployment. If you will have to restart the web server from Operations for your changes to be reflected.



### Enable HTTPS on Apache HTTP On OneOps


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



