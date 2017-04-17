---
layout: user-doc
title: Volume Component
---

The _volume_ [component](./components.html) is of core importance and part of most platforms as it
defines how the system will access the attached storage accessible to the virtual machine. The volume component
defines the size and mount points.

Besides the global configuration available for any component such as _Name_, you can configure the
following attributes:

### Global
_Size_: is used to define the size of the volume being defined and represented as a percent of storage or in byte units.
 Accepted values are 100%FREE, {percent}VG and {bytes}G. <br>
_Device_: is used to specify the device to use for the volume.  Note: if left blank, the device map is used from the
related storage component. If using nfs, use server://nfsshare. <br>


### Filesystem
_Filesystem Type_: is used to specify the volume formatting such as (ext3, nfs, tmpfs, etc.).<br>
_Mount Point_: is used to specify the directory path where the volume should be mounted. If using Windows compute, specify a drive
letter (ex. D:)<br>
_Mount Options_: is used to specify any specific mount options. Common options listed below.
* async - Allows the asynchronous input/output operations on the file system.
* auto - Allows the file system to be mounted automatically using the mount -acommand.
* defaults - Provides an alias for async,auto,dev,exec,nouser,rw,suid.
* exec - Allows the execution of binary files on the particular file system.
* loop - Mounts an image as a loop device.
* noauto - Default behavior disallows the automatic mount of the file system using the mount -a command.
* noexec - Disallows the execution of binary files on the particular file system.
* nouser - Disallows an ordinary user (that is, other than root) to mount and unmount the file system.
* remount - Remounts the file system in case it is already mounted.
* ro - Mounts the file system for reading only.
* rw - Mounts the file system for both reading and writing.
* user - Allows an ordinary user (that is, other than root) to mount and unmount the file system.

### Miscellaneous Notes:
If the volume defined has a DependsOn relationship direct to the compute, it is configured for Ephemeral storage
on the compute. <br>
If the volume defined has a DependsOn relationship to the [storage component](./storage-component.html), it is using
block persistent storage. <br>


### Attachments and Monitors Tabs
In addition to the above configuration for this component, you can also specify [Attachments](./attachments.html) and
[Monitors](./monitors.html) for this component.