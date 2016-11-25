---
layout: user-doc
title: Deploy Application With database
id: "deploy-application-with-database"
---
#Purpose
The purpose of this document is briefly explain how to configure and deploy a simple web application on Oneops with database interactions.

#High level steps
1.Setup My SQL database on oneops.

2.Create a schema on my SQL.

3.Configure simple contacts list web application which displays list of contact details and allows add new contact using My sql databases.

4.Deploy the web application on tomcat server.

#Step by Step Details
1.Select organization where the web application needs to be deployed.

2.Create a new assembly. For details see [Create An Assembly](http://oneops.com/user/getting-started/#create-an-assembly)

3.Go to design tab and add new platform for database. In this article using mysql pack.

![Creating a new platform for Database](/assets/docs/local/images/database-platform-create.png)

4.Provide database schema in  'Additional DB statements' option. 

![Database schema creation](/assets/docs/local/images/database-component.png)

  Use 'Attachment' option to use sql file for database creation.

5.Once all the required components under database platform are configured. Commit the changes.

6.Go to transition tab and create a new environment. Newly created environment will pull all the design changes as shown below.

![New Environment](/assets/docs/local/images/tranistion-view-pull-desgin.png)

7.Once design pull is completed , click on commit and deploy button, it will show the deployment plan. 
If no changes required, click on "Deploy" button which will acquire a new vm , install my sql and configure the database as configured and starts it.

![New Environment](/assets/docs/local/images/db-deployment-plan-sucess.png)

8.Once deployment is completed successfully. Do simple test for database connection.

9.Now, go back to design tab and another platform  for server as shown below. In this article we will be using tomcat pack.

![Add Tomcat Platform](/assets/docs/local/images/add-tomcat-platform.png)

10.Configure webapp to be deployed. In this article using attachment option.

![Tomcat Attachment Option for Web application](/assets/docs/local/images/tomcat-attachement.png)

11.Commit the changes. Go to transition tab and pull the design changes into the environment.
 
12.Commit and Deploy will generate deployment plan as shown below.

![Tomcat Deployment Plan](/assets/docs/local/images/tomcat-deployment-plan.png)

13.After successful deploymnet goto tomcat fqdn component and find the dns details to access the application.

![Tomcat Deployment Plan](/assets/docs/local/images/webapp-sample.png)


#Best Practices

1. Add users ssh keys under user component for each platform in design.

![Add User SSH](/assets/docs/local/images/add-new-user.png)

2.Add tomcat-daemon component as part of tomcat platform desgin.

3.To use attachment option  always use a public URL for remote file which do not require authentication.

4.For all environment specific configuration like database add new vm  arg for tomcat to load them accordingly.

![Tomcat VM argument](/assets/docs/local/images/tomcat-vmargs.png)