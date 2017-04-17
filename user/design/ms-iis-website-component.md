---
layout: user-doc
title: IIS Website Component
---

The _iis-website_ [component](./components.html) is used to configure attributes for deploying and running
[Internet Information Services (IIS) for Windows® Server](https://www.iis.net/).

Besides the global configuration available for any component such as _Name_, you can configure the
following attributes:

### IIS Web Site
_Web Site Physical Path_: is used to specify the physical path on disk this Web Site will point to.<br>
_Log File Directory_: is used to set the central w3c and binary log file directory.<br>
_Mime Types_: is used to add MIME type(s) to the collection of static content types.<br>
_Binding Type_: is used to select HTTP/HTTPS bindings that should be added to the IIS Web Site.<br>
_Binding Port_: is used to set the binding port.<br>
_Windows authentication_: is used to enable windows authentication.<br>
_Anonymous authentication_: is used to enable anonymous authentication.<br>

### IIS Application Pool
_.Net CLR version_: is used to specify the version of .Net CLR runtime that the application pool will use.<br>
_Identity type_: is used to select the built-in account which the application pool will use.<br>

### IIS Static Compression
_Enable static compression_: is used to enable static compression for URLs.<br>
_Compression level_: is used to set the compression level - from 0 (none) to 10 (maximum).<br>
_Mime types_: is used to specify which mime-types will/will not be compressed.<br>
_CPU usage disable_: is used to specify the percentage of CPU utilization (0-100) above
which compression is disabled.<br>
_CPU usage re-enable_: is used to specify the percentage of CPU utilization (0-100) below
which compression is re-enabled after disable due to excess usage.<br>
_Minimum file size to compression_: is used to specify the disk space limit (in megabytes),
that compressed files can occupy.<br>
_Maximum disk usage_: is used to specify the minimum file size (in bytes) for a file to be compressed.<br>
_Compression file directory_: is used to specify the location of the directory to store compressed files.<br>

### IIS Dynamic Compression
_Enable dynamic compression_: is used to enable dynamic compression for URLs.<br>
_Compression level_: is used to set the compression level - from 0 (none) to 10 (maximum).<br>
_Mime types_: is used to specify which mime-types will/will not be compressed.<br>
_CPU usage disable_: is used to specify the percentage of CPU utilization (0-100) above
which compression is disabled.<br>
_CPU usage re-enable_: is used to specify the percentage of CPU utilization (0-100) below
which compression is re-enabled after disable due to excess usage.<br>
_Dynamic compression before cache_: is used to specify whether the currently available response is dynamically
compressed before it is put into the output cache.<br>
_Compression file directory_: is used to specify the location of the directory to store compressed files.<br>

### Session State
_Cookieless_: is used to specify how cookies are used for a Web application.<br>
_Cookie name_: is used to specify the name of the cookie that stores the session identifier.<br>
_Time out_: is used to specify the number of minutes a session can be idle before it is abandoned.<br>

### Request Filtering
_Allow double escaping_: is used to allow escaping in URL's. If set to false, request filtering will
deny the request if characters that have been escaped twice are present in URLs.<br>
_Allow high bit characters_: is used to allow non-ASCII characters in URL's. If set to true, request
filtering will allow non-ASCII characters in URLs.<br>
_Verbs_: is used to specify which HTTP verbs are allowed or denied to limit types of requests sent to
the Web server.<br>
_Maximum allowed content length_: is used to specify the maximum length of content in a request, in bytes.<br>
_Maximum URL length_: is used to specify the maximum length of the query string, in bytes.<br>
_Maximim query string length_: is used to specify the maximum length of the URL, in bytes.<br>
_File extension allow unlisted_: is used to specify whether the Web server should process files
that have unlisted file name extensions.<br>


### Attachments and Monitors Tabs
In addition to the above configuration for this component, you can also specify [Attachments](./attachments.html) and
[Monitors](../operation/monitors.html) for this component.