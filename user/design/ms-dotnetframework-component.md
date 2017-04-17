---
layout: user-doc
title: DotNet Framework Component
---

The _dotnetframework_ [component](./components.html) gives the ability to install different
[.NET Framework](https://msdn.microsoft.com/en-us/library/w0x726c2(v=vs.110).aspx) on windows
compute/node. This component uses [chocolatey](./chocolatey-package-component.html) to install .Net frameworks.

Chocolatey packages can be used from public chocolatey repository or from the repository hosted within the firewall. This
will be configured based on your OneOps instance configuration.<br>

Besides the global configuration available for any component such as _Name_, you can configure the
following attributes:<br>

### Chocolatey Package Source:
_Package URL_: is used to specify the repo used to store artifacts. Add the url of the chocolatey package source. NOTE: this
will be overridden if mirror cloud service has been defined (top right of screen). In the mirror cloud service the key
used is "chocorepo".<br>

### Framework Version:
_.NET Framework version_: is used to specify the framework version in install. Additional details below.
* Format: .Net framework version = chocolatey package name
* Format examples: .Net 3.5 = dotnet3.5 and .Net 4.5.2 = dotnet4.5.2

### Attachments and Monitors Tabs:
In addition to the above configuration for this component, you can also specify [Attachments](./attachments.html) and
[Monitors](../operation/monitors.html) for this component.