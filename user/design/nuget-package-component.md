---
layout: wmt/docs
side-navigation: user-navigation.html
title: NuGet Package Component
---

# NuGet Package Component

The _nuget-package_ [component](./components.html) gives the ability to download [NuGet](https://www.nuget.org/) packages
on the Windows machine. After downloading the NuGet package, you can use Configure, Migrate and Restart attributes for post processing of your NuGet
package. This component expects an http url of the NuGet package hosted in nexus repo.

Besides the global configuration available for any component such as _Name_, you can configure the
following attributes:

### Repository
_Repository URL_: Not used at this time. Full path for artifact is from Identifier below.<br>
_Repository_: is used to specify the specific repo name where the artifacts are located that you want to install.<br>

### Authentication
_Username_ and _Password_ allow you to authenticate into your above defined repository.<br>

### Artifact
_Identifier_: is used to specify the artifact to install including the repo name. The identifier can be a URL, S3 Path, local path
or Maven identifier of the artifact package to download. The artifact should be a .nupkg file.<br>
_Version_: is used to specify the version of the artifact to install. Can be a specific version or "latest" to pull the most
recent version.<br>
_Checksum_: is used to specify the SHA256 checksum of the artifact package.<br>
_Path_: is used to specify the repository path prefix.<br>

### Destination
_Install Directory_: is used to specify the directory path where the artifact will be deployed to and versions kept.<br>
[Variables](./variables.html) are typically used here to manage commonly used information in a central place.<br>
_Deploy as user_: is used to specify the system user used to deploy the application
_Deploy as group_: is used to specify the system group to run the deployment as.<br>
_Environment Variables_: is used to specify any variables to be present during the deployment.<br>
_Persistent Directories_: is used to list directories to be persisted across code updates (ex. logs, tmp, etc.)<br>
_Expand_: Not used at this time. The NuGet package defined above will be expanded automatically.<br>

### Stages
_Configure_: is used to specify any commands to be executed to configure the artifact package.<br>
_Migrate_: is used to specify any commands to be executed during the migration stage.<br>
_Restart_: is used to specify any commands to be executed during a restart.<br>


### Attachments and Monitors Tabs
In addition to the above configuration for this component, you can also specify [Attachments](./attachments.html) and
[Monitors](../operation/monitors.html) for this component.
