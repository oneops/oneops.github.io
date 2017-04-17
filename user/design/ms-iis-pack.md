---
layout: user-doc
title: Microsoft IIS Pack
---

The _iis_ [pack](./packs.html) is available as _Internet Information Services(IIS)_ in the _Web Application_ section
and provides the user with the ability to use [Microsoft IIS](https://www.iis.net/) as a platform in their assembly.

### Description
This pack enables flexible configurations for:
* .Net Frameworks
* Load Balancing
* Windows compute sizes defined in the OneOps instance you are using
* NuGet Packages allowing additional software to be installed on your server
* Website details in the iis-framework such as:
    * Core settings for application and logging paths as well as port bindings
    * Application Pooling
    * Static and Dynamic Compression
    * Filtering
    * Session States

Default settings and inline help (both help pages and attribute pop-up) available and shown when utilizing the pack in your design.

### Components Utilized
The pack uses both common components and introduces new ones as listed below.

#### Core Components
- [compute](./compute-component.html): Used to define the virtual machine and OS.
- [volume](./volume-component.html): Used to define storage associated with you deployment.
- [lb](./lb-component.html): Used to configure settings for Load Balancing of incoming requests to the servers.

#### Windows Related Components
- [iis-website](./ms-iis-website-component.html): Used to configure website specific details.
- [dotnetframework](./ms-dotnetframework-component.html): Used to specify path of artifacts and framework version to use in the website deployment.
- [nuget-package](./nuget-package-component.html): Used to specify where website artifacts are located and version to use in the deployment.
- [chocolatey-package](./chocolatey-package-component.html): Used to define additional software packages to install on the server.


