---
layout: user-doc
title: Deploy Application With database
id: "deploy-application-with-database"
---
#Purpose
The purpose of this document is briefly explain how to configure and deploy a simple web application on Oneops with database.

#High level steps
1.Setup My SQL database on oneops.

2.Create a schema on my SQL.

3.Configure web application.

4.Deploy the web application on server.

#Step by Step Details

1.Select organization where the web application needs to be deployed.

2.Create a new assembly. For details see [Create An Assembly](http://oneops.com/user/getting-started/#create-an-assembly)

3.Go to design tab and add new platform for database from list of available packs like my sql pack

4.Configure the datbase schema either using 'Additional DB statements' or 'Attachment' option. 

5.Once all the required components under database platform are configured. Commit the changes.

6.Go to transition tab and create a new environment. Newly created environment will pull all the design changes.

7.Once design pull is completed. Click on commit and deploy button, it will show the deployment plan. If no changes required, click on "Deploy" button which will acquire a new vm , installs my sql and configure the database as configured and starts it.

8.Once deployment is completed successfully. Do simple test for database connection.

9.Now, go back to design tab and another platform for server where web application will be deployed. In this article we will be using tomcat pack.

10.Configure web app to be deployed either using artifact component or attachment option.

11.Commit the changes. Go to transition tab and pull the new design changes into the environment.
 
12.Commit and Deploy will generate deployment plan for new server.

13.After successful deployment goto tomcat server fqdn component and find the dns details to access the application.

#Best Practices

1. Add users ssh keys under user component for each platform in design.

2.Add tomcat-daemon component as part of tomcat platform desgin.

3.For attachment option  always use a public URL for remote file which do not require authentication.

4.For all environment specific configuration like database add new vmarg for tomcat to load them accordingly.
