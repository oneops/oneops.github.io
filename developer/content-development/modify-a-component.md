---
layout: dev-doc
title: Modify existing component
---

# Scenario Context

Adding a new *attribute* to component is done routinely. For example you want to add support for *pre shut down* command in *apache* webserver.  You can do by the following

* Modify the component's **metadata.rb** file to add the attribute details.
* Modify the recipe's to use **prestart** attribute to execute the pre shut down command.

* To upload the metadata and test follow the instructions on <a href="/developer/index.html">getting-started</a>
