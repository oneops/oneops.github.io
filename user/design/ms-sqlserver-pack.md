---
layout: user-doc
title: Microsoft SQL Server Pack
---

The _mssql_ [pack](./packs.html) is available as _MS SQL Server_ in the _Database Relational SQL_ section and provides
the user with the ability to use [Microsoft SQL Server](https://www.microsoft.com/sql-server/) as a platform in their
assembly.

## Platform variables
* data_drive - drive letter for persistent storage, used to hold user data and log files. Default is "F".
* temp_drive - drive letter for ephemeral storage, used to hold tempdb data and log files. Default is "T".

## Secgroup component
By default this component is configured to allow all incoming traffic to these TCP ports:
* 22 - SSH
* 1433 - default port for MS SQL Server
* 3389 - RDP
If you're planning to use custom ports for your Sql Server instance, please add them here.

## Compute component
Default compute size is "M-Win"

## OS component
Default OS Type is "Windows 2012 R2". 

## vol-temp component
This is a volume component used to specify details for the ephemeral storage that comes with the VM.
Only `Mount Point` attribute is applicable to Windows VMs. The rest of the attributes are ignored.

## storage component
This component defines the size and type of the persistent storage that will be used to hold user data and log files.
`Slice Count` attribute must be equal to 1.

## volume component
Another volume component which depends on the storage component and is used to specify details for the persistent storage.
Only `Mount Point` attribute is applicable to Windows VMs. The rest of the attributes are ignored.

## dotnetframework component
By default these .Net frameworks will be installed on the VM:
* .Net 3.5
* .Net 4.6

## mssql component
This component configures the following attributes of MS SQL Server installation:
*MS SQL Server version and edition - currently only 2014 Enterprise is supported
*sa Password - make sure to specify a strong password, otherwise the installation will fail.
*TempDB data directory - default is T:\MSSQL
*TempDB log directory - default is T:\MSSQL
*User db data directory - default is F:\MSSQL\UserData
*User db data directory - default is F:\MSSQL\UserLog

Note: if OneOps deployment fails at mssql step most likely the error message will not be descriptive enough. 
In that case please RDP or SSH to the VM and investigate the content of installation logs.
For MS SQL Server 2014 version the log is located at `C:\Program Files\Microsoft SQL Server\120\Setup Bootstrap\Log\summary.txt`
Add `user` component to your design to create a local account with specified SSH keys and\or password (for RDP connections).

## database component
This component creates a user database, login and a database user with db_owner rights in that database.
Please note that `Instance Name` attribute is actually for specifying database name, not the instance name. 
If creating a Sql Server login (not from Windows domain account), please specify strong password. 