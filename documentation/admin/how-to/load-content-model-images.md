---
layout: admin-doc
title: Load Content
id: load-content-model-images
---

# Circuit Overview

A circuit is a chef ruby-dsl based model of some application or service.  It contains the model of what resources / components are required, optional and how they relate to each other.  Two common relations are depends_on and managed_via.  An architect would usually design a pack to capture best practices for the different availablity modes / operational modes.

An example would be a tomcat circuit.  In the circuit file it would contain a compute, java, tomcat, and artifacts and/or build components and describe the dependencies and where they run (managed_via relation).  

A prior name of a circuit was a pack.  Whenever you see the term pack in oneops, its the same thing as a circuit.


# Circuit repo

The basic circuit repo is: https://github.com/oneops/circuit-oneops-1

It contains 3 primary directories for the models:

1. /components - which can be implmented in chef cookbooks, puppet modules, and soon ansible playbooks.  Each component has a doc dir which has the image the ui will use for the component.  
2. /clouds - default / templates for clouds and cloud services.
3. /packs - the directory with all the packs/circuits


# Load content

There is a circuit command which is part of the oneops-admin gem. This circuit command is used to load content / the model.

Download and install the latest gem from the build server or build yourself from https://github.com/oneops/oneops-admin

advanced option to use object store backed images and docs, is to modify the circuit repos .chef/knife.rb with some object store config.  Example lines to add to circuit-oneops-1/.chef/knife.rb:

~~~bash
object_store_provider 'OpenStack'
object_store_user 'oneops'
object_store_pass 'redacted'
object_store_endpoint 
environment_name 'int-1503'
~~~

Then to perform the content upload, aka model sync:

~~~bash
cd /opt/oneops
circuit create
cd circuit
# this will load the base model / classes and relationships.
circuit init
cd /opt/oneops/circuit-oneops-1
# this runs knife model sync, knife pack sync and knife cloud sync
circuit install
~~~
