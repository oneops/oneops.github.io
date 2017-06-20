---
layout: user-doc
title: Using Octavia SLB
id: setup-software-loadbalancer
---

Octavia is an open source scalable software load balancer.

Octavia SLB is Cost-effective and scalable software load balancer that increases our operational efficiency and reduces impacting outages as seen in physical NetScalers.Octavia SLB can be used in place of physical Netscalers in those clouds wherever this service is available.
This guide explains newly added cloud services, attributes in lb-component in pack design and other specific configuration options in OneOps to use SLB while deploying OneOps packs to Octavia enabled OpenStack clouds.

Octavia and barbican service needs to be enabled in the openstack cloud to use this feature.
 
 ## lb_service_type Attribute in lb component
 
 Octavia SLB offers both Non-secure and Secure Options while Loadbalancing for applications.
 The configuration options available earlier in lb-component which is applicable to physical netscalar still holds good for SLB too.
 There two new attributes added for SLB component, they are
 
 * lb service type - This is an drop down menu with two values "lb" and "slb" . Please select "lb" for physical netscalers and "slb" for octavia software LB.
 * connection limit - This connection limit attribute is applicable only for software loadbalancer.  
    This field takes a number which is the maximum number of connections per second allowed for the vip.
    Valid values: a positive integer or -1 for unlimited (default).
    
    ![lb-component](/assets/docs/local/images/slb.png)
 
 
#SLB listener options available:
 
 Octavia SLB offers all three types of LB connections as available in Physical Netscalars.
 Listener configurations for each type is explained below,
 ### Non-secure Load balancer
 
 This is unencrypted non-secure LB connections which uses http.
 Listener configuration should look like
 ```
    http <external/front-end port> http <compute-level/backend port>
    
    eg : http 80 http 8080
 ```
 
 ### Non-terminated HTTPS load balancer 
  
  This type of connection allows end to end ssl encryption which uses https.
  
  ```  
     https <external/front-end port> https <compute-level/backend port>
       
     eg: https 443 https 8443
  ```
  Fill up the certificate component referring here [ssl-certificate-component](http://oneops.com/user/design/ssl-certificate-component)
  Certificate is copied to the backend servers and certificate verification is done at the backend.
 
 #### Terminated HTTPS loadbalancer
  
  This type of connection allows ssl encryption between client and the loadbalancer. 
  Connectivity from lb to backend servers is unencrypted.
  
  ```         
    terminated_https <external/front-end port> http <compute-level/backend port>
   
     eg: terminated_https 443 http 8080
  ```
  
  Fill up the lb-certificate component referring here [ssl-certificate-component](http://oneops.com/user/design/ssl-certificate-component)
  Certificate is copied to the load balancer and certificate verification is done at the loadbalancer.
  
  Terminated HTTPS loadbalancer needs barbican(mentioned above) service in the openstack cloud and barbican should be configured as a cloud service in OO organisation.
  Certificate details entered in lb-certificate component are converted to barbican secret and containers for octavia loadbalancer to use with TLS_Termination option.
 
 ##Important:
 Users should not toggle the LB service Type option in the lb component after the initial deployment. Changing the values from "lb" to "slb" or vice versa will cause deployment errors and inconsistent state.
 Octavia service is only available in OpenStack clouds.
