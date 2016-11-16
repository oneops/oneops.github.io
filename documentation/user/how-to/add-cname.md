---
layout: user-doc
title: Add CNAME
id: "add-cname"
---

# Solution

The hostname, by default, is provided by the OneOps system and follows a pattern that is described in [Find the Hostname of a VM.](../howto/#find-the-hostname-of-a-vm)

You can create your own endpoints by adding short or full CNAMEs.

## Add a Short CNAME

The first approach is to add a short CNAME with the following steps:


1. In the Transition view of your platform, go to the QDN component.
2. Click **edit.**
3. Enter a single word for a short CNAME alias.
4. Save the change.
5. Commit and deploy.

The additional hostname where the platform can be reached is `<NEW-SHORT-NAME><ENVIRONMENT-NAME>.<ASSEMBLY-NAME>.<ORGANIZATION-NAME>.DOMAIN`

It is possible to add multiple short CNAMEs to have additional hostnames.

## Add a Full CNAME

A second approach is to add a full CNAME with the following steps:


1. In the Transition view of your platform, go to the FQDN component.
2. Click **edit.**
3. Enter a Full CNAME alias, for example, `test.qa.<your server>`. (Before using this feature, know the correct domain name.)
	
    The following domains are supported:
    
    `dev|qa|prod.<your server>`
	  
4. Save the change.
5. Commit and deploy.

The new Full CNAME aliases are the additional hostnames where the platform can be reached.
