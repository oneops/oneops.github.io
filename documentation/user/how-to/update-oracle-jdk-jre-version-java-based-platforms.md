---
layout: project
title: Update Oracle JDK/JRE Version on Java-based Platforms
id: update-oracle-jdk-jre-version-java-based-platforms
---

In OneOps, the user can configure the application to use Oracle Java 6/7/8 by updating the Java component in the  Design or Transition phase of the platform. 

# Solution

## Available Java Packages 

The following three types of Java packages are available for installation depending on the the selected Java version.

| Oracle Java Package | Description | Supported Versions |
| ----- | ------- | ----- |
| Server JRE (Server Java Runtime Environment) | To deploy Java applications on servers. Includes tools for JVM monitoring and tools commonly required for server applications, but does not include browser integration (the Java plug-in), auto-update, nor an installer.| Java 7 or later (8,7) |
| JDK (Java SE Development Kit) | For Java Developers. Includes a complete JRE plus tools to develop, debug, and monitor Java applications.| Java 6 or later (8,7,6) |
| JRE (Java Runtime Environment)| End user running Java on a desktop. Covers most end-user needs. Contains everything required to run Java applications on your system.| Java 6 or later (8,7,6) |

## Install or Update JDK/JRE

To install or update JDK/JRE, follow these steps:


1. Click the Java component.
2. Select the flavor, package type and Java version.
3. Save.
4. Commit and deploy.
