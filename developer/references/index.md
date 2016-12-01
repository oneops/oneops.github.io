---
layout: dev-doc
title: OneOps API Documentation
id: oneops-api-documentation
---

Note: all calls will use the api token - see [Get Auth Token](#account-profile):


- [Top Level](#top-level)
  - [GET list of manifest (transition) Lb components](#get-list-of-manifest-transition-lb-components)
  - [GET a list of bom (operations) Lb components](#get-a-list-of-bom-operations-lb-components)
  - [GET a list of bom Fqdn components](#get-a-list-of-bom-fqdn-components)
  - [GET a list of all bom Computes](#get-a-list-of-all-bom-computes)
  - [GET a list of all environments](#get-a-list-of-all-environments)
- [Account Profile](#account-profile)
  - [GET Auth Token](#get-auth-token)
  - [GET all organizations](#get-all-organizations)
- [Organization](#organization)
  - [GET clouds](#get-clouds)
  - [GET cloud by name](#get-cloud-by-name)
  - [POST cloud by name](#post-cloud-by-name)
  - [GET Supported locations](#get-supported-locations)
  - [GET Supported Services](#get-supported-services)
  - [GET Cloud Service By Name](#get-cloud-service-by-name)
  - [POST New Service](#post-new-service)
  - [PUT Update to Service](#put-update-to-service)
  - [GET Compute report](#get-compute-report)
- [Assembly](#assembly)
  - [GET List of assemblies for organization](#get-list-of-assemblies-for-organization)
  - [GET Assembly by name](#get-assembly-by-name)
  - [POST A new assembly](#post-a-new-assembly)
  - [PUT an updated assembly](#put-an-updated-assembly)
  - [DELETE An assembly by name](#delete-an-assembly-by-name)
- [Platform](#platform)
  - [GET List of platforms](#get-list-of-platforms)
  - [GET Platform by name](#get-platform-by-name)
  - [POST a platform](#post-a-platform)
  - [PUT and updated design component attribute](#put-and-updated-design-component-attribute)
  - [PUT an updated design platform variable](#put-an-updated-design-platform-variable)
  - [DELETE a Platform](#delete-a-platform)
- [Environment](#environment)
  - [GET Transition by name](#get-transition-by-name)
  - [POST a new transition](#post-a-new-transition)
  - [PUT Cloud configuration for environment platform](#put-cloud-configuration-for-environment-platform)
- [Commit & Deploy](#commit-and-deploy)
  - [POST a commit to an environment](#post-a-commit-to-an-environment)
  - [GET Latest release id](#get-latest-release-id)
  - [POST A new deploy](#post-a-new-deploy)
  - [GET deployment status](#get-deployment-status)
  - [PUT Disable environment](#put-disable-environment)
  - [GET Pull Latest](#get-pull-latest)
  - [DELETE Environment](#delete-environment)
  - [POST Discard a release by ID](#post-discard-a-release-by-id)
- [Operations](#operations)
  - [PUT Replace Component Instance](#put-replace-component-instance)
  - [GET All available actions](#get-all-available-actions)
  - [GET Instance ids](#get-instance-ids)
  - [POST Request to execute action](#post-request-to-execute-action)
  - [GET status](#get-status)
  - [GET Computes for a Platform](#get-computes-for-a-platform)

# Top Level

## GET list of manifest (transition) Lb components
`https://<your-server>/services/organization/search.json?ns_path=/services&class_name=manifest.Lb`

## GET a list of bom (operations) Lb components
`https://<your-server>/services/organization/search.json?ns_path=/services&class_name=bom.Lb`

## GET a list of bom Fqdn components
`https://<your-server>/services/organization/search.json?ns_path=/services&class_name=bom.Fqdn`

## GET a list of all bom Computes
`https://<your-server>/services/organization/search.json?ns_path=/services&class_name=bom.Compute`

## GET a Compute by IP Address
 `https://<your-server>/<ORGANIZATION-NAME>/organization/search.json?source=es&query=ciAttributes.private_ip:<IP>`

## GET a list of all environments
`https://<your-server>/services/organization/search.json?ns_path=/services&package=manifest&class_name=manifest.Environment`
`Add: attr_name=<name>  and attr_value=<value>`

# Account Profile

## GET Auth Token via UI in your browswer (not via curl or api)

`https://<your-server>/account/profile#authentication`

Sample curl using the auth-token:

```sh
curl -i -u <AUTH-TOKEN>: -H "Content-Type:application/json" -H "Accept:application/json" -X GET -v https://<your-server>/account/organizations
```

# Organization

## GET all organizations
`https://<your-server>/account/organizations`

## GET clouds
`https://<your-server>/<ORGANIZATION-NAME>/clouds`

## GET cloud by name
`https://<your-server>/<ORGANIZATION-NAME>/clouds/<CLOUD-NAME>`

## POST cloud by name
`https://<your-server>/<ORGANIZATION-NAME>/clouds`

## GET Supported locations
`https://<your-server>/<ORGANIZATION-NAME>/clouds/locations.json`

## GET Supported Services
`https://<your-server>/<ORGANIZATION-NAME>/clouds/<CLOUD-NAME>/services/available.json`

## GET Cloud Service By Name
`https://<your-server>/<ORGANIZATION-NAME>/clouds/<CLOUD-NAME>/services/<SERVICE-NAME>`

## POST New Service
First fetch the new service body content using:

`https://<your-server>/<ORGANIZATION-NAME>/clouds/<CLOUD-NAME>/services/<SERVICE-NAME>/new.json`

Then:

~~~
POST: https://<your-server>/<ORGANIZATION-NAME>/clouds/<CLOUD-NAME>/services/
Body: Take the response from new call and update all necessary fields/attributes to create body
~~~

## PUT Update to Service

First fetch the new service body content using:

`https://<your-server>/<ORGANIZATION-NAME>/clouds/<CLOUD-NAME>/services/<SERVICE-NAME>`

Then:

~~~
PUT https://<your-server>/<ORGANIZATION-NAME>/clouds/<CLOUD-NAME>/services/<SERVICE-NAME>
Body: Take the response from get call and update all necessary fields/attributes to create body
~~~

## GET Compute report

`https://<your-server>/<ORGANIZATION-NAME>/reports/compute.json`

The response has two major sections:

- One describes metrics metadata.
- One has the data itself in hierarchal form.
- A third describes scope. Because scope is different for different reports, if you want to run the report by cloud rather than by assembly, you pass extra param in the url. For example:

`https://<your-server>/<ORGANIZATION-NAME>/reports/compute.json?grouping=cloud`

# Assembly

## GET List of assemblies for organization

`https://<your-server>/<ORGANIZATION-NAME>/assemblies`

## GET Assembly by name

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>`

## POST A new assembly

`https://<your-server>/<ORGANIZATION-NAME>/assemblies`

~~~
Body:

{
    "cms_ci": {
        "comments": "<COMMENT>",
        "ciName": "<ASSEMBL-NAME>",
        "ciAttributes": {
            "description": "<description>",
            "owner": "<EMAIL ADDRESS>"
        }
    }
}
~~~

## PUT an updated assembly

TBD

## DELETE An assembly by name

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>`

# Platform

## GET List of platforms

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/design/platforms`

## GET Platform by name

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/design/platforms/<PLATFORM-NAME>`

## POST a platform

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/design/platforms`

~~~
Body:
{
    "cms_dj_ci": {
        "comments": "<my comment>",
        "ciName": "<PLATFORM-NAME>",
        "ciAttributes": {
            "source": "<PACKSOURCE>",
            "description": "<description>",
            "major_version": "<MAJOR-VERSION>",
            "pack": "<pack>",
            "version": "<VERSION>"
        }
    }
}
~~~

## PUT and updated design component attribute

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/design/platforms/<PLATFORM-NAME>/components`


~~~
Body:

{
    "cms_dj_ci": {
        "createdBy": "klohia",
        "execOrder": 0,
        "ciName": "user-app",
        "ciId": "12752422",
        "nsPath": "/testing/testassm/_design/t1",
        "ciClassName": "catalog.User",
        "ciAttributes": {
            "username": "app",
            "system_account": "true",
            "description": "App User",
            "login_shell": "/bin/bash",
            "home_directory": "/app",
            "authorized_keys": "<SSH-KEY>",
            "ulimit": "16384",
            "sudoer": "true"
        }
    }
}
~~~

> Attributes of component are very specific to each component.

## PUT an updated design platform variable

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/design/platforms/<PLATFORM-NAME>/variables`


~~~
Body:
{
    "cms_dj_ci": {
        "comments": "",
        "impl": "oo::chef-11.4.0",
        "createdBy": "klohia",
        "execOrder": 0,
        "ciName": "appVersion",
        "ciId": "12752469",
        "nsPath": "/testing/testassm/_design/t1",
        "ciGoid": "12752412-1873-12752469",
        "ciClassName": "catalog.Localvar",
        "ciAttributes": {
            "value": "1.0"
        }
    }
}
~~~

## DELETE a Platform

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/design/platforms/<PLATFORM-NAME>`

# Environment

## GET Transition by name

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/<ENVIRONMENT-NAME>`

## POST a new transition

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/<ENVIRONMENT-NAME>`

~~~
Body:

{
    "clouds": {"<CLOUD_CID>":"<Priority>",
            "<CLOUD_CID>":"<Priority>"
    },
    "platform_availability": {
        "<PLATFORM-DESIGN-ID>": "redundant"
    },
    "cms_ci": {
        "ciName": "<ENVIRONMENT-NAME>",
        "nsPath": "<ORGANIZATION-NAME>/<ASSEMBLY-NAME>",
        "ciAttributes": {
            "autorepair": "true",
            "monitoring": "true",
            "description": "<DESCRIPTION>",
            "dpmtdelay": "60",
            "subdomain": "<ENVIRONMENT-NAME>.<ASSEMBLY-NAME>.<ORGANIZATION-NAME>",
            "codpmt": "false",
            "debug": "false",
            "global_dns": "true",
            "autoscale": "true",
            "availability": "redundant/single"
        }
    }
}
~~~

## PUT Cloud configuration for environment platform

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/<ENVIRONMENT-NAME>/platforms/<PLATFORM_NAME>/cloud_configuration`

~~~
Body:

{
  "cloud_id": "<cloud ci-id>",
  "attributes": {
    "adminstatus": "active OR inactive OR offline",
    "priority": "1 OR 2",
    "pct_scale": ...,
    "dpmt_order": ...
  }
}
~~~

All attributes are optional (pass in only what needs to be updated).

__Attributes:__

- _adminstatus_ - administrative status of cloud
- _priority_ - cloud priority (primary => `1` or secondary => `2`)
- *pct_scale* - scale percentage
- *dpmt_order* - deployment order


# Commit and Deploy

## POST a commit to an environment

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/<ENVIRONMENT-NAME>/commit`

## GET Latest release id

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/<ENVIRONMENT-NAME>/releases/bom`

## Previous Path [DEPRECATED]

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/<ENVIRONMENT-NAME>/releases/latest`

## POST A new deploy

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/<ENVIRONMENT-NAME>/deployments/`

~~~
Body:

{
    "cms_deployment": {
        "releaseId": "<LATEST-RELEASE-BOM>",
        "nsPath": "/<ORGANIZATION-NAME>/<ASSEMBLY-NAME>/<ENVIRONMENT-NAME>/bom"
    }
}
~~~

## GET deployment status

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/<ENVIRONMENT-NAME>/deployments/<DEPLOYMENT_ID>/status`

## PUT Disable environment

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/<ENVIRONMENT-NAME>/disable`

## GET Pull Latest

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/<ENVIRONMENT-NAME>/pull`

## DELETE Environment

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/<ENVIRONMENT-NAME>`

## POST Discard a release by ID

https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/<ENVIRONMENT-NAME>/releases/<RELEASE-ID>/discard

# Operations

## PUT Replace Component Instance

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/operations/environments/<ENV_NAME>/platforms/<PLATFORM-NAME>/components/<COMPONENT-NAME>/instances/<INSTANCE_ID>/state`

~~~
Body:

{ "state" : "replace" }
~~~

## GET All available actions

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/operations/environments/<ENV_NAME>/platforms/<PLATFORM-NAME>/components/<COMPONENT-NAME>/actions`

## GET Instance ids

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/operations/environments/<ENV_NAME>/platforms/<PLATFORM-NAME>/components/<COMPONENT-NAME>/instances?instances_state=all`

## POST Request to execute action

`https://<your-server>/<ORGANIZATION-NAME>/operations/procedures`

~~~
Body:

{
    "cms_procedure": {
        "procedureCiId": "0",
        "procedureName": "<Name>",
        "ciId": "<Component_id>",
        "procedureState": "active",
        "definition": "{"flow":[{"targetIds":["<Instance_id>"],"relationName":"base.RealizedAs","direction":"from","actions":[{"actionName":"<Action-name>","stepNumber":1,"isCritical":true}]}],"name":"<Action-name>"}"
    }
}
~~~

For example:

~~~
{
    "cms_procedure": {
        "procedureCiId": "0",
        "procedureName": "reboot",
        "ciId": "9277281",
        "procedureState": "active"
        "definition": "{"flow":[{"targetIds":["9277720"],"relationName":"base.RealizedAs","direction":"from","actions":[{"actionName":"reboot","stepNumber":1,"isCritical":true}]}],"name":"reboot"}"
    }
}
~~~

## GET status

Use procedure_id from previous call:

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<Assembly-name>/operations/environments/<ENV-NAME>/platforms/<Platform-name>/procedures/<Procedure-id>`

## GET Computes for a Platform

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/operations/environments/<ENV-NAME>/platforms/<PLATFORM-NAME>/components/compute/instances.json?instances_state=all`



<h1 class="primary" id="assemblies-api">Assemblies API</h1>

To `add`, `update` and `delete` assemblies in your organization, use the Assemblies API.

# List

Get a list of assemblies in your organization.

~~~
GET /assemblies
~~~

## Response

~~~
<%= headers 200 %> <%= json(:assembly) { |h| [h] } %>
~~~

# Create

Create a new assembly in your organization. The authenticated user must be a user in the organization.

~~~
POST /assemblies
~~~

## Input

~~~bash
cms_ci : Required Hash

ciName
: _Required_ **String**

comments
: _Optional_ **String**

ciAttributes
: _Required_ **Hash**

    description
    : _Optional_ **String**
~~~

~~~ruby
<%= json %5C :cms_ci => { :ciName => "myassembly", :comments => "These are your comments", :ciAttributes => { :description => "This is your assembly description" } } %>
~~~


## Response

~~~
<%= headers 200 %> <%= json :assembly %>
~~~

# Get

Retrieve the requested assembly.

~~~
GET /assemblies/:assembly
~~~

## Response

~~~
<%= headers 200 %> <%= json :assembly %>
~~~

# Update

Update the specified assembly with new data.

~~~
PUT /assemblies/:assembly
~~~

## Input

~~~
cms_ci : Required Hash

comments
: _Optional_ **String**

ciAttributes
: _Required_ **Hash**

    description
    : _Optional_ **String**
~~~

~~~ruby
<%= json %5C :cms_ci => { :comments => "These are your comments", :ciAttributes => { :description => "This is your assembly description" } } %>
~~~


## Response

~~~
<%= headers 200 %> <%= json :assembly %>
~~~

# Delete

Remove the specified assembly.

~~~
DELETE /assemblies/:assembly
~~~

## Response

~~~
<%= headers 200 %>
~~~

# Clone

To create a clone with another name, copy the assembly.

[comment]: # (Todo)

# Catalog

Save the assembly into the organization catalog.

[comment]: # (__TODO add steps here?)



<h1 class="primary" id="ci-notification-format">CI Notification Format</h1>

OneOps broadcasts the CI notifications to all configured sinks as well as to email recipients configured.
A CI notification json has a format like below sample:


~~~javascript
{
    ts: "2016-01-01T15:51:42.183",
    cmsId: 1234,
    cloudName: "abc",
    severity: "warning",
    type: "ci",
    source: "ops",
    subject: "webapp-tomcat-compute-ssh:SSH Up is violated.",
    text: "compute-11031075-2 is in unhealthy state; Starting repair",
    nsPath: "/OneOps/webapp/prod/bom/tomcat/1",
    payload: {
        total: "6",
        oldState: "good",
        unhealthy: "5",
        eventName: "webapp-tomcat-compute-ssh",
        className: "bom.main.2.Compute",
        threshold: "SSH Up",
        state: "open",
        metrics: "{"avg":{"up":0.0}}",
        ciName: "compute-11031075-2",
        good: "1",
        newState: "unhealthy",
        status: "new"
    },
    timestamp: 1460404258633,
    environmentProfileName: "PROD",
    adminStatus: "active",
    manifestCiId: 58108355
}
~~~

The new state of a ci (payload.newState) could be any of below :

- notify
- unhealthy
- underutilized
- overutilized
- good

An "open" type of notification event (payload.state) is created in case a threshold/monitor is violated for a CI (component instance) - for example if cpu idle goes below 20


A matching close event notification is created in case a "reset" condition is met for a CI. - For example if cpu idle moves to  above 60


A unique notification can be identified by this combination - {cmsId + payload.eventName + payload.threshold}. Here the cmsId identifies a unique ci object - like one particular compute (or tomcat) instance. The ( payload.eventName + payload.threshold) identifies the monitor-threshold that got violated.


There will be a matching "close" notification event with the same {ciId + payload.eventName + payload.threshold} but with payload.state = 'close'

Here is the sample for a matching close event for above open event:

~~~javascript
{
    ts: "2016-01-01T19:51:42.183",
    cmsId: 1234,
    cloudName: "abc",
    severity: "info",
    type: "ci",
    source: "ops",
    subject: "webapp-tomcat-compute-ssh:SSH Up recovered.",
    text: "compute-11031075-2 is in good state.",
    nsPath: "/OneOps/webapp/prod/bom/tomcat/1",
    payload: {
        total: "6",
        oldState: "unhealthy",
        unhealthy: "1",
        eventName: "webapp-tomcat-compute-ssh",
        className: "bom.main.2.Compute",
        threshold: "SSH Up",
        state: "close",
        metrics: "{"avg":{"up":100.0}}",
        ciName: "compute-11031075-2",
        good: "5",
        newState: "good",
        status: "new"
    },
    timestamp: 146040231302183,
    environmentProfileName: "PROD",
    adminStatus: "active",
    manifestCiId: 2345
}
~~~



<h1 class="primary" id="component-list">Component List</h1>

Look [here](https://github.com/oneops/circuit-oneops-1/tree/master/components/cookbooks) for available components.



<h1 class="primary" id="default-monitor-thresholds">Default Monitor Thresholds</h1>

The tables below list all of the default monitor thresholds implicitly added in all environments. As an app owner, you should review and update these thresholds to what is best suited for your app.


| Monitor Type      | Resource Name           | Threshold Definition                                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                                                                                                           | Action
|------------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
|CPU Load Heartbeat|compute                 |                                                                                                                                                                                                                                                                               | If collection for any of the load metrics (load1, load5 or load15) is missed, raises a missing heartbeat pulse event which makes the compute instance unhealthy.                                                                                                                                                                                                           | Unhealthy notification is raised. Repair action is executed on the affected instance. |
|CPU Load          |compute                 |![Threshold CPU load](/assets/docs/local/images/threshold-cpu-load.png)                                                                                                                                                                                                                             | `'HighLoad' => threshold('1m','avg','load5',trigger('>=',30,3,1),reset('<',15,1,1))`  Compute is heavily loaded if the load5 average value goes above 30. Then set the trigger.                                                                                                                                                                                                         | Notify only. No action. |
|CPU Usage         |compute                 |![Threshold CPU usage](/assets/docs/local/images/threshold-cpu-usage.png)                                                                                                                                                                                                                            | `'HighCpuUsage' =>threshold('5m','avg','CpuIdle',trigger('<=',10,15,2),reset('>',15,15,1))` Compute utilization is very high if cpuidle goes below 10% which means that more than 90% is utilized.                                                                                                                                                                                                | Notify only. No action. |
|Socket Connection |compute                 |                                                                                                                                                                                                                                                                               | No default threshold is defined. Monitor can be set up with different State: `TIME_OUT`, `ESTABLISHED`, `CLOSE_WAIT`, etc.                                                                                                                                                                                                                                                                     | |
|Network           |compute                 |                                                                                                                                                                                                                                                                               | No default threshold is defined.                                                                                                                                                                                                                                                                                                                                                         | |
|Filesystem root   |volume /                |![Low disk inode](/assets/docs/local/images/threshold-low-disk-inode.png) ![Low disk space](/assets/docs/local/images/threshold-low-disk-space.png)                                                                                                                                                              | `'LowDiskSpace' => threshold('1m', 'avg', 'space_used', trigger('>=', 90, 5, 2), reset('<', 85, 5, 1))`  Compute has low disk space when space_used is more than 90% at root disk. `/'LowDiskInode' => threshold('1m', 'avg', 'inode_used', trigger('>=', 90, 5, 2), reset('<', 85, 5, 1))` Compute has low inode when inode_used is more than 90% at root disk /                      | Notify only. No action.
|System messages   |file /var/log/messages  |![critical link offline](/assets/docs/local/images/threshold-critical-link-offline.png) ![Critical disk not responding](/assets/docs/local/images/threshold-critical-disk-not-responding.png) ![Critical SCSI log exception](/assets/docs/local/images/threshold-critical-scsi-log-exception.png) ![Critical corrupt label](/assets/docs/local/images/threshold-critical-corrupt-label.png)  |                                                                                                                                                                                                                                                                                                                                                                                       | |
|Memory            |Compute                 |![High mem use](/assets/docs/local/images/threshold-high-mem-use.png)                                                                                                                                                                                                                         |`'HighMemUse' => threshold('1m', 'avg', 'free', trigger('<', 50000, 5, 4), reset('>', 80000, 5, 4))` Compute is using too much memory when available (free) memory goes lower than 50MB.                                                                                                                                                                                               | Notify only. No action. |
|Process cron      |crond process           |![Crond process high](/assets/docs/local/images/threshold-crond-process-high.png) ![Crond process low](/assets/docs/local/images/threshold-crond-process-low.png)                                                                                                                                                       | `'CrondProcessLow' => threshold('1m', 'avg', 'count', trigger('<', 1, 1, 1), reset('>=', 1, 1, 1))` crond process should be running. If not, the process count goes below 1 and raises the alert. `'CrondProcessHigh' => threshold('1m', 'avg', 'count', trigger('>=', 200, 1, 1), reset('<', 200, 1, 1))` crond process count should not be above 200. If found, raises the alert.          | Notify only. No action. |
| Process sendmail  |postfix process         |![Postfix process high](/assets/docs/local/images/threshold-postfix-process-high.png) ![Postfix process low](/assets/docs/local/images/threshold-postfix-process-low.png)                                                                                                                                                   | `'PostfixProcessLow' => threshold('1m', 'avg', 'count', trigger('<', 1, 1, 1), reset('>=', 1, 1, 1))` postfix process should be running. If not, the process count goes below 1 and raises the alert. `'PostfixProcessHigh' => threshold('1m', 'avg', 'count', trigger('>=', 200, 1, 1), reset('<', 200, 1, 1))` postfix process count should not be above 200. If found, raised the alert.  | Notify only. No action. |
|Process SSH Daemon|sshd process            |![SSHD process high](/assets/docs/local/images/threshold-sshd-process-high.png) ![SSHD process low](/assets/docs/local/images/threshold-sshd-process-low.png)                                                                                                                                                         | `'SshdProcessLow' => threshold('1m', 'avg', 'count', trigger('<', 1, 1, 1), reset('>=', 1, 1, 1))` sshd process should be running. If not, the process count goes below 1 and raises the alert. `'SshdProcessHigh' => threshold('1m', 'avg', 'count', trigger('>=', 200, 1, 1), reset('<', 200, 1, 1))` sshd process count should not be above 200. If found raises the alert.             | Notify only. No action. |

# Volume /app Thresholds

| Monitor Type     | Resource Name           | Threshold Definition                                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                                                                                                           | Action
|------------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
|Filesystem /app   |volume                  |![Low disk inode critical](/assets/docs/local/images/threshold-low-disk-inode-critical.png) ![Low disk space critical](/assets/docs/local/images/threshold-low-disk-space-critical.png)                                                                                                                                            | `'LowDiskSpaceCritical' => threshold('1m', 'avg', 'space_used', trigger('>=', 90, 5, 2), reset('<', 85, 5, 1))` Volume has low disk space when space_used is more than 90% at root disk /app `'LowDiskInodeCritical' => threshold('1m', 'avg', 'inode_used',trigger('>=', 90, 5, 2), reset('<', 85, 5, 1)),` Volume has low inode space when inode_used is more than 90% at root disk /app| Notify only. No action.|


# Tomcat Thresholds

| Monitor Type      | Resource Name           | Threshold Definition                                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                                                                                                           | Action |
|-------------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
|Tomcat process     |tomcat-daemon           |![Tomcat daemon process down](/assets/docs/local/images/threshold-tomcat-daemon-process-down.png)                                                                                                                                                                                                           | `'TomcatDaemonProcessDown' => threshold('1m', 'avg', 'up', trigger('<=', 98, 1, 1), reset('>', 95, 1, 1))` tomcat daemon process is considered down if its process availability goes below 90%. Even though the threshold says below 90%, in reality the process no longer exists. **Do not change the average values to 100%.**                                                     | Notify only. No action. |
|JvmInfo            |tomcat                  |![High mem use](/assets/docs/local/images/threshold-high-mem-use.png)                                                                                                                                                                                                                         | `'HighMemUse' => threshold('1m','avg', 'percentUsed',trigger('>=',90,5,1),reset('<',85,5,1))` Note: Values are calculated from http://localhost:#{port}/manager/status?XML=true                                                                                                                                                                                                         | |
|ThreadInfo         |tomcat                  |![High thread use](/assets/docs/local/images/threshold-high-thread-use.png)                                                                                                                                                                                                                      | `'HighThreadUse' => threshold('5m','avg','percentBusy',trigger('>=',90,5,1),reset('<',85,5,1))` Note: Values are calculated from http://localhost:#{port}/manager/status?XML=true                                                                                                                                                                                                       | |
|RequestInfo        |tomcat                  |                                                                                                                                                                                                                                                                               | No Threshold defined. Note: Values are calculated from http://localhost:#{port}/manager/status?XML=true                                                                                                                                                                                                                                                                                | |
|Log                |tomcat                  |![Critical log exception](/assets/docs/local/images/threshold-critical-log-exception.png)                                                                                                                                                                                                               | `'CriticalLogException' => threshold('15m', 'avg', 'logtomcat_criticals', trigger('>=', 1, 15, 1), reset('<', 1, 15, 1))`                                                                                                                                                                                                                                                               | |
|AppVersion         |tomcat                  |                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                       | |


# Artifact App – App-Specific Thresholds

| Monitor Type      | Resource Name            | Threshold Definition                                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                                                                                                           | Action
|--------------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------
|Exception Monitoring|artifact Level          | * Log Path: * /log/logmon/logmon.log * Pattern to look for: Exception * thresholds: 1 (Alert on every occurrence ) * Severity: Major * If more than 2 Critical                                                                                                              | `'CriticalLogException' => threshold('15m', 'avg', 'logtomcat_criticals', trigger('>=', 1, 15, 1), reset('<', 1, 15, 1)), 'logfile' => '/log/apache-tomcat/catalina.out', 'warningpattern' => 'WARNING', 'criticalpattern' => 'CRITICAL'` The three parameters above define the file to be monitored for warning and critical patterns.                                                     | Notify only. No action.

# Apache Server Thresholds

| Monitor Type      | Resource Name            | Threshold Definition                                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                                                                                                           | Action
|--------------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------
|ServerStatus        |Apache                  |![High sys cpu](/assets/docs/local/images/threshold-high-sys-cpu.png) ![High user cpu](/assets/docs/local/images/threshold-high-user-cpu.png)                                                                                                                                                                 | `'TooBusy' => threshold('5m','avg','idle_workers',trigger('<',5,5,5),reset('>',5,5,5)), 'HighUserCpu' => threshold('5m','avg','cpu_user',trigger('>',60,5,1),reset('<',60,5,1)), 'HighSysCpu' => threshold('5m','avg','cpu_sys',trigger('>',30,5,1),reset('<',30,5,1))` Note: All the metrics are calculated using http://localhost:#{port}/server-status                               | Notify only. No action.

# ActiveMQ  Thresholds

| Monitor Type      | Resource Name            | Threshold Definition                                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                                                                                                           | Action
|--------------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
|BrokerStatus        |activemq                |![High backlog](/assets/docs/local/images/threshold-high-backlog.png)                                                                                                                                                                                                                         | Note: Metrics values are calculated using queues: `<protocol>://<host>:<port>/admin/xml/queues.jsp topics: <protocol>://<host>:<port>/admin/xml/topics.jsp` | |
|Log                 |activemq                |![Critical exceptions](/assets/docs/local/images/threshold-critical-exceptions.png)                                                                                                                                                                                                                  | `'CriticalLogException' => threshold('15m', 'avg', 'logtomcat_criticals', trigger('>=', 1, 15, 1), reset('<', 1, 15, 1)), 'logfile' => '/opt/apache-activemq-5.5.1/data/wrapper.log', 'warningpattern' => 'OutOfMemory', 'criticalpattern' => 'OutOfMemory'` The three parameters above define the file to be monitored for warning and critical patterns. Log Path: `/log/logmon/logmon.log` Pattern to look for: Exception. | Notify only. No action. |
|Memory              |activemq                |No threshold defined                                                                                                                                                                                                                                                           | `'protocol' => 'http', 'port' => '8161', 'path' => '/admin/index.jsp?printable=true'` Note: Metrics values are calculated using `<protocol>://<host>:<port>/admin/index.jsp?printable=true`                                                                                                                                                                                               | Notify only. No action. |
|Process             |Daemon                  |![Active mq daemon process down](/assets/docs/local/images/threshold-active-mq-daemon-process-down.png)                                                                                                                                                                                                        | `'ActiveMQDaemonProcessDown' => threshold('1m', 'avg', 'up', trigger('<=', 98, 1, 1), reset('>', 95, 1, 1))`                                                                                                                                                                                                                                                                            | Notify only. No action. |



<h1 class="primary" id="design-attachments-api">Design Attachments API</h1>

Use the Attachment API to store additional configuration entities for any component. You can use attachments to add configuration files, certificates, custom scripts etc. Attachment content can be specified directly in the request or from a specified remote URL location.

Each attachment has a `:runs_on` attribute that allows for optional callback executions *before* or *after* component lifecycle events of **add, update** and **delete.** In addition, you can specify the on-demand option in the `runs_on` list which makes the attachment with the associated execution command to be available as an on-demand component action to be invoked at any time during operations.

# List

Get a list of attachments for a design component.

~~~http
GET /assemblies/:assembly/design/platforms/:platform/components/:component/attachments
~~~

## Response

~~~ruby
<%= headers 200 %> <%= json(:design_attachment) { |h| [h] } %>
~~~

# Create

Add a new attachment to this design component.

~~~http
POST /assemblies/:assembly/design/platforms/:platform/components/:component/attachments
~~~

## Restrictions

Attachment names must be unique within a given platform namespace.

## Input

~~~bash
cms_dj_ci : Required Hash

ciName
: _Required_ **String**

comments
: _Optional_ **String**

ciAttributes
: _Required_ **Hash**

    content
    : _Optional_ **String** - Attachment content.

    source
    : _Optional_ **String** - Source URL where the content to be downloaded is located. The location must be a file, binary or text.

    headers
    : _Optional_ **Hash** - Optional HTTP headers to be used to force MIME types or for other customizations to the download request.

    basic_auth_user
    : _Optional_ **String** - Username for protected URL location.

    basic_auth_password
    : _Optional_ **String** - Password for protected URL location.

    checksum
    : _Optional_ **String** - Checksum to compare after the download.

    path
    : _Optional_ **String** - Destination filename path where the content should be saved or the remote source URL content should be downloaded to.

    exec_cmd
    : _Optional_ **String** - Command-line to execute after the content is saved.

    runs_on
    : _Optional_ **String** - Comma-separated list of lifecycle events for automatic callbacks.
    The list can contain only the following events: **before-add, after-add, before-update, after-update, before-delete, after-delete, on-demand.**

    priority
    : _Optional_ **String** - Specify priority of executions in case there are multiple attachments in the same callback event.
~~~


~~~ruby
<%= json %5C :cms_dj_ci => { :ciName => "myattachment", :comments => "These are your comments", :ciAttributes => { "content" => "Some file or script content here", "source" => "", "headers" => "", "basic_auth_user" => "", "basic_auth_password" => "", "checksum" => "", "path" => "/tmp/myattachment.sh",

"exec_cmd" => "/tmp/myattachment.sh", "run_on" => "before-add,on-demand", "priority" => "1" } } %>
~~~


## Response

~~~ruby
<%= headers 200 %> <%= json :design_attachment %>
~~~

# Get

Retrieve the requested attachment in this design component.

~~~http
GET /assemblies/:assembly/design/platforms/:platform/components/:component/attachments/:attachment
~~~

## Response

~~~ruby
<%= headers 200 %> <%= json :design_attachment %>
~~~

# Update

Update the specified attachment in this design component with new data.

~~~http
PUT /assemblies/:assembly/design/platforms/:platform/components/:component/attachments/:attachment
~~~

## Input

~~~bash
cms_dj_ci : Required Hash


comments
: _Optional_ **String**

ciAttributes
: _Required_ **Hash**

    content
    : _Optional_ **String** - Attachment content.

    source
    : _Optional_ **String** - Source URL where the content to be downloaded is located. The location must be a file, binary or text.

    headers
    : _Optional_ **Hash** - Optional HTTP headers to be used to force MIME types or for other customizations to the download request.

    basic_auth_user
    : _Optional_ **String** - Username for protected URL location.

    basic_auth_password
    : _Optional_ **String** - Password for protected URL location.

    checksum
    : _Optional_ **String** - Checksum to compare after the download.

    path
    : _Optional_ **String** - Destination filename path where the content should be saved or the remote source URL content should be downloaded to.

    exec_cmd
    : _Optional_ **String** - Command-line to execute after the content is saved.

    runs_on
    : _Optional_ **String** - Comma-separated list of lifecycle events for automatic callbacks.
    The list can contain only the following events: **before-add, after-add, before-update, after-update, before-delete, after-delete, on-demand.**

    priority
    : _Optional_ **String** - Specify priority of executions in case there are multiple attachments in the same callback event.
~~~

~~~ruby
<%= json %5C :cms_dj_ci => { :comments => "These are your comments", :ciAttributes => { "content" => "Some file or script content here", "source" => "", "headers" => "", "basic_auth_user" => "", "basic_auth_password" => "", "checksum" => "", "path" => "/tmp/myattachment.sh",

"exec_cmd" => "/tmp/myattachment.sh", "run_on" => "before-add,on-demand", "priority" => "1" } } %>
~~~

## Response

~~~ruby
<%= headers 200 %> <%= json :design_attachment %>
~~~

# Delete

Remove the specified attachment in this design component.

~~~http
DELETE /assemblies/:assembly/design/platforms/:platform/components/:component/attachments/:attachment
~~~

## Response

~~~ruby
<%= headers 200 %>
~~~



<h1 class="primary" id="metadata">Metadata</h1>

Metadata files model components and have several parts:

* `base/required` Attributes (name, desc, etc)
* `grouping` Sub-groups of attributes CMS models (For an advanced example, see the token metadata.)
* `attributes` Defaults, format: UI metadata
* `recipes` Default actions. Add, update and delete are assumed and do not need to be added. Actions can also be added using the UI as on-demand attachments.

The following is an example of a metadata file:

~~~ruby
# 1: base/required attributes
name             "Apache"
description      "Installs/Configures Apache"
long_description IO.read(File.join(File.dirname(__FILE__), 'README.md'))
version          "0.1"
maintainer       "Kloopz, Inc."
maintainer_email "dev@kloopz.com"
license          "Copyright OneOps, All rights reserved."

# 2: grouping - sub-groups of attributes cms models
# usually dont need to change this. Its for when different types 
# can have different attributes. See the token metadata for example.
grouping 'default',
  :access => "global",
  :packages => [ 'base', .. 'manifest', 'bom' ]

# 3: attributes
attribute 'install_type',
  :description => "Installation Type",
  :required => "required",
  :default => "repository",
  :format => {
    :category => '1.Source',
    :help => 'Select the type of installation - standard OS '+
             'repository package or custom build from source code',
    :order => 1,
    :form => { 'field' => 'select', 
               'options_for_select' => [['Repository package','repository'],
                                        ['Build from source','build']] }
  }
...

# 4. recipes - default actions. 
# Actions can also be added via UI in design mode as on-demand Attachments. 
recipe "status", "Apache Status"
recipe "start", "Start Apache"
recipe "stop", "Stop Apache"
recipe "restart", "Restart Apache"
recipe "repair", "Repair Apache"
~~~

# See Also

* <a href="/developer/key-concepts/#component">Component</a>
* <a href="/developer/key-concepts/#recipes">Recipes</a>
* <a href="/developer/references/#design-attachments-api">Attachments</a>



<h1 class="primary" id="monitor">Monitor</h1>

An optional monitor within a Pack Component Resource contains:

* Name, desc, optional source
* Charting defaults: For example, min/max y-axis, unit
* Nagios command name and command line to execute: `cmd` and `cmd_line`
* Metrics: name, unit, desc, dstype
* Thresholds: When to trigger events

For additional information about dstype, see [Metric Data Source Type][] in the OneOps Admin Documentation.

The following is a sample monitor definition from Tomcat's pack:

~~~ruby
resource "tomcat",
  :cookbook => "tomcat",
  :design => true,
  :requires => { "constraint" => "1..1" },
  :monitors => {     
      'JvmInfo' =>  { :description => 'JvmInfo',
                  :source => '',
                  :chart => {'min'=>0, 'unit'=>''},
                  :cmd => 'check_tomcat_jvm',
                  :cmd_line => '/opt/nagios/libexec/check_tomcat.rb JvmInfo',
                  :metrics =>  {
                    'max'   => metric( :unit => 'B', :description => 'Max Allowed', :dstype => 'GAUGE'),
                    'free'   => metric( :unit => 'B', :description => 'Free', :dstype => 'GAUGE'),
                    'total'   => metric( :unit => 'B', :description => 'Allocated', :dstype => 'GAUGE'),
                    'percentUsed'  => metric( :unit => 'Percent', :description => 'Percent Memory Used', :dstype => 'GAUGE'),
                  },
                  :thresholds => {
                     'HighMemUse' => threshold('5m','avg','percentUsed',trigger('>',98,15,1),reset('<',98,5,1)),
                  }
                },
       ...
~~~

[Metric Data Source Type]:/admin/references/#metric-data-source-type



<h1 class="primary" id="pack-policy">Pack Policy</h1>

Policies can also be specified as part of the pack definition.
This enables policy evaluation on all CIs (components, attachments, platform variables, monitors) under the platform for a given pack. The violated policies can then be fixed to avoid issues further down the application lifecycle. 

The policy definitions are added to the pack ".rb" file in a given circuit. Following are few examples of pack based policies.

~~~ruby
policy "env-profile",
       :description => 'custom pack policy for env-profile',
       :query => 'ciClassName:manifest.Environment AND _missing_:ciAttributes.profile'
       :docUrl => '<document url link for the policy>'`
       :mode => 'passive'

policy "compute-ostype",
       :description => 'custom pack policy for compute-ostype',
       :query => 'ciClassName:(catalog.*Compute manifest.*Compute bom.*Compute) AND NOT ciAttributes.ostype:("centos-6.5" OR "centos-6.6" OR "redhat-6.5" OR "redhat-6.6" OR "default-cloud")'
       :docUrl => '<document url link for the policy>'`
       :mode => 'active'

policy "env-automation",
       :description => 'custom pack policy for env-automation',
       :query => 'ciClassName:manifest.Environment AND ciAttributes.profile:(PROD EBF STAGING) AND NOT (ciAttributes.autorepair:true AND ciAttributes.autoreplace:true)'
       :docUrl => '<document url link for the policy>'`
       :mode => 'passive'
~~~ 
 
Brief description about each field in the policy definition is as follows
 
* **Description:**  Brief description about the Policy.
* **Query:** Elastic Search query to identify candidate objects that violate the policy.
* **Doc URL:** URL to the document about the policy details.
* **Mode:** Can be Active/Passive.
     * **Active:** Prohibits users from saving objects under violation. For example: A policy can be defined to allow only a few compute images like centos-6.6, redhat 6.5. Any attempt to save a compute component with an image value other than these two, fails.
     * **Passive:** All components and instances that violate such policies are marked with a failed policy status with the reason for the specific policy failures.



<h1 class="primary" id="packs-api">Packs API</h1>

# List

Get a list of packs available for this organization.

~~~http
GET /packs
~~~

## Response

~~~ruby
<%= headers 200 %> <%= json(:packs) { |h| [h] } %>
~~~



<h1 class="primary" id="platform-management-pack">Platform Management Pack</h1>

A platform is added to the system by creating a Platform Management Pack (`Pack`) file and loading it into the [CMS](/developer/howto/#cms-sync). A Pack is a Ruby DSL file that models a platform. It exists in the packer directory structure.

The file contains:

* Component Resources: Named resources with the type (cookbook attribute) and the [Component Class](/developer/key-concepts/#component-class) name
* [Relationships/dependencies](/developer/key-concepts/#relationships) with flexing/scaling attributes
* [Metrics/Thresholds](/developer/references/#monitor) (optional) 

A Pack can extend another Pack, which keeps the model clean and manageable. Packs are versioned to match a set of recipes.

For instructions on how to add a new platform, refer to [Add a Platform](/developer/howto/#add-a-platform).



<h1 class="primary" id="platforms">Platforms</h1>

Each Platform has a set of Components (optional and required) that are predefined by a Platform template.

Each Component has configuration attributes that are specific to the type of Component. Components, like Platforms, have interdependencies that are used during the generation of a deployment plan. On the Platform detail page, there is a diagram and a list of Components. The list is grouped by Component type with an indication of the number of Components within each group.

After all changes are committed, you can move on to Transition to realize/promote your design/changes to the new/existing environment.



<h1 class="primary" id="relations">Relations</h1>

The following model diagrams describe the relationships for Design, Transition, and Operations in the OneOps UI. [Relationships](/developer/key-concepts/#relationships) also have attributes, some of which are used to scale.

# Design

In the Design aspect, we model the base application:

* No environmental 
* No operational components

![Design relations](/assets/docs/local/images/design-relations.png)

# Transition

In the Transition aspect, we model two additional objects:

* **IaaS components:** Can be load balancers (`haproxy`) or DNS (`djbdns`). Can also use provider-based ones like `route-53`, `dyndns`, `elb`, etc.
* **Monitors:** Use to customize monitors for each environment

![Transition relations](/assets/docs/local/images/transition-relations.png)

# Operations

In the Operations aspect, we create `bom` components for the manifest components with relation to the Binding (cloud provider).

![Operations relations](/assets/docs/local/images/operations-relations.png)



<h1 class="primary" id="relationships">Relationships</h1>

Relationships have attributes like other objects modeled in OneOps. We are working on adding pages to visualize and explain all of them.

There are two primary relationships used in packs:

* `depends_on` Sets the order of deployment and dependency tree for escalation
* `managed_via` How to know where to connect for management. In most cases, this is a compute, but in some, it is a cluster or ring.

Relationships are modeled like [components](/developer/key-concepts/#component), with the same directory structure. Relationships also have attributes.

For more detail regarding relations for Design, Transition and Operations, see [Relations](/developer/references/#relations).

List of relationships:

~~~
authenticates
binds_to
composed_of
controlled_by
depends_on
deployed_to
escorted_by
forwards_to
links_to
managed_via
manages
provides
realized_as
realized_in
requires
secured_by
serviced_by
supplied_by
utilizes
value_for
watched_by
~~~

