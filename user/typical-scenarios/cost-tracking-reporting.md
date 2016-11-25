---
layout: user-doc
title: Cost Tracking
id: "How Cost Tracking and Reporting Works"
---

Key concepts involved here are:

* **Offering**    An instance of `cloud.Offering` class.Has the per hr cost rate and matching criteria among other info.
                  `mgmt.cloud.Offering` instances are defined in the cloud template file. `cloud.Offering` instances can
                  be added either via API or directly from the UI. Offerings are associated with cloud services. For instance
                  an example of an offering associated with the Compute cloud service could be as follows.

              "large" => {
                            "description" => "Average large Linux  vCPU cost per Hour",
                            "cost_unit" => "USD",
                            "cost_rate" => "0.12",
                            "criteria"=> "(ciClassName:bom.*.[1 TO *].Compute OR ciClassName:bom.Compute) AND ciAttributes.size:L",
                            "specification" => "{}"
                          }


* **WorkOrder**   The deployment payload for a component.

* **Percolation** Is like reverse operation of indexing and then searching (using ElasticSearch). Instead of sending docs,
                  indexing them,and then running queries. One sends queries, registers them, and then sends docs and finds
                  out which queries match that doc. In this case the offerings are the queries registered as percolators
                  and CIs are the docs matched against the queries.


During the WorkOrder generation of a resource (for example when a Compute, Storage or DNS service is getting deployed), the resource CI doc is percolated against the registered offerings. This returns the matching offerings out of which the lowest cost offering is selected. The lowest cost offering is then added to the the WorkOrder document of the resource and then indexed in ElasticSearch. This is the mechanism by which the deployment time cost of a resource is tracked in the WorkOrder index .



# Cost Reporting

Cost Tracking results in the workorder index in ES having history with cost change events (workorders). However constructing a query/report for a specific time range aggregated over multiple cis will be too complex as it will require on-the-fly processing of the events timestamps against the requested range. To improve access to the cost information have a daily batch job that  uses the workorder index as input, read the cost changes from the workorder payload and construct a daily cost index with the exact cost for each CI for the given day. This will allow for simple ES queries that can retrieve the exact cost for a given time range using simple aggregations. The daily cost job is basically a ruby script which is based on the following cost calculation strategy.

~~~for a given ci
     if the first WO is add
        if the add is AFTER the target day, then cost is 0
        if the add is DURING the target day, then calculate cost
     if the first WO is update
        if the update is AFTER the target day, then lookup last known WO prior to target day and use that cost for the full day
        if the update is DURING the target day, then lookup last known WO prior to target day and calculate cost
     if the first WO is delete
        if the delete is AFTER the target day, then lookup last known WO prior to target day and use that cost for the full day
        if the delete is DURING the target day, then lookup last known WO prior to target day and calculate cost
  end
~~~  


A cost document in the daily cost index looks like this:

~~~ruby
    date: "2016-10-01T00:00:00Z",
    packName: "<pack-name>",
    unit: "USD",
    nsPath: "<path to app>",
    envProfile: "<env-profile>",
    cloud: "<cloud-name>",
    packVersion: "<version>",
    manifestId: <manifestId>,
    packSource: "oneops",
    ciClassName: "bom.Compute",
    organization: "<org-name>",
    serviceType: "compute",
    ts: "2016-10-02T09:00:28Z",
    servicensPath: "<path to app>",
    ciId: <ciId>,
    cost: 1.44
~~~                   

Using this data in the daily cost index the Cost Explorer widget on the UI gives the user a single barchart graph with a dynamic form fields allowing selection of daily time ranges and filters for: nspath, cloud, cloud service type (data query against new cost index in ES).
