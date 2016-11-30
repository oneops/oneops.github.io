---
layout: user-doc
title: Propagation
id: "propagation"
---

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
   
