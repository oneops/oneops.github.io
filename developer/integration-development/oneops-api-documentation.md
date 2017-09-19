---
layout: dev-doc
title: OneOps API Documentation
---

Note: all calls will use the api token - see [Get Auth Token](#account-profile):

- [Account Profile](#account-profile)
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

```
POST: https://<your-server>/<ORGANIZATION-NAME>/clouds/<CLOUD-NAME>/services/
Body: Take the response from new call and update all necessary fields/attributes to create body
```

## PUT Update to Service

First fetch the new service body content using:

`https://<your-server>/<ORGANIZATION-NAME>/clouds/<CLOUD-NAME>/services/<SERVICE-NAME>`

Then:

```
PUT https://<your-server>/<ORGANIZATION-NAME>/clouds/<CLOUD-NAME>/services/<SERVICE-NAME>
Body: Take the response from get call and update all necessary fields/attributes to create body
```

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

```
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
```

## DELETE An assembly by name

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>`

# Platform

## GET List of platforms

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/design/platforms`

## GET Platform by name

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/design/platforms/<PLATFORM-NAME>`

## POST a platform

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/design/platforms`

```
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
```

## PUT and updated design component attribute

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/design/platforms/<PLATFORM-NAME>/components`


```
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
```

> Attributes of component are very specific to each component.

## PUT an updated design platform variable

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/design/platforms/<PLATFORM-NAME>/variables`


```
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
```

## DELETE a Platform

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/design/platforms/<PLATFORM-NAME>`

# Environment

## GET Transition by name

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/environments/<ENVIRONMENT-NAME>`

## POST a new transition

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/environments/<ENVIRONMENT-NAME>`

```
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
```

## PUT Cloud configuration for environment platform

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/environments/<ENVIRONMENT-NAME>/platforms/<PLATFORM_NAME>/cloud_configuration`

Body:

```
{
  "cloud_id": "<cloud ci-id>",
  "attributes": {
    "adminstatus": "active OR inactive OR offline",
    "priority": "1 OR 2",
    "pct_scale": ...,
    "dpmt_order": ...
  }
}
```

All attributes are optional (pass in only what needs to be updated).

__Attributes:__

- _adminstatus_ - administrative status of cloud
- _priority_ - cloud priority (primary => `1` or secondary => `2`)
- *pct_scale* - scale percentage
- *dpmt_order* - deployment order


# Commit and Deploy

## POST a commit to an environment

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/environments/<ENVIRONMENT-NAME>/commit`

## GET Latest release id

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/environments/<ENVIRONMENT-NAME>/releases/bom`

## Previous Path [DEPRECATED]

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/environments/<ENVIRONMENT-NAME>/releases/latest`

## POST A new deploy

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/environments/<ENVIRONMENT-NAME>/deployments/`

Body:

```
{
    "cms_deployment": {
        "releaseId": "<LATEST-RELEASE-BOM>",
        "nsPath": "/<ORGANIZATION-NAME>/<ASSEMBLY-NAME>/<ENVIRONMENT-NAME>/bom"
    }
}
```

## GET deployment status

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/environments/<ENVIRONMENT-NAME>/deployments/<DEPLOYMENT_ID>/status`

## PUT Disable environment

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/environments/<ENVIRONMENT-NAME>/disable`


Body:

```
{ "platformCiIds" : ["<platformCiId>","<PlatformCiId>",...] }
```


## GET Pull Latest

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/environments/<ENVIRONMENT-NAME>/pull`

## DELETE Environment

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/environments/<ENVIRONMENT-NAME>`

## POST Discard a release by ID

https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/transition/environments/<ENVIRONMENT-NAME>/releases/<RELEASE-ID>/discard

# Operations

## PUT Replace Component Instance

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/operations/environments/<ENV_NAME>/platforms/<PLATFORM-NAME>/components/<COMPONENT-NAME>/instances/<INSTANCE_ID>/state`


Body:

```
{ "state" : "replace" }
```

## GET All available actions

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/operations/environments/<ENV_NAME>/platforms/<PLATFORM-NAME>/components/<COMPONENT-NAME>/actions`

## GET Instance ids

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/operations/environments/<ENV_NAME>/platforms/<PLATFORM-NAME>/components/<COMPONENT-NAME>/instances?instances_state=all`

## POST Request to execute action

`https://<your-server>/<ORGANIZATION-NAME>/operations/procedures`


Body:

```
{
    "cms_procedure": {
        "procedureCiId": "0",
        "procedureName": "<Name>",
        "ciId": "<Component_id>",
        "procedureState": "active",
        "definition": "{"flow":[{"targetIds":["<Instance_id>"],"relationName":"base.RealizedAs","direction":"from","actions":[{"actionName":"<Action-name>","stepNumber":1,"isCritical":true}]}],"name":"<Action-name>"}"
    }
}
```

For example:

```
{
    "cms_procedure": {
        "procedureCiId": "0",
        "procedureName": "reboot",
        "ciId": "9277281",
        "procedureState": "active"
        "definition": "{"flow":[{"targetIds":["9277720"],"relationName":"base.RealizedAs","direction":"from","actions":[{"actionName":"reboot","stepNumber":1,"isCritical":true}]}],"name":"reboot"}"
    }
}
```

## GET status

Use procedure_id from previous call:

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<Assembly-name>/operations/environments/<ENV-NAME>/platforms/<Platform-name>/procedures/<Procedure-id>`

## GET Computes for a Platform

`https://<your-server>/<ORGANIZATION-NAME>/assemblies/<ASSEMBLY-NAME>/operations/environments/<ENV-NAME>/platforms/<PLATFORM-NAME>/components/compute/instances.json?instances_state=all`
