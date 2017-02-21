---
layout: dev-doc
title: Cloud Offerings and Services API
---

The Cloud Offerings and Cloud Services APIs allow you to access a list of the different offerings and services of the 
configured clouds. 

Offerings includes information about DNS, storage and computes and others. Services includes information about NTP, 
mirrors, computes, load balancing, storage, filestores, logstreams, DNS and others
The data is available via

```
GET /cloud/offerings
GET /cloud/services
```

for the public name space.

It can be narrowed down to a specific organization named `ORG` with

```
/ORG/clouds/offerings
/ORG/clouds/services
```

or a cloud `CLOUD` within an organization

```
GET /ORG/clouds/offerings.json?ns_path=/ORG/_clouds/CLOUD
GET /ORG/clouds/services.json?ns_path=/ORG/_clouds/CLOUD
```

The results consists of  numerous specific attributes for the various offerings and services as well as cost. An example
for a compute offering is

```
compute: [
{
  ciId: 47034473,
  ciName: "xxxlarge",
  ciClassName: "cloud.Offering",
  impl: "oo::chef-11.4.0",
  nsPath: "/ORG/_clouds/labs-snv4/cloud.service.Openstack/snv4",
  ciGoid: "47134391-28934-47035473",
  comments: "",
  ciState: "default",
  lastAppliedRfcId: 0,
  createdBy: "oneops",
  updatedBy: "auser",
  created: 1455113490801,
  updated: 1476466478082,
  nsId: 47034391,
  ciAttributes: {
    criteria: "(ciClassName matches 'bom.[a-zA-Z0-9.]*.Compute' OR ciClassName=='bom.Compute') AND ciAttributes['size']=='3XL'",
    specification: "{}",
    description: "Average 3xlarge Linux vCPU cost per Hour",
    cost_rate: "1.23",
    cost_unit: "USD"
  },
attrProps: { }
}
```
