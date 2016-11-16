---
layout: user-doc
title: Take a Node out of Traffic (ECV Disable)
id: take-node-out-of-traffic-ecv-disable
---

In general, the LB (load balancer) determines the health of an individual instance (back-end server) by monitoring a health URL that is configured for the app. If the health URL is an http monitor and it returns an HTTP 200 OK response, then the LB considers the instance to be healthy and traffic gets routed to the instance. Otherwise, no traffic goes to this instance. The standard ECV check in Tomcat is "/" which needs to be changed as prescribed in <a href="/documentation/user/how-to/configure-ecv-check-url-on-oneops.html">Configure ECV Check URL on OneOpsa</a>. (See the diagram below.)

# Solution

![ECV check](/assets/docs/local/images/ecv-check.png)


## Details


1. Add the *On-Demand* attachment ecv-enable to Tomcat or the artifact.
2. The on-demand file type is any custom file action that is available as an action on the corresponding operations page of the instance.
3. When you add an attachment, select **On Demand** for Run on Event.
4. Copy the contents on the Execute Command section as appropriate.
5. Similarly add the corresponding **On-Demand** attachment, ecvDisable.
6. If it is necessary to disable the ECV, select Tomcat from Operations and select **disableECV.**
7. To enable ECV and traffic, enable Tomcat.

    ![ECV disable toncatup](/assets/docs/local/images/ecv-disable-tomcatup.png)

8. To remotely debug, there is a debug action in Operations by default. To start the Tomcat in debug mode, select **debug**.

    ![ECV disable debug tomcat](/assets/docs/local/images/ecv-disable-debug-tomcat.png)

9. The default jpda port is 8000. To open the ports, refer to <a href="/documentation/user/how-to/add-delete-security-group.html">Add or Delete a Security Group to Open or Close an Additional Port</a>.
10. If you are using eclipse, conf. looks like this:

    ![ECV disable eclipse debug conf](/assets/docs/local/images/ecv-disable-eclipse-debug-conf.png)
