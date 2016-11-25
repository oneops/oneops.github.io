---
layout: user-doc
title: Deploy a Website with Apache HTTP on OneOps
id: "website-apache-http"
---

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
    
    ~~~
    chown app:app <file name>
    chmod 644 <file name>
    ~~~

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
