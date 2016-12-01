---
layout: user-doc
title: Naming Conventions
---

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
