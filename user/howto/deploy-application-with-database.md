---
layout: user-doc
title: Deploy Application With database


---

# Purpose

The purpose of this document is to briefly explain how to configure and deploy a simple web application with a MySql 
database.

# Highlevel Overview

1.Setup MySQL database on OneOps.

1. Create a schema on MySQL.

1. Configure the web application.

1. Deploy the web application on the server.

# Step by Step 

1. Select the organization where the web application needs to be deployed.

1. Create a [new assembly](/user/getting-started/).

1. Go to design tab and add a new platform for the database from list of available packs e.g. use the MySQL pack.

1. Configure the database schema either using 'Additional DB statements' or the 'Attachment' option. 

1. Once all the required components under the database platform are configured, you have to commit the changes.

1. Go to the transition tab and create a new environment. The newly created environment will pull all the design 
changes.

1. Once the design pull is completed, click on the commit and deploy butto. It shows the deployment plan. If no changes
are required, click on the "Deploy" button. This action acquires a new VM, installs MySQL, configures the database and
starts MySQL.

1. Once deployment is completed successfully, perform a simple test for database connection.

1. Now, go back to design tab and another platform for the server where the web application will be deployed. In this 
article we will be using a Tomcat pack.

1. Configure the web app to be deployed either using the artifact component or attachment option.

1. Commit the changes. Go to the transition tab and pull the new design changes into the environment.
 
1. Commit and Deploy generates the deployment plan for the new server.

1. After successful deployment go to the Tomcat server fqdn component and find the DNS details to access the 
application.

# Best Practices

- Add users SSH keys under the user component for each platform in design.

- Add the tomcat-daemon component as part of tomcat platform design.

- For the attachment option, always use a public URL for remote file which do not require authentication.

- For all environment specific configuration like database add new VM arguments for Tomcat to load them accordingly.
