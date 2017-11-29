---
layout: wmt/docs
side-navigation: user-navigation.html
title: Chocolatey Package Component
---

# Chocolatey Package Component

The _chocolatey-package_ [component](./components.html) is used to install additional software artifacts on
computes from Chocolatey Repos. [Chocolatey](http://chocolatey.org) is a machine level package manager that is built on
top of nuget command line and the nuget infrastructure.

Besides the global configuration available for any component such as _Name_, you can configure the
following attributes:

### Repository:
_Repository URL_: is used to specify the repo used to store artifacts.<br>
_Repository_: is used to specify the specific repo name where the artifacts are located that you want to install.<br>

### Authentication:
_Username_ and _Password_ allow you to authenticate into your above defined repository.<br>

### Artifact:
_Identifier_: is used to specify the specific artifact name to install. The identifier can be a URL, S3 Path, local path
or Maven identier of the artifact package to download.<br>
_Version_: is used to specify the version of the artifact to install. Can be a specific version or "latest" to pull the most
recent version.<br>
_Checksum_: is used to specify the SHA256 checksum of the artifact package.<br>
_Path_: is used to specify the repository path prefix.<br>

### Destination:
_Install Directory_: is used to specify the directory path where the artifact will be deployed to and versions kept.<br>
[Variables](./variables.html) are typically used here to manage commonly used information in a central place.<br>
_Deploy as user_: is used to specify the system user used to deploy the application. <br>
_Deploy as group_: is used to specify the system group to run the deployment as.<br>
_Environment Variables_: is used to specify any variables to be present during the deployment.<br>
_Persistent Directories_: is used to list directories to be persisted across code updates (ex. logs, tmp, etc.)<br>
_Expand_: is used to expand compressed files such as .tgz, tar.gz, .zip, .tar, .jar and .war.<br>

### Stages:
_Configure_: is used to specify any commands to be executed to configure the artifact package.<br>
_Migrate_: is used to specify any commands to be executed during the migration stage.<br>
_Restart_: is used to specify any commands to be executed during a restart.<br>
