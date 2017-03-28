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
This component uses Chocolatey to install .net frameworks.

Attribute | Description | Notes
--------- | ----------- | ---------------------
Package url | Url of the chocolatey repository | Default Package URL: https://chocolatey.org/api/v2/.  Add the url of the chocolatey package source, this will be overridden if mirror cloud service has been defined.  In the mirror cloud service the key to used be is "chocorepo".
Net Framework version | Add the .Net framework version details | Format: .Net framework version = chocolatey package name.  (Ex.  .Net 3.5 = dotnet3.5) Default Net Framework versions: .Net 3.5 = dotnet3.5,   .Net 4.5.2 = dotnet4.5.2

### iis-framework Component
Used to define the website, application pool and configure different attributes in IIS.

##### IIS Website section

Attribute | Description | Notes
--------- | ----------- | ---------------------
Website physical path | the physical path on disk this Web Site will point to | Default value: E:\Apps
Log file directory | Set central w3c and central binary log file directory | Default value: E:\Logs
Mime type(s) | Adds MIME type(s) to the collection of static content types | Eg: .tab = application/xml
Binding type | Select HTTP/HTTPS bindings that should be added to the IIS Web Site | Default value: HTTP
Binding Port | Set the binding port |
Windows Authentication | Enable windows Authentication | Default value: true
Anonymous authentication | Enable anonymous authentication | Default value: true

##### IIS Application Pool section

Attribute | Description | Notes
--------- | ----------- | ---------------------
.Net CLR version | The version of .Net CLR runtime that the application pool will use | Default value: v4.0
Identity type | Select the built-in account which application pool will use | Default value: Application Pool Identity


##### IIS Static Compression section

Attribute | Description | Notes
--------- | ----------- | ---------------------
Enable static compression | Specifies whether static compression is enabled for URLs. | Default value: true
Compression level | Compression level - from 0 (none) to 10 (maximum) | Default value: 7
Mime type(s) | Which mime-types will be / will not be compressed |
CPU usage disable | The percentage of CPU utilization (0-100) above which compression is disabled | Default value: 90%
CPU usage re-enable | The percentage of CPU utilization (0-100) below which compression is re-enabled after disable due to excess usage | Default value: 50%
Maximum disk usage | Disk space limit (in megabytes), that compressed files can occupy | Default value: 100 MB
Minimum file size to compression | The minimum file size (in bytes) for a file to be compressed | Default value: 2400 bytes
Compression file directory | Location of the directory to store compressed files |


##### IIS Dynamic Compression section

Attribute | Description | Notes
--------- | ----------- | ---------------------
Enable dynamic compression | Specifies whether dynamic compression is enabled for URLs | Default value: true
Compression level | Compression level - from 0 (none) to 10 (maximum) | Default value: 0
Mime type(s) | Which mime-types will be / will not be compressed |
CPU usage disable | The percentage of CPU utilization (0-100) above which compression is disabled | Default value: 90%
CPU usage re-enable | The percentage of CPU utilization (0-100) below which compression is re-enabled after disable due to excess usage | Default value: 50%
Dynamic compression before cache | Specifies whether the currently available response is dynamically compressed before it is put into the output cache. | Default value: false
Compression file directory | Location of the directory to store compressed files | Default value: e:\logs\IISTemporaryCompressedFiles

##### Session State section

Attribute | Description | Notes
--------- | ----------- | ---------------------
Cookieless | Specifies how cookies are used for a Web application. | Default value: Use Cookies
Cookie name | Specifies the name of the cookie that stores the session identifier. | Default value: ASP.NET_SessionId
Time out | Specifies the number of minutes a session can be idle before it is abandoned. | Default value: 20


##### Request filtering section

Attribute | Description | Notes
--------- | ----------- | ---------------------
Allow double escaping | If set to false, request filtering will deny the request if characters that have been escaped twice are present in URLs. | Default value: false
Allow high bit characters | If set to true, request filtering will allow non-ASCII characters in URLs. | Default value: true
Verbs | Specifies which HTTP verbs are allowed or denied to limit types of requests sent to the Web server. |
Maximum allowed content length | Specifies the maximum length of content in a request, in bytes. | Default value: 30000000 bytes
Maximum url length | Specifies the maximum length of the query string, in bytes. | Default value: 4096 bytes
Maximum query string length | Specifies the maximum length of the URL, in bytes. | Default value: 2048 bytes
File extension allow unlisted | Specifies whether the Web server should process files that have unlisted file name extensions. | Default value: true

##### Windows Features

Attribute | Description
--------- | -----------
Default Document | Allows you to specify a default file to be loaded when users do not specify a file in a request URL.
HTTP Errors | Installs HTTP Error files. Allows you to customize the error messages returned to clients.
Static Content | Serves .htm, .html, and image files from a Web site.
HTTP Redirection | Provides support to redirect client requests to a specific destination.
HTTP Logging | Enables logging of Web site activity for this server.
Request Monitor | Monitors server, site, and application health.
Tracing | Enables tracing for ASP.NET applications and failed requests.
Static Content Compression | Compresses static content before returning it to a client.
Dynamic Content Compression | Compresses dynamic content before returning it to a client.
Request Filtering | Configures rules to block selected client requests.
Basic Authentication | Requires a valid Windows user name and password for connection.
Windows Authentication | Windows Authentication
.NET Extensibility | Enables your Web server to host .NET framework-managed module extensions.
.NET Extensibility 4.5 | Enables managed code developers to change, add, and extend Web server functionality in the entire request pipeline, the configuration, and the UI.
ASP.NET 3.5 |Provides a server-side object-oriented programming environment for building Web sites and Web applications using managed code.
ASP.NET 4.5	| Provides a server-side object-oriented programming environment for building Web sites and Web applications using managed code.
ISAPI Extensions | Allows ISAPI extensions to handle client requests.
ISAPI Filters | Allows ISAPI filters to modify Web server behavior.
IIS Management | Console	Installs Web server Management Console which supports management of local and remote Web servers.
IIS Management scripts and Tools | Manages a local Web server with IIS configuration scripts.
Management Service | Allows this Web server to be managed remotely from another computer via the Web server Management Console.
Application Initialization | Enables you to perform expensive Web application initialization tasks before serving Web pages.


### lb Component
Used to define a what ports the web application will listen on and balance between multiple computes.
Default Listeners: Ports 80 and 8080

### nuget-package Component
Used to provide an ability to download nuget packages on the windows machine.
After download of the nuget package you can use Configure, Migrate and Restart fields post processing of your nuget package.
Nuget-Package component expects http url of the nuget package hosted in nexus repo.

Attribute | Description | Notes
--------- | ----------- | ---------------------
Repository Nuget package name | This should be same as the name of package in the Url | Eg: CCMSampleWebApp
Identifier | Url of the nuget package in nexus | Eg: http://repo.xxx.com/service/local/repositories/nuget-snapshots/CCMSampleWebApp/1.0.0/CCMSampleWebApp-1.0.0.nupkg
Version |The version of the nuget package. | Eg: 1.0.0
Install Directory | Directory path where the artifact will be downloaded and versions will be kept | Default value: e:\platform_deployment

### volume Component
Used to add a volume/drive to your compute.
Size and Mount Point(drive letter) are the important attributes for Windows VM's. The rest of the attributes are ignored.
Mount Point should be set to E.

### os Component
Used to configure OS level attributes like ntp service, installing required ruby gems, etc.
The important attribute of OS component is OS type. OS Type Default Value: Windows 2012 R2.



### *Other optional components
### chocolately-package Component
Used to install additional packaged software.
Must specify where the package is located, authentication to to repo and aftifact to install.
Please refer to the [chocolaty-package component](./chocolately-package-component.html) for additional info.



