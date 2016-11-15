---
layout: project
title: Deploy and Provision an Application and Environment for the First Time
id: deploy-provision-application-environment-first-time
---

# Solution

## User Setup

1. Login to OneOps. At first, you are not part of any "organization" in OneOps so the home screen displays like this: 
  
    ![New org](/assets/docs/local/images/new-org.png)
  
2. Find out whether your Team already has an organization created in OneOps, and if so find out which person is your administrator. If you are instead a new organization, ask your administrator to create an organization for you.
3. Find your organization in OneOps.
4. After you identify your organization, log into the OneOps system with your Active Directory username and password. This creates your account after you agree to the Terms and Conditions.
5. Find your administrator and ask the administrator to add your new account into your Team. 
    
The administrator completes the following steps to add your account to the team:  


1. In the top header, click **Organization.**
2. Select the tab, **users.** 
3. Click **Add User.**
4. Enter the login name of the user to be added in the text box.
5. Save.
    
## DevOps or Support Users

You may want to add people outside of your team into your OneOps organization so that you can get support help or just to share your work. You can assign this type of user the permissions of 'operations' to keep them from altering assemblies. To do this, follow these steps:


1. Create a new Team in your Organization.
2. Name it something like Devops. 
3. Add individual users into that Team.

## Granular Permissions

Granular permissions are set at the Team level. The choices are design, transition, and operations.

## Tenant Setup


1. To get a tenant for your organization in the OpenStack infrastructure, contact the OneOps team. This is to allocate a quota of VMs (virtual machines) against your organization. 
2. Indicate how many VMs you need in each of your environments and in each data center. 
3. Specify how much memory your application needs to run on each VM.
4. The OneOps team creates a tenant for you and sets up the Cloud configuration for your organization and then notifies you.

Then you can create an Assembly.

## Assembly

Think of an assembly as the blueprint of your application. It contains the design of your application architecture and all its components including infrastructure.

To create an assembly follow these steps:


1. Click **assemblies.**
2. Click **new assembly.**
3. Add the name and description on the next form and leave the catalog as none. 
4. Click **save.**
  
    Now you are in the "Design" phase. 
  
## Platform

A Platform is an instance of a pre-defined template design called a pack. Examples of packs include: Tomcat, MySQL, etc.

1. To add a platform in your design, click **New Platform.** 
2. Enter the following: 
    * Platform name (something like tomcat-webapp for example)
    * Pack Source
    * Pack: You can select this in the Pack Name drop-down. If you don't see the platform you need, contact your administrator.
    * Latest Pack Version. 
3. Click **Save.**
  
    You should now see a component diagram. These are the components that will be installed on your VM in the appropriate order. This sequence comes from the pack definition. Also, on the right hand side, you should see the list of the same components.
    
4. To modify the size of your compute, if this is required, select the "compute". The default setting for the compute size is "medium". 
5. For the VM size details, refer to your administrator.
6. Select the **variables** tab.
7. On the variables page, select the variables to be modified.
8. Click **edit** on the right side. 
9. Modify and save the variables as required:
    * **appVersion:** Maven artifact version
    * **artifactId:** Maven artifactId. For example, for a Tomcat platform, the artifactId is the artifact id of the war artifact.
    * **groupId:** Maven artifact group id for your artifact
    * **repository:** TBD
    * **shaVersion:** You can leave this empty
    * **deployContext:** Name of the Tomcat context when the app is deployed. (http://<server|vip>/<deployContext>).  
     
    >If your packs have multiple added components of the same type on top of the default design, make sure to select each component of the same type and change the attributes to override the variables substitution. For example, if you have more than 1 war in the same Tomcat, make sure you select each artifact (war) component and edit all the attributes where a variables value is different from what you set above... For example, the artifactId would be different for each war and it is necessary to change all the attributes wherever it is referred to. Remove the ${OO_LOCAL* and put the actual value carefully. Also remove the checksum attribute value.
     
10. When you are finished editing the variables values, you are ready to mark your design as complete. Click the green **Commit** button.
