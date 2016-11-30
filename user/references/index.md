---
layout: user-doc
title: References
---

# Table Of Contents

{% for p in site.pages %}
{% if p.url contains page.url %}
- [{{ p.title }}]({{ p.url }})
{% endif %}
{% endfor %}

# All In One Page Content

<h1 class="primary" id="Actions">Actions</h1>

Actions can be run ad hoc against Components by using the <a href="/user/references/#operations-reference">operations</a> page.

![Design tomcat 1](/assets/docs/local/images/design-tomcat1.png)
![Design tomcat 2](/assets/docs/local/images/design-tomcat2.png)

<br><br>

<h1 class="primary" id="attachments">Attachments</h1>

Attachments create files or perform custom actions with your code or command lines. An Attachment can be assigned to execute any combination of the following Component actions:


* Before or after
* Add, update, delete

![Attachment](/assets/docs/local/images/attachment.png)

In addition, you can use Attachments to <a href="/user/howto/set-up-a-custom-action.html">set up custom actions</a> against components that you can execute by using the operations page.

<br><br>

<h1 class="primary" id="auto-repair">Auto Repair</h1>

Use auto repair to automatically heal instances which are marked unhealthy due to some <a href="/user/references/#threshold-definitions">Threshold</a> violation or missing <a href="/user/references/#heartbeat-monitors">Heartbeat</a>. Notifications are sent when an auto repair action is executed. Event component defined in a platform has an associated repair action specific to the component. The recipe for healing a component differs from one another. There are different set of instructions executed for compute repair then for tomcat repair


For example: if a Tomcat instance has become unhealthy, then a Tomcat repair action is triggered which eventually tries to restart the Tomcat service. Similarly if a compute has become unhealthy, it first tries to SSH to the instance and checks whether the agent process is running. If for some reason the unhealthy compute instance not SSHable, then the next recipe tries to reboot the compute.


The user should understand the path of restoration for any unhealthy instance. It makes no sense to define unhealthy state for diskfull threshold definition. As reboot of compute or restart of some process is not going to fix the disk space issue. Such threshold should be created with notify-only state.

<br><br>

<h1 class="primary" id="auto-replace">Auto Replace</h1>

Use auto replace to automatically replace unhealthy instances. Notifications are sent to the application owners at an auto replace action event. Auto replacement of unhealthy instances is an extension to auto repair.

Unhealthy threshold conditions cause instances to become unhealthy. When an instance becomes unhealthy, an auto-repair action is triggered. Unhealthy instances are replaced based on the definition of auto replace for that instance.

Auto replacement can be enabled for a platform under the "Automation Status" section on the operations summary page of that platform.

Following two attributes dictate the replacement of the instance:


* **Max Unhealthy duration (mins):** Wait time before auto replacement is triggered. The default value is set to 9999999 which means ~19 years. (In other words, auto replace is turned off for the platform.)
* **Min # of repair attempts:** Auto replace is not initiated until the # of auto-repair attempts is greater than or equal to this value. The default value is 9999999. Auto replacement logic counts the number of unhealthy events for different instances (of different components). Be careful when selecting this value for the minimum # of repair attempts.

Without exception, all components are auto replaceable. Replacement of instances happens one at a time. Replacement of an unhealthy instance also generates a replace work order for its dependent instances. On completion of the replacement deployment, if other unhealthy instances become healthy, no further replacement is done. If other unhealthy instances remain unhealthy, the appropriate action is performed.

<br><br>

<h1 class="primary" id="auto-scale">Auto Scale</h1>

Use auto scale to automatically flex up or down computes based on some <a href="/user/references/#threshold-definitions">Threshold</a> violation. Notifications are sent to the application owners at an auto scale action event trigger and recovery. Auto scaling is used to balance the load on computes for maximum utilization. The decision to flex up or down is completely at the discretion of application owner.

The scaling configuration definition provides the details on the step size for flexing along with boundary limits

![Auto Scale](/assets/docs/local/images/auto-scale.png)


* **Min:** Minimum number of computes to be present in the platform at all times. Flexing down will stop once the minimum number of instances has reached its limit
* **Max:** Maximum number of computes that can be added to the platform. Flexing up will stop once the maximum number of instances has reached its limit
* **Step Up:** Number of instances to be added per cloud while flexing up for every over-utilized violation in one deployment
* **Step Down:** Number of instances to be removed per cloud while flexing down for every under-utilized violation in one deployment

<br><br>

<h1 class="primary" id="availability-modes">Availability Modes</h1>

Availability modes are set when you create an environment. They can be set globally or by Platform.

There are two availability modes:


* **Single:** Usually creates one compute per platform.
* **Redundant:** Adds load balancers, clusters, rings (whatever is the Best Practice for the Platform). Allows configuration of minimum and maximum scale options.

<br><br>

<h1 class="primary" id="available-platforms-list">Available Platforms List</h1>

| Type   |Platform|
|--------------------|-------------------------------------------------------------------|
| Web Application    | PHP (5.6.*) Rails (4.2.* with Ruby 2.2.*)Tomcat (7.*, with Java 8) |
| RDBMS              | MySQL (5.7.*),Postgres (9.4.*)                                    |
| Messaging          | Activemq (5.12.*)                                                 |
| NoSQL              | Cassandra (2.2.*) CouchBase (4.*)                                 |
| Search             | ElasticSearch (1.4)                                               |
| WebServer          | Apache (2.4.*)                                                    |
| Worker Application | Java (8.*),Ruby (2.2.*)                                           |
| Other              | Custom                                                            |

<br><br>

<h1 class="primary" id="azure-setup">Azure Setup</h1>

# How to Set Up Azure for OneOps

Roughly follow these directions <https://azure.microsoft.com/en-us/documentation/articles/resource-group-authenticate-service-principal/#authenticate-with-password---azure-cli>, but you don't need all of it.  This is the abridged version.

## Prerequisites

This assumes you have the Azure CLI installed and in ARM mode.

## Create an Application in Azure Active Directory

Create some application in Azure's Active Directory (AD).  This will be the client that OneOps uses to control Azure.  The name and URL values are not important, but should not clash with anything else in AD.

    azure ad app create --name "someapp" --password "dontusethis" \
      --home-page "https://someapp.azure.example.com" \
      --identifier-uris "https://someapp.azure.example.com/someapp"


This will return a few things:

```
  results
      info:    Executing command ad app create
      + Creating application someapp
      data:    AppId:                   {CLIENT_ID}
      data:    ObjectId:                abcd1234-bbbb-cccc-dddd-654321fedcba
      data:    DisplayName:             someapp
      data:    IdentifierUris:          0=https://someapp.azure.example.com/someapp <https://someapp.azure.example.com/cliapp>
      data:    ReplyUrls:
      data:    AvailableToOtherTenants:  False
      info:    ad app create command OK
```

App ID is your **client ID**.  The password you supplied is your **client secret**.  The application can be found in Azure's AD now.


## Create a Service Principal

Use the App ID (Client ID) to create a service principal.

```
azure ad sp create {CLIENT_ID}
```

Again, this returns the following:


```
  results
    info:    Executing command ad sp create
      + Creating service principal for application {CLIENT_ID}
      data:    Object Id:               {SP_ID}
      data:    Display Name:            someapp
      data:    Service Principal Names:
      data:                             {CLIENT_ID}
      data:                             https://someapp.azure.example.com/someapp <https://someapp.azure.example.com/someapp>
      info:    ad sp create command OK
```

This has added a key to the application in Azure AD.  You won't be able to see its value.

## Grant the Service Principal Permissions

Use the Object ID {SP_ID} returned above to assign the service principal **Contributor** permission to the scope of your subscription using your subscription ID (this may be too loose for real usage).

    azure role assignment create --objectId {SP_ID} -o Contributor -c /subscriptions/{YOUR_SUBSCRIPTION_ID}/


## Setup OneOps

You can now use the Client ID (App ID) and Client Secret (password) when configuring your Azure cloud.

<br><br>

<h1 class="primary" id="azure">Azure</h1>

Only Azure Resource Manager (ARM) is supported in OneOps. Currently only Linux workloads are supported. Windows will come at a later date.  

If you are **not** using Express Routes, everything is dynamically created apart from the 4 pieces of information needed to communicate with Azure; Tenant Id, Subscription Id, Client Id, and Client Secret.  

When you deploy into an Azure cloud, it will generate a Resource Group and Availability set in the first step of deployment. The resource group and availability set will be named: `{org}-{assembly}-{platform}-{env}-{region}`  

During creation of the computes the NIC's, OS disk, VNETs, Subnets, and public IPs will be created. If you are using the Express Route option, a public ip, VNET and Subnet will not be created, instead it will use what was configured when the cloud service was setup.  

After the compute is created the rest of the deployment is the same as it would be for the other cloud providers, except DNS, LB, and GDNS.  
 
## Azure DNS
 
OneOps creates DNS on Microsoft Azure as a resource by creating


* A **DNS Zone** resource in the Resource Group
* Followed by creating **DNS Record-Set(s)** in that zone

Record-Sets are assembled together in a single zone and will use any of two values (Type `A`,  Type `CNAME`).


* Record type **`A`** maps a hostname to an IP address.
* Record type **`CNAME`** creates an Alias of another domain name 

As a result the deployment has a DNS created with hostname mapping and domain alias if configured.

For more details on DNS see: <a href="/user/howto/add-cname-to-azure-dns.html">Azure DNS</a>  
 
## Load Balancer
 
OneOps creates and configures following resources in resource group to create a load balancer:


* **Front end IP configuration** - has public IP addresses for incoming network traffic.
* **Back end address pool** - has network interfaces (NICs) for the virtual machines to receive network traffic from the load balancer.
* **Load balancing rules** - has rules mapping a public port on the load balancer to port in the back end address pool. 
* **Inbound NAT rules** - has rules mapping a public port on the load balancer to a port for a specific virtual machine in the back end address pool.
* **Probes** - has health probes used to check availability of virtual machines instances in the back end address pool.
* **Servers** - your server machines (virtual machines) to entertain your requests

Before creating a load balancer following steps are performed on Microsoft Azure


* A *Virtual Network* is created with the specified subnet pool (for later use in backend IP pool) 
* A *Public IP* is devised that will be your internet facing IP for your servers
* An *Availability-Set* is generated and all your back-end servers belong to that availability-set
* And finally a *Load-Balancer* is set-up
* Next `n` Virtual Machines are provisioned to run your servers (where ‘n’ is the number of servers you want to Set-Up) and for each machine a NIC (network interface card) is built.
 
## Traffic Manager

Before a traffic manager is created on Azure, it requires 


* Deployed Azure cloud services, Azure websites, or other endpoints to production environment.
* A name decided for Traffic Manager domain.

This Traffic Manager domain name will also be used as a unique prefix to create the FQDN in the Azure public domain.

The result will be `<traffic-manager-domain-name>.trafficmanager.net`


* OneOps configured monitoring configuration.
* Traffic routing method `i.e Performance, Weighted or Priority`.

Based on above information OneOps creates Traffic Manager profile resource on Azure by:


1. Creating a Traffic Manager profile
2. Configuring traffic routing method settings
3. Configuring endpoints
4. Configuring monitoring settings

As a last step when the Traffic Manager Profile is created on Azure, OneOps points company's domain name DNS resource record to the created profile. Traffic Manager is live after this last step. 

`Note: Please do not make any changes to the Traffic Manager configurations from the portal.`

<br><br>

<h1 class="primary" id="catalina-out-in-tomcat">catalina.out in Tomcat</h1>

* System.out and System.err are both redirected to catalina.out by default, in the Tomcat container.
* If the Console appender is on the log4j, the Console appender redirects the System.out to catalina.out.
* The location of log files is determined by "LogFilesPath". (Check the value /assembly/ (design|transition)/<tomcatplatform>/tomcat.) By default, the location of catalina.out in the Tomcat pack, is/log/apache-tomcat. (It is not recommended to change this default.)

![Tomcat Logfiles Path](/assets/docs/local/images/tomcat-logfiles-path.png)


* The rotation/retention policy on the Tomcat catalina.out is controlled by logrotate. By default, the rotation is done on the basis of eight days or 2GB/VM.
* Do not rely on the log files on the compute because the compute storage is ephemeral.
* All application logging /stats should be done with the recommended logmon.

<br><br>

<h1 class="primary" id="cloud-providers">Cloud Providers</h1>

The following is a list of cloud providers that are supported by OneOps. 


* <a href="https://aws.amazon.com/" target="_blank">Amazon</a>
* <a href="https://azure.microsoft.com/en-us/services/cloud-services/" target="_blank">Azure</a>
* <a href="http://www.hpcloud.com/" target="_blank">HP</a>
* <a href="http://www.rackspace.com/cloud" target="_blank">Rackspace</a>

<br><br>

<h1 class="primary" id="dsl">DSL</h1>

DSL stands for Domain Specific Language. OneOps platform metadata and platform packs are managed via ruby-based DSL files, which are loaded into the system by the admin application, packer. Examples of domain-specific languages include HTML, Logo for children, Verilog, and Opscode Chef cookbooks.

<br><br>

<h1 class="primary" id="environment-profiles">Environment Profiles</h1>

Environment profiles are templates that are used to derive concrete environments based on pre-defined templates. Essentially, they are abstract environment definitions that allow environments to be categorized or classified by associating a given environment with an underlying environment profile. Typical examples of profiles are prod, QA, Test, etc.

To add a new Environment profiles, follow these steps:


1. Goto Account.
2. Select the **environments** tab.
3. Click **Add** button
4. Enter a unique name.
    * Letters, numbers, and dashes are allowed. No other characters are allowed.
    * If you use invalid characters, you are notified to match the requested format.
5. Fill in appropriate details for the enviornment template
6. Save


# Usage


* Environment profiles enable support, operations, and DevOps teams to easily categorize an environment to determine its support level and/or its critical problem resolution parameters (for example, SLA levels).
* Environment profiles are intended to streamline new environment creation by bootstrapping an environment with a set of default attribute values. In other words, environment profiles are abstract “best practice” environment definitions from which to derive real environments.
* A set of environment profiles is defined and managed at the organization level and realized in the assembly environment. OneOps does not allow the creation of a new environment without first providing a profile and it is important to select the best suited profile before creating a new environment. Profiles are available within the organization.

>For backward compatibility reasons, the profile association is not enforced:
>
* In situations where no profiles are defined for an organization 
* For environments that existed prior to when the initial environment profile was added to an Organization

# Environment Profile Association


* When appropriate, the concrete environment profile association tag is indicated by an explicit name label while navigating through environment, transition and operations pages. For example, this occurs in breadcrumb sections, page header sections and environment lists. 
* Environment profiles help DevOps teams to quickly categorize an environment with a given support level, based on the defined line-up of environment profiles.

<br><br>

<h1 class="primary" id="environment">Environment</h1>

An Environment is a combination of your assembly (base design) with operational attributes to match the associated business requirements, such as a new dev, qa, or prod Environment. Changes from the base design can be pulled on demand, via UI or API. Based on the availability modes, in the transition you could see platform components defined for that mode . For eg for redundant mode you would see load balancer. 


* **Mix Platform Availability Mode:** For example, a load-balanced web with a single db (with backups)
* **DNS Domain:** Use custom DNS providers (route53, rackspace, dyndns)
* **Automation:** Continuous Delivery

<br><br>

<h1 class="primary" id="graph-colors">Graph Colors</h1>

![Graph color green](/assets/docs/local/images/graph-color-green.png)

The icon above is the graphical representation for the health of an Environment. The color of the image represents the state of the component.


* Green: Health
* Orange: Notify
* Red: Unhealthy

TBD describe additional colors

<br><br>

<h1 class="primary" id="heartbeat-monitors">Heartbeat Monitors</h1>

The flag signifies collection of the metrics data for the given monitor. For any reason, if the data collection is stopped and this heartbeat flag is turned on then after the **heartbeat duration** time has passed, an unhealthy event is generated. This unhealthy event implies missing heartbeat for the given monitor. Heartbeat flag should ideally be turned ON only for one component monitor per platform.


* OS components: SSH Port monitor has the Heartbeat flag turned ON by default.
* Metrics collection: Collected every minute from all OneOps instances. Heartbeat is not affected by Sample Interval.
* Heartbeat duration:
    * Defines the wait time (in minutes) before marking an instance as unhealthy due to a missing heartbeat
    * Only setting that is available to users
* Missing heartbeat event: If the heartbeat is not received by the OneOps collection system and the flag is turned ON, a missing heartbeat event is generated.
* Bucket: Does not affect heartbeat

The unhealthy event caused by missing heartbeat lead to execution of repair action on the instances marked as unhealthy. The automatic healing of instances using <a href="/user/references/#auto-repair">Auto-Repair</a> helps in recovery of instances back to good state.

<br><br>

<h1 class="primary" id="load">Load</h1>

`Load` feature can be used to bulk update an assembly design using a YAML file defining global variables, platforms, local variables, components and attachments. The file can be loaded using any of the following:

* **UI** page for design load by uploading the yaml file or posting the yaml content directly in the text area. To get to the design load page in the UI go to the assembly design and click on the `Load` button in the header.
* **CLI** command `oneops design load`. The defaults path for the Design file is `./oneops-design.yaml`. For additional information see <a href="/admin/key-concepts/#cli">CLI</a> section.
* **API** call for design load. For additional information see <a href="/developer/references/#design-attachments-api">Design API</a> reference.


# Global Variables

Variables that can be used anywhere in the design and are referenced via `$OO_GLOBAL{...}` syntax. For additional information on global variables see <a href="/user/references/#variables">variables</a> reference page.

```
variables:
   MYGLOBALVAR1: "foo"
   MYGLOBALVAR2: "bar"
```

# Platforms

Definition of platforms to be loaded inside the assembly design.

> Multiple design files can be loaded with separate platform definitions in each. `Load` operation performs an upsert for each platform found in the file, but does not do any platform deletions. Deletes must be done directly via the UI/CLI/API per platform, not via load.

This section contains a list of all configuration options supported by a platform definition.

## pack

A string in the form of `<source>/<name>:<version>` declaring the pack to be used for this platform. For additional information on packs see <a href="/user/references/#platform-packs">platform packs</a>.

```
pack: oneops/tomcat:1
```

## major_version

Major version of the platform. For new design this will usually be set to 1 and increased when a platform version upgrade is needed.

```
major_version: '1'
```

## links

Links are used to describe dependencies between platforms. For additional information on links between platforms see <a href="/user/references/#platform-links">platform links</a>.

```
links:
   - db
   - mq
```

## platform variables

Platform variables that can be used inside the specified platform in design and are referenced via `$OO_LOCAL{...}` syntax. For additional information on platform variables see <a href="/user/references/#variables">variables</a> reference page.

```
variables:
  MYLOCALVAR1: "foo"
  MYLOCALVAR2: "bar"
```

# Components

Definition of components inside the platform.

> Only optional components or components with custom attribute values need to be specified in this section.  All other components declared in the packs are inherited using the default pack values.

`components` is a three-level structure with the 1st key a string in the format `<resource template>/<class name>` matching the corresponding entities in the pack. The 2nd key is the unique name of the component and the 3rd key is any of the attributes supported in the metadata for that component class. See the corresponding pack and component documentation for possible values.

```
artifact/Artifact:
  artifact:
    install_dir: /app/artifact
    version: '1.0'
```

# Attachments

'attachments' can be used in the same level as the component attributes to declare component attachments.

```
attachments:
  myscript:
    path: /tmp/myscript.sh
    exec_cmd: /tmp/myscript.sh
    priority: '1'
    content: |-
      #!/bin/sh
      echo "hello"
    run_on: before-add,before-replace,before-update
```

# Example yaml file

```
variables:
  MYGLOBALVAR1: "foo"
  MYGLOBALVAR2: "bar"
platforms:
  app:
    pack: oneops/tomcat:1
    major_version: '1'
    variables:
      MYLOCALVAR1: "foo"
      MYLOCALVAR2: "bar"
    links:
       - db
       - mq
    components:
      artifact/Artifact:
        artifact:
          install_dir: /app/artifact
          version: '1.0'
      tomcat/Tomcat:
        tomcat:
          attachments:
            myscript:
              path: /tmp/myscript.sh
              exec_cmd: /tmp/myscript.sh
              priority: '1'
              content: |-
                #!/bin/sh
                echo "hello"
              run_on: before-add,before-replace,before-update
```

<br><br>

<h1 class="primary" id="monitoring-reference">Monitoring</h1>

Circuit developers can expose monitors for components. For eg  os components exposes cpu utilization.The app owner has the flexibility to receive alerts on assembly health or simply ignore them.


* OneOps provides 2 views of monitor
* **Transition view**

1. Select the environment.
2. Select the platform.
3. Select the component.
4. Go to the **monitors** tab. All monitors supported for that component are listed on left side.
5. To view threshold definitions, select of any of these monitors (if any default ones are provided).

## Operation View

The operation view provides the trending of metric values along with the health as per the defined threshold. The graphs per monitor can be viewed by following this path:

1. In the Operate phase, select the environment.
2. Select the platform.
3. Select the component.
4. Select the instance to be monitored.
5. Go to the **monitors** tab.

<video width="720" height="480" preload="metadata" controls="" class="grovo-video">
    <source src="http://videos.grovo.com/walmart-oneops-operate-and-monitoring-0215_view-your-monitors_4668.webm?vpv=1" type="video/webm">
    Your browser does not implement HTML5 video.
</video>

* Every component can be monitored
* Out of the box, OneOps monitors the most important Components.
* Users can set up <a href="/user/references/#threshold-definitions">Threshold</a> on monitors to <a href="/user/references/#auto-scale">scale</a>, <a href="/user/references/#auto-repair">repair</a> or <a href="/user/howto/set-up-notifications.html">notify</a>.

There is a predefined set of default <a href="/user/references/#threshold-definitions">Thresholds</a> that is provided by OneOps which comes implicitly with any environment deployment. The app owner has the flexibility to add a new threshold definition that is suitable for the app or to edit an existing <a href="/user/references/#threshold-definitions">threshold</a>.

To review, add, or edit a threshold, go to your environment in the transition phase, select the specific component (e.g. compute/tomcat). Get more details on <a href="/developer/references/#default-monitor-thresholds">Default Monitor Thresholds</a>

<br><br>

<h1 class="primary" id="oneops-policy-management">OneOps Policy Management</h1>

Policy Management provides in-line technical debt to identify Cloud anti-patterns that are at risk to cause a service disruption. 

Policies are defined per organization. OneOps admin users have privileges to add, edit, and delete a policy. A policy definition includes:

* **Name:** Unique name of the Policy
* **Description:**  Brief description about the Policy
* **Query:** Elastic Search query to identify candidate objects that violate the policy
* **Execution Mode:**  
    * **Active:** Prohibits users from saving objects under violation. For example: A policy can be defined to allow only a few compute images like centos-6.6, redhat 6.5. Any attempt to save a compute component with an image value other than these two, fails.
    * **Passive:** All components and instances that violate such policies are marked with a failed policy status with the reason for the specific policy failures.
 
All components and instances that violate one or more policies are marked with a failed policy status along with the reason of the specific policy failures.

<br><br>

<h1 class="primary" id="oneops-urls">OneOps URLs</h1>

OneOps supports some tiny URLs for quick reference.

# Deployment

OneOps record:

* `/r/deployment/<deployment_id>`
* `/r/d/<deployment_id>`

Json response:

* `/l/deployment/<deployment_id>`
* `/l/d/<deployment_id>`

# Releases

OneOps record:

* `/r/release/<release_id>`
* `/r/r/<release_id>`

Json response:

* `/l/release/<release_id>`
* `/l/r/<release_id>`

# Procedure

OneOps record:

* `/r/procedure/<procedure_id>`
* `/r/p/<procedure_id>`

Json response:

* `/l/procedure/<procedure_id>`
* `/l/p/<procedure_id>`

# Instance

OneOps record:

* `/r/instances/<instance_id>`
* `/r/i/<instance_id>`

JSON response:

* `/l/ci/<instance_id>`

<br><br>

<h1 class="primary" id="operations-reference">Operations</h1>

Operations is where you <a href="/user/references/#monitoring-reference">monitor</a> and <a href="/user/references/#run-actions-in-operations">control</a> your environments. On the summary tab, you can drill down by using the right navigation bar.

[comment]: # (IMAGE-REQUIRED: ops-summary.png)

From the top level, with the graph tab, you can visualize the entire health of an environment. On the graph, you can drill down to a component instance. Each component instance has configuration, monitors, logs, and actions.

![Ops graph](/assets/docs/local/images/ops-graph.png)

<br><br>

<h1 class="primary" id="platform-links-reference">Platform Links</h1>

A User can set `Links To` dependencies between Platforms within an Assembly. These dependencies are used to generate a proper deployment sequence for the Platforms. For example, when you link a web Platform to a database Platform, the database deploys first. Then, when the web Platform comes up, the database Platform is ready.

<br><br>

<h1 class="primary" id="platform-packs">Platform Packs</h1>

A Platform pack is a logical grouping of manageable software. Examples of this are mySQL, Cassandra, Tomcat, and Nginx. OneOps maintains management metadata and code that deploys, configures, and manages the software.

>Add Image

# See Also

* <a href="/user/howto/add-a-platform-to-a-design.html">Add a Platform to a Design</a>
* <a href="/user/howto/create-an-environment.html">Create an Environment</a>

<br><br>

<h1 class="primary" id="ports-by-platform">Ports by Platform</h1>

| Pack Name                                     | Versions                  | Port Numbers   |
|-----------------------------------------------|---------------------------|----------------|
|<a href="http://cassandra.apache.org/" target="_blank">Cassandra**</a>    | 0.8<br/>1.2               |22,<br/>*1024-65535*
|<a href="http://www.couchbase.com/" target="_blank">Couchbase</a>         | 2.5.2<br/>2.2.0           |Secgroup already present<br/>22 22 tcp 0.0.0.0/0", "4369 4369 tcp 0.0.0.0/0", "8091 8092 tcp 0.0.0.0/0", "18091 18092 tcp 0.0.0.0/0", "11214 11215 tcp 0.0.0.0/0", "11209 11211 tcp 0.0.0.0/0", "21100 21299 tcp 0.0.0.0/0
|Squid                                          | 3.1.10                    |22, 80, 8080
|<a href="http://couchdb.apache.org/" target="_blank">CouchDB</a>          | 1.4.0                     |*22,5984,6984*
|<a href="http://www.postgresql.org/" target="_blank">Postgressql</a>      | 9.1                       |22,5432
|MySQL                                          | 5.1.7                     |*22 22 tcp 0.0.0.0/0*<br/>3306 3306 tcp 0.0.0.0/0
|Activemq                                       | 5.5.1<br/>5.9.1<br/>5.10.0|*22 22 tcp 0.0.0.0/0*<br/>61616 61617 tcp 0.0.0.0/0
|Rails                                          | | 22,80,443
|Java ws                                        | | *22,8080,8443*
|Ruby                                           | 1.8.7<br/>1.9.3<br/>2.0.0|*22*
|PHP                                            | | *22,80,443*
|Tomcat| 6.0 7.0 |22, 8080, 8443<br/> *Add 8009*
|Jboss |5.1.2<br/> 5.1.sterling |"22 22 tcp 0.0.0.0/0",<br/> "8080 8080 tcp 0.0.0.0/0",<br/> "8443 8443 tcp 0.0.0.0/0",<br/> "8009 8009 tcp 0.0.0.0/0"
|Apache |2.2.21 |*22,80,443*
|Elastic Search with LB | |22,9200-9400
|Custom | |22

<br><br>

<h1 class="primary" id="propagation">Propagation</h1>

Component propagation section is an advanced configuration option that generally should not be changed. However, in some **very rare cases** it may be used to fine tune the behavior of how configuration (and therefore deployment) changes to one component will trigger the deployment of its dependent components or its "master" components (the ones that depend on it).    This typically will be done with the purpose of optimizing deployment plan size and reducing the total deployment time.

> `Use extreme caution when editing propagation configuration. When used incorrectly it will result in broken deployments and/or unexpected application behaviour.`
 
## Example

Lets consider a tomcat platform for redundant environment. This platform has a load balancer - LB - component that depends on a Compute component (its "master"). Internally these components are tied by a "DependsOn" relation (LB depends on Compute) with a special propagation attribute (_propagate_to_) set to "both". That means that when there is any deployment change for one of these components (due to configuration changes or just a 'touch" update) the other component will be re-deployed as well regardless of whether it actually had any configuration changes. So if, for example, a user changes the size (size attribute) of Compute, then LB will get re-deployed together with Compute during next deployment even though its configuration has not technically changed. And vice versa: deployment of LB (due to some active changes) will be accompanied by re-deployment of compute regardless of whether its configuration is changed by user.

![Tomcat Logfiles Path](/assets/docs/local/images/propagate1.png)

**...**

![Tomcat Logfiles Path](/assets/docs/local/images/propagate2.png)


## Valid Values

Possible propagation (propagate_to) values are:
* **both** - changes to this component OR to component it depends on ("master") will cause deployment of BOTH components;
* **from** - changes to master component (the one this component depends on) will also cause deployment of this ("from") component regardless whether this component configuration has changed, but not the other way around;
* **to** - changes to this component (dependent)  will also cause deployment of master ("to") component, but not the other way around;
* **none** - no propagation of deployment in either direction, changes to either master or dependent components will not cause additional deployment of the other one.

**API**

API end-point to list "DependsOn" relations (including _propagate_to_ attribute) from a given component:

`GET https://<your-server>/<ORGANIZATION-NAME>/assemblies/ASSEMBLY/transition/ENVIRONMENT/platforms/PLATFORM/components/COMPONENT/depends_on.json`

<br><br>

<h1 class="primary" id="run-actions-in-operations">Run Actions in Operations</h1>

Actions can be run ad hoc against Components by using the <a href="/user/references/#operations-reference">operations</a> page.

![Design tomcat 1](/assets/docs/local/images/design-tomcat1.png)
![Design tomcat 2](/assets/docs/local/images/design-tomcat2.png)

<br><br>

<h1 class="primary" id="set-up-multiple-ports-protocols-load-balancer">Set Up Multiple Ports/Protocols in Load Balancer</h1>

There is a syntax to declare the virtual port/protocol and the instance port/protocols for the LB component. Each vport/vprotocol and iport/iprotocol combination is encapsulated in a single listener array as shown in the screenshot below. For a single listener, the syntax is `"vprotocol vport iprotocol iport"`. For multiple ports/protocols, it is possible to have multiple entries of listeners to be configured in the LB component.

![Multiple ports protocols](/assets/docs/local/images/multiple-ports-protocols.png)

There is also a map-based syntax for the ECV declaration. The ECV map entries have the key as the instance port and the URL as the health-check URL pattern, with the HTTP method for the service listening on that port. To ensure that monitors are created for all service groups, it is necessary to add ECV entries for the non-http services by using non-existing URL patterns.

[comment]: # (IMAGE-REQUIRED: set-up-multiple-ports.png)

<br><br>

<h1 class="primary" id="threshold-definitions">Threshold Definitions</h1>

A Threshold uses a metric and a set of conditions to change the state of a component. Depending on how the Thresholds are configured, OneOps Automation dispatches events, emails, auto scale, or auto repair.
A typical threshold definition looks like this:


![Threshold Low Disk Space](/assets/docs/local/images/threshold-low-disk-space.png)

* **Name:** Name the threshold so that it is easy to understand what happened. For example: HighThreadUse implies thread count going too high. This name is seen as part of the alert message and should be intuitive enough to understand what happened.
* **State:** Defines the state of the instance when the event is triggered. Depending on the state of instance, certain actions are performed implicitly by OneOps to recover it back to good health. The user can select a value to define the expected state of the threshold.
    * **Notify-Only:** Use this state when no automated action is expected. When trigger condition is met, the state of the instances is flipped to notify and an event is triggered. The even could be seen on environment operation view. 
    * **Unhealthy:** When a threshold is defined with an unhealthy state, the instances meeting trigger condition requires some repair action to fix their state. The repair action that is associated with the component is then executed. The automatic healing of instances using [Auto-Repair](#auto-repair) helps in recovery of instances back to good state.
    * **Over-utilized:** Use this state to define a threshold where the load is not sustainable and requires additional capacity to handle the traffic. To resolve the state back to healthy, all the clouds within the environment are scaled up as defined by the scaling configuration step-up count. After additional capacity is added, ideally the trigger should get reset as the load is now divided. If not, then auto scaling ([Auto-Scale](#auto-scale)) continues to add more capacity to the cluster until the maximum limit of scaling configuration is reached.
    * **Under-utilized:** This state signifies that the instance is not being used to its capacity and can be removed from the cluster. When this event is triggered, the instance is removed from all the clouds as per the defined scaling configuration step-down count. After additional capacity is removed, ideally the trigger gets reset as the load is now concise. If not, then flex down ([Auto-Scale](#auto-scale)) continues to remove more instances from the cluster until the minimum limit of scaling configuration is reached.
* **Bucket:** Time interval for metric collection
* **Stat:** Choose the stat from average, min, max, count, etc. for the metric collection. If average is selected, the value is average for the bucket size.
* **Metric:** Pre-defined set of metrics for the monitor
* **Trigger:** The condition when met that raises an event
    * **Operator:** >=, <=, >, <
    * **Value:**
    * **Duration:** Time window during which the collected metric value is evaluated
    * **Occurrences:** Number of repetitions for the trigger condition 
    
    For example: The above image trigger condition can be read as, raise a trigger event when spaceUsed metric average value within 1min bucket size is >= 90% and this condition is met at least 2 times within 5mins interval. 
     
* **Reset:** The condition when met that resets the triggered event
    * **Operator:** >=, <=, >, <
    * **Value:**
    * **Duration:** Time window during which the metric collected value is evaluated
    * **Occurrences:** Number of the repetitions required to reset the triggered condition
    
    For example: The attached image reset condition can be read as, reset the trigger when spaceUsed metric average value within 1min bucket size is <85% and this condition is met within 5mins at least once. 
    
* **Cool-off:** OneOps monitoring continuously gathers the metric data. When any trigger condition is met, a corresponding event is raised and notified. If the metric value is continuously satisfying the trigger condition, then the trigger is raised after the cool-off time. This is the time between 2 event notifications for the same threshold.
* **Heartbeat**: The flag signifies collection of the metrics data for the given monitor. For any reason, if the data collection is stopped and this heartbeat flag is turned on then after the **heartbeat duration** time has passed, an unhealthy event is generated. This unhealthy event implies missing heartbeat for the given monitor. More details on [Heartbeat Monitor](#heartbeat-monitors) 

>An alert is generated for any state trigger. If you are watching the assembly, then you should expect an email notifying the event, otherwise the event can be viewed in the operation environment. The event could also be alerted on different forums, depending upon the available notification setting; more details on notification settings <a href="/user/howto/set-up-notifications.html">Set Up Notifications</a>

<br><br>

<h1 class="primary" id="transition">Transition</h1>

After you create a new Environment, the Environment detail page (Manifest page) displays. This is where you see the realization of your Design into a given Environment that is based on its SLA requirements.

All configuration values for Platforms and Components are pulled from the Assembly Design. You may also see additional required/optional Components in some Platforms based on Env properties.

# Pull Design

Every time a new change is committed to the Assembly Design, you see the notification on the Transition summary/Manifest page. You have the option to promote those changes into this Manifest.

# Manifest Configuration

On the Manifest page, you can make configuration changes that are specific to your Environment. To mark these as permanent, click the lock icon next to the attribute value. Otherwise these get overwritten the next time you perform a Design pull.

<br><br>

<h1 class="primary" id="user-favorite">User Favorite</h1>

Favorite is a way to keep most used links readily available at the top menu bar (beside the search menu option).


* You can find the `favorite icon` on most list views or next to the name on summary pages. 
* When you click this icon, its color changes. A blue flag means that the option is added to your favorite list. 
* The flag has a toggle effect for adding or removing any entry from the favorite list.
* You can manage a cross-organization favorite list from the favorite tab in your profile view.
* The user is then routed to the profile view favorite tab. If an added item is no longer available, the list view is refreshed to reflect this. 
  

For example: if an environment was added to the favorite list and then later the same environment was deleted, no addition or deletion is reflected. When the user clicks a non-existing environment from the favorite list, the user is rerouted to the profile page favorite view.

<br><br>

<h1 class="primary" id="variables">Variables</h1>

Use Variables to externalize configuration attributes values which may change for an application at cloud , global( shared across platforms), or platform specific. You can create secure variables.

The three areas to store variables are:

* **Global:** A Global Variable is an Assembly-wide, named value. You can use Global Variables within a Component’s attribute values in this form: `$ONEOPS{variable-name}`.  OneOps then evaluates the actual attribute values during deployment.

* **Cloud:** Defined for a particular Cloud

* **Local:** Set in a particular Platform. For example you may have a Tomcat Platform and in it, set a variable like ‘version’ to ‘2.2.2’ for use in the platform

Variables are put to use when you have an attribute, as you saw above in the Tomcat example. For another example, in the Download Component, there is an attribute called Source URL. This defines where to go to download the file, for example a JDK to download. It is possible to hard code a value in this circumstance, but variables enable a more flexible approach.

Variable reference example syntax:

~~~bash
$OO_CLOUD{cloudvarname1}
$OO_GLOBAL{globalvarname2}
$OO_LOCAL{localvarname3}
~~~
