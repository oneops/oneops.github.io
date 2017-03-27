---
layout: user-doc
title: Microsoft IIS Pack
---

The _iis_ [pack](./packs.html) is available as _Internet Information Services(IIS)_ in the _Web Application_ section
and provides the user with the ability to use [Microsoft IIS](https://www.iis.net/) as a platform in their assembly.

There are several main components of the IIS Pack and each are addressed below.

### compute Component
Used to define the Windows VM compute size.
Default compute size: M-WIN (defined in your local instance of OneOps).
Please refer to the [compute component](./compute-component.html) for additional info.

### dotnetframework Component
Used to install different .net frameworks on windows compute/node.
This component uses chocolatey to install .net frameworks.
Package url: Url of the chocolatey repository
Default Package URL: https://chocolatey.org/api/v2/
1. Add the url of the chocolatey package source, this will be overridden if mirror cloud service has been defined.
2. In the mirror cloud service the key to used be is "chocorepo".
Net Framework version Format: .Net framework version = chocolatey package name  (Ex.  .Net 3.5 = dotnet3.5)
Default Net Framework versions: .Net 3.5 = dotnet3.5,   .Net 4.5.2 = dotnet4.5.2

### iis-framework Component
Used to define the website, application pool and configure different attributes in IIS.

##### IIS Website section defining basic attributes

Attribute | Description | Example/Default Value
--------- | ----------- | ---------------------
Website physical path | the physical path on disk this Web Site will point to | Default value: E:\Apps
Log file directory | Set central w3c and central binary log file directory | Default value: E:\Logs
Mime type(s) | Adds MIME type(s) to the collection of static content types | Eg: .tab = application/xml
Binding type | Select HTTP/HTTPS bindings that should be added to the IIS Web Site | Default value: HTTP
Binding Port | Set the binding port |
Windows Authentication | Enable windows Authentication | Default value: true
Anonymous authentication | Enable anonymous authentication | Default value: true




IIS Application Pool section
IIS Static Compression section
IIS Dynamic Compression section
Session State section
Request filtering section





### lb Component
Used to define a what ports the web application will listen on and balance between multiple computes.
Default Listeners: Ports 80 and 8080

### nuget-package Component
Used to provide an ability to download nuget packages on the windows machine.
After download of the nuget package you can use Configure, Migrate and Restart fields post processing of your nuget package.
Nuget-Package component expects http url of the nuget package hosted in nexus repo.
1. Repository	Nuget package name, this should be same as the name of package in the Url	Eg: CCMSampleWebApp
2. Identifier	Url of the nuget package in nexus
    Eg: http://repo.xxx.com/service/local/repositories/nuget-snapshots/CCMSampleWebApp/1.0.0/CCMSampleWebApp-1.0.0.nupkg
3. Version	version of the nuget package.    Eg: 1.0.0
4. Install Directory	Directory path where the artifact will be downloaded and versions will be kept	Default value: e:\platform_deployment

### volume Component
Used to add a volume/drive to your compute.
Size and Mount Point(drive letter) are the important attributes for Windows VM's. The rest of the attributes are ignored.
Mount Point should be set to E.

### os component
Used to configure OS level attributes like ntp service, installing required ruby gems, etc.
The important attribute of OS component is OS type. OS Type Default Value: Windows 2012 R2.



### *Other optional components
### chocolately-package
Used to install additional packaged software.
Must specify where the package is located, authentication to to repo and aftifact to install.
Please refer to the [chocolaty-package component](./chocolately-package-component.html) for additional info.



