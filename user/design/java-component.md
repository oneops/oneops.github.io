---
layout: wmt/docs
side-navigation: user-navigation.html
title: Java Component
---

# Java Component

The _java_ [component](./components.html) represent the [Java](https://java.com/) environment available for platform
runtime usage.

## Attributes

_Flavor_: Configure usage of a Java distribution from Oracle or the open source reference OpenJDK.<br>
_Package Type_: Defines whether a Java Development Kit _JDK_, a Java Runtime Environment _JRE_ or a server-optimized
runtime _Server JRE_ is used.<br>
_Version_: The major version of Java to use. <br>
_Update_: The optional update version of Java to use. An empty values default to the latest update version.<br>
_Binary Package_: Optional path for downloading the package.<br>
_Installation Directory_ <br>
_System Default_ <br>

## Package Types

### Server JRE

A server JRE should be used when deploying  Java applications on servers. It includes tools for JVM monitoring and
tools commonly required for server applications, but does not include browser integration (the Java plug-in),
auto-update, an installer or development tools such as a compiler.

### JDK

A Java Development Kit JDK is suitable for Java development tasks. It includes the JRE and server JRE components as well
as development tools such as compiler, debugger, monitoring tools  and others.

### JRE

A Java Runtime Environment JRE is suitable for end users running Java on a desktop and is suitable for most end-user
needs.
