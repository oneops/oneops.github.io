---
layout: user-doc
title: Environment Profiles
id: environment-profiles
---

Environment profiles are templates that are used to derive concrete environments based on pre-defined templates. Essentially, they are abstract environment definitions that allow environments to be categorized or classified by associating a given environment with an underlying environment profile. Typical examples of profiles are prod, QA, Test, etc.

To add a new Environment profiles, follow these steps:


1. Goto Account.
2. Select the **environments** tab.
3. Click **Add** button
4. Enter a unique name.
    * Letters, numbers, and dashes are allowed. No other characters are allowed.
    * If you use invalid characters, you are notified to match the requested format.
5. Fill in appropriate details for the enviornment template
6. Save


# Usage


* Environment profiles enable support, operations, and DevOps teams to easily categorize an environment to determine its support level and/or its critical problem resolution parameters (for example, SLA levels).
* Environment profiles are intended to streamline new environment creation by bootstrapping an environment with a set of default attribute values. In other words, environment profiles are abstract “best practice” environment definitions from which to derive real environments.
* A set of environment profiles is defined and managed at the organization level and realized in the assembly environment. OneOps does not allow the creation of a new environment without first providing a profile and it is important to select the best suited profile before creating a new environment. Profiles are available within the organization.

>For backward compatibility reasons, the profile association is not enforced:
>
* In situations where no profiles are defined for an organization 
* For environments that existed prior to when the initial environment profile was added to an Organization

# Environment Profile Association


* When appropriate, the concrete environment profile association tag is indicated by an explicit name label while navigating through environment, transition and operations pages. For example, this occurs in breadcrumb sections, page header sections and environment lists. 
* Environment profiles help DevOps teams to quickly categorize an environment with a given support level, based on the defined line-up of environment profiles.