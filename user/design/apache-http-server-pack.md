---
layout: wmt/docs
side-navigation: user-navigation.html
title: Apache HTTP Server Pack
---

# Apache HTTP Server Pack

<img src="/assets/img/logos/integrations/apache.png" align="right"/>

The _Apache_ [pack](./packs.html) provides the user with the ability to use the
[Apache HTTP Server](http://httpd.apache.org/) as a platform in their assembly.

The main components involved are:

- the [website component](./website-component.html) for the actual content
- the [Apache HTTP Server component](./apache-http-server-component.html) for the server configuration
- the [compute component](./compute-component.html)

## Examples

### Simple Website

Running a website with Apache HTTP server can be implemented with a few simple steps:

1. Create a platform with the _apache_ pack.
2. Inspect and optionally configure the _apache_ component of the platform.
3. Configure the _website_ component
4. Use the _attachments_ tab:
  - Provide a _Source URL_ that points at an archive file with the contents of your website
  - The _Destination Path_ determines the temporary location of the archive.
  - Use _Execute Command_ to configure how to extract the archive file.
  - The content is downloaded with root ownership and 600 permissions.
  - Add commands to ensure the webserver user (typically `apache`) can access the files with `chown` and `chmod`.
5 Configure the _Run on Events_ to determine, when the content should be downloaded. Recommended values are After Add,
After Replace, After Update, On Demand.
6.Commit the design changes and proceed with [deployment as usual](./components.html).

Apache HTTP Server does not automatically restart if you make additional changes & deployments after the initial
deployment. Ensure to restart the webserver in operations to load any content changes.

### Enable HTTPS


There are two options for configuring HTTPS. Options 1 terminates SSL at the load balancer and the traffic is only
encrypted to the load balancer and is clear text from load balancer to web server.

The more advanced Option 2 encrypts the traffic all the way to the web server and its configuration follows below.

General tips about SSL certificate usage can be found in the
[certificate component documentation](./certificate-component.html).

After configuring the Apache HTTP Server platform you need to obtain a valid certificate with the following
characteristics:

* Include Private Key: Enabled
* Include Root Chain: Enabled
* Chain Order: End-entity first
* Format: Base64 (OpenSSL)
* Password: create a password

1. Change the the _Listen Port_ on the _website_ component to 443 and enable _SSL_.
2. Turn _Enable TLSv1_ the configuration of the _apache_ component off and remove 80 from the _Listen Ports_.
3. Add the certificate details in design to use the same certificate for all environment, or in transition for each
environment separate as desired.
5. Add a _lb-certificate_ and _certificate_ component and configure the certificate.
6.Commit the design changes and proceed with [deployment as usual](./components.html).
