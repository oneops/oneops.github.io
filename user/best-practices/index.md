---
layout: user-doc
title: Design Best Practices
id: "design-best-practices"
---

In the Design phase, follow these best practices:


* Follow the naming conventions for <a href="/user/best-practices/#naming-conventions">assembly names</a>
* Add the "owner's" email address to each assembly
* Be a "watcher" for your assembly
* Add a "description" for each platform to help other users to understand the purpose of the platform
* Make sure that VM (instance size on compute) and JVM sizes (max heap size on Tomcat) are consistent
* Edit the default values of the <a href="/user/references/#variables">variables</a> of each platform, as needed
* Review the default values of each component
* If an additional port support is required, add the secgroup component
* To SSH into the VM, add the <a href="/user/howto/ssh-to-a-compute-node.html">SSH key</a> to the user component
* To ensure that the platform dependency is correct, review the design diagram
* After creating or making changes to a design, remember to commit the design
<br>
<br>


<h1 class="primary" id="naming-conventions">Naming Conventions</h1>

Follow these naming conventions for assemblies, platforms and environments.

# Assembly Name

The name of the assembly should represent the name of your product or the service that you are offering. Keep it short and relevant.

Use: `wms`

Do not use: warehouse management system

# Platform Name

The name of the platform should be the name of the tier that you are adding. For example: if you are adding a web tier, call it tomcat or jboss. For a database tier, call it db.

Use: `tomcat`, `jboss`, `db`, `cache`

Do not use: cache-app, dal-schema-common-app, tomcat-prod

# Environment Name

The environment name should represent the environment where the design is deployed.

Use: `dev`, `qa`, `qa-int`, `stg`, `prod`

Do not use: tomcat-prod, oracle-db

> WARNING:
>
* Do NOT repeat the assembly name in the platform name.
* Do NOT repeat the assembly name in the environment name.
* Do NOT use environment names in platform names.

Each assembly, and each environment inside the assembly, run in their own separate namespaces. These names do not have to be globally unique. Repeating the names in these three entities results in very long resource names in the cloud environment.  
<br>
<br>


<h1 class="primary" id="operations-best-practices">Operations Best Practices</h1>

In the Operations phase, use the following best practices:


* Click each platform and update the configuration under "Automation Status" as needed.
* It is recommended to keep the autorepair enabled.
* Enable the auto replace if you want your unhealthy components (like Compute) to be replaced automatically by OneOps.
* If you enable the auto replace, make sure you set the associated two fields - "Replace unhealthy after minutes" and "Replace unhealthy after repairs #" as per your needs.
<br>
<br>


<h1 class="primary" id="provide-only-necessary-privileges-to-accounts">Provide Only Necessary Privileges to Accounts</h1>

Provide only the necessary privileges to accounts with these best practices:


* Limit "Admin" permissions within an organization.
* Limit access by phase as listed below:
    * **Design:** Can add or delete components
    * **Transition:** Can change variables and deploy code
    * **Operations:** Can do control operations like stop and restart
<br>
<br>   
    

<h1 class="primary" id="restrict-access-with-teams">Restrict Access with Teams</h1>

Use Teams to restrict user access to an organization. Create <a href="/user/howto/create-a-team-in-an-organization.html">teams</a>, add users to those teams, and then provide only the necessary privileges to each team.

# Discussion

This should be done by the organization admin. After creating a team, it can be given a permission to have access to Design, Transition and Operations phases.

> Do not make every user an admin. Admin access should be limited to selected users in an organization.

# See Also

* <a href="/user/howto/enable-access-to-an-assembly-for-a-user-on-a-team.html">Enable Access to an Assembly for a User on a Team</a>
<br>
<br>


<h1 class="primary" id="transition-best-practices">Transition Best Practices</h1>

In the Transition phase, use the following best practices:

* Ensure that the design is deployed in proper clouds
* Check the organization report for available capacity
* Keep Monitoring turned on
* When creating a new environment, DO NOT Use Debug Mode. This is strictly to be used by Ops for debugging purposes.
* Configure <a href="/user/howto/configure-ecv-check-url-on-oneops.html">ECV</a> to check the LB component
* If you don't want to accidentally override design values on pull, keep variables/attributes locked in the Transition phase.
* Review <a href="/developer/references/#default-monitor-thresholds">monitor thresholds</a>, to add or edit more alerts to be suitable for your application
* Add CEN to the individual monitors in your production environment
* <a href="/user/howto/ensure-that-alerts-for-production-environment-are-sent-to-noc.html">Enable NOC alerts</a> for your production environment
* Add your own <a href="/user/howto/add-cname.html">CNAME</a> to give to your customers
* Keep watch on your environment and compute usage. If an environment is not in use, <a href="/user/howto/delete-an-environment.html">disable the environment</a>.
* Tomcat Log Files: The location of log and access log should be `/log/apache-tomcat`.

>* The computes *can not* be resized once provisioned. So, if you change the size to be different from the design, lock the attribute.
* The volume "app" size by default, is 10G (in the case of Tomcat). If needed, adjust and lock the size.
* Don't rely on the storage in the volume. It is ephemeral and only remains until the compute is there. 
<br>
<br>


<h1 class="primary" id="use-operations-for-vm-tasks">Use Operations for VM Tasks</h1>

Use Operations for most of the tasks you need to perform on a VM.


* Create an additional user in the design other than the app for the development team
* View realized instances for your platforms
* View graphs for monitors on defined metrics and thresholds
* Perform single or bulk operations like restart/ start/ stop on Tomcats
<br>
<br>


<h1 class="primary" id="view-assembly-and-organization-consumption-with-reports">View Assembly and Organization Consumption with Reports</h1>

View assembly and organization consumption with reports:


* **Assembly report:** View a report of instances that are consumed by your assembly for all of your environments at /<ORGANIZATION>/assembly/<ASSEMBLY-NAME>/edit#reports
* **Organization report:** View a report of instances that are consumed by your organization across multiple clouds at /<ORGANIZATION>/organization#reports