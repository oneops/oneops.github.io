---
layout: user-doc
title: Load Balancer Component
---

The _lb_ [component](./components.html) is of core importance and part of most platforms since it
defines the load balancing of request being received by the platform.

You can configure the compute component as part of your platform in design phase and specific to an environment in the
transition phase.

Once your assembly is deployed in an environment you can access the [computes in operation](../operation/compute.html).

## Configuration

Besides the global configuration available for any component such as _Name_, you can configure the
following attributes:

_LB Service Type_: Defines type of LoadBalancing service to use. Two options available are described below:
* _lb_: for physical loadbalancer service. eg: Netcalers.
* _slb_: for Software loadbalancer service. eg: Octavia(openstack). <br>

_Listeners_: Defines the ports that the LB will be listing on for incoming traffic.<br>

_LB Method_: Defines the protocol used to forward traffic to balance the load to the servers. Two methods are available described below:
* _Least Connection Method_: The default method, when a virtual server is configured to use the least connection, it selects
the service with the fewest active connections.
* _Round Robin Method_: This method continuously rotates a list of services that are attached to it. When the virtual server receives a request, it
assigns the connection to the first service in the list, and then moves that service to the bottom of the list.

_Session Persistence_: Directs the LB to send related requests to the same server. Additional attributes described below if
session persistence is checked.  Persistence Type, Cookie Domain and LB Custom Attributes are shown when Session Persistence
is checked.<br>
* _Persistence type_: Defines the method the LB will provide the persistence. Two available are described below.v
    * SourceIP: The LB caches the IP of the server to send related traffic to.<br>
    * Cookieinsert: The LB caches a cookie for a period of time which directs the traffic.<br>

* _Cookie Domain_: Defines the domain where the cookie is valid.<br>

_Create Cloud vips_: Vips at the cloud level are available by default. This checkbox will allow the vips to be avaialble to
all cloud regions in the data center.<br>

_Enable LB Group_: Used to enable the LB group for persistence across all listeners.<br>

_LB Custom Attributes_: Used to define and utilize additional attributes avaialble on the LB's. Examples of this are:
Enable Access Logs and Configure Connection Draining. (ex. Key/Value - ConnectionDraining/Enabled: True,Timeout: 300).
Please check for the available attributes for your lb's.<br>

_Required Availability Zone_: Used to horizontally scale physical LB Devices.<br>

_Connection Limit_: Applicable only for software loadbalancers. The maximum number of connections per second allowed for the vip. Valid values: a positive integer or -1 for unlimited (default). <br>

### Compute Related Attributes
_ECV_: Used to define service monitors. (ex. 80 => GET /someservice/node). Port-available monitors are used for tcp(s) and udp.<br>
Note: Currently ECV checks will use TCP on Azure. If your app server (ex. Tomcat) is listeneing on port HTTP 8443 and runs out
of listeners, the lb will think the server is still listening and direct traffic to it. Please be aware.<br>

_ServiceGroup Custom Attrs_: Used to define additional attributes available to the Server Groups defined. Examples of these are:
servicegroupname, servicetype, maxclient, cipheader. Please check for the available attributes for your lb's.<br>

