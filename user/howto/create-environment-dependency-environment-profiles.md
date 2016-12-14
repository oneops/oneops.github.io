---
layout: user-doc
title: Create Environment Dependency with Environment Profiles
id: create-environment-dependency-environment-profiles
---

Consider the following when creating environment dependencies with environment profiles:


* When a user attempts to create a new environment, a drop-down menu is shown to enable (and require) the user to choose from a list of predefined environment profiles.
* The selected profile is used to pre-fill the environment attribute values (including cloud association).
* Select the correct Administrative Status.
* The user has the ability to keep the default configuration settings “as is” (typical scenario) or edit some or all of the values, if required, before saving this new environment.
* The environment profiles are not meant to restrict the user while selecting the choices available to create environment. Instead the profiles are meant to pre-fill the most commonly used values for a typical environment setup.
* After a new environment is saved, it has an attribute (“profile”) that points to the underlying environment profile by referencing the profile's name.
* The profile association can be updated at any time by editing the environment.  

> Changing the existing environment profile association does not mean that any of the newly associated profile attributes or settings overwrite any of the existing environment configuration values. The environment profile attribute “bootstrapping” is only applied during initial environment creation. It is not intended to be maintained as an active attribute value "mirroring" during any life-cycle changes to either a concrete environment or its underlying profile.

# See Also

* <a href="/user/references/environment-profiles.html">Environment Profiles</a>
* <a href="/user/howto/create-an-environment.html">View, Add, or Edit Environment Profiles</a>
