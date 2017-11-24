---
layout: wmt/docs
side-navigation: user-navigation.html
title: Variables
id: variables
---

# Variables

Use Variables to externalize configuration attributes values which may change for an application at cloud , global( shared across platforms), or platform specific. You can create secure variables.

The three areas to store variables are:

* **Global:** A Global Variable is an Assembly-wide, named value. You can use Global Variables within a Component’s attribute values in this form: `$ONEOPS{variable-name}`.  OneOps then evaluates the actual attribute values during deployment.

* **Cloud:** Defined for a particular Cloud

* **Local:** Set in a particular Platform. For example you may have a Tomcat Platform and in it, set a variable like ‘version’ to ‘2.2.2’ for use in the platform

Variables are put to use when you have an attribute, as you saw above in the Tomcat example. For another example, in the Download Component, there is an attribute called Source URL. This defines where to go to download the file, for example a JDK to download. It is possible to hard code a value in this circumstance, but variables enable a more flexible approach.

Variable reference example syntax:

```
$OO_CLOUD{cloudvarname1}
$OO_GLOBAL{globalvarname2}
$OO_LOCAL{localvarname3}
```
