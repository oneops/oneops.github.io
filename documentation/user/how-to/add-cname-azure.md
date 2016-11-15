---
layout: project
title: Add CNAME in Azure DNS
id: "add-cname-to-azure-dns"
---

# Solution

The hostname, by default, is provided by the OneOps system and follows a pattern that is described in [Find the Hostname of a VM.](../howto/#find-the-hostname-of-a-vm)

You can create your own endpoints by adding short or full CNAMEs.

## Add a Short CNAME

The first approach is to add a short CNAME with the following steps:


1. In the Transition view of your platform, go to the FQDN component.
2. Click **edit.**
3. Enter a single word for a short CNAME alias.
4. Save the change.
5. Commit and deploy.

The shortname will be added to Azure DNS in a DNS zone created by the system using the name from the ZONE given in the DNS cloud service.</br>
The zone is created in a Resource Group.</br>
The shortnames will be added to Azure DNS zone with the name: `<NEW-SHORT-NAME><ENVIRONMENT-NAME>.<ASSEMBLY-NAME>.<ORGANIZATION-NAME>`</br>

It is possible to add multiple short CNAMEs to have additional hostnames.

In addition, the shortname will be used as the DNS Label Name to create the FQDN in the Azure public domain.</br>
The result will be `<SHORT-NAME>.<AZURE-REGION>.cloudapp.azure.com`

## Add a Full CNAME

A second approach is to add a full CNAME with the following steps:


1. In the Transition view of your platform, go to the FQDN component.
2. Click **edit.**
3. Enter a Full CNAME alias
4. Save the change.
5. Commit and deploy.

The fullname is added as a CNAME record in the same DNS Zone the short names are.</br>
The fullname is not added to the Azure public domain.</br>

If you have your own domain and want to delegate to Azure DNS follow these instrutions in [Delegate Domain to Azure DNS](https://azure.microsoft.com/en-us/documentation/articles/dns-domain-delegation/)
