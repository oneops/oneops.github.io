---
layout: user-doc
title: Search
---

The search feature allows you to locate entities such as users, assemblies, environments, computes and many others. It
is available via the _Search_ icon in the shape of a magnifying glass in the top right corner or _Search_ item in the
left hand navigation.

Search provides a number of input fields to control the search. Results are displayed on the right and further refined
with the filter control above the list:

![Search](/assets/img/ui/search.png)



Use the search feature to look up instances that are relevant to the filter criteria. The search result can be granulized using various levels of filtering conditions. For user convenience, there is support for auto completion of certain filters.




* Goto `https://<oneops>/platform/<organization-name>/search` by providing the right organization name in the URL.
* On the Organization summary page, click the dedicated tab for search.

# Search Types

Search types include quick and advanced options.

## Quick Search


In Quick Search mode, the user has the option to select and instantly execute a preconfigured search (for example, a "one-click" listing of all FQDN components for the current organization). Quick search pre-populates the advance search filter criteria. Quick search options are usually available as buttons on left panel. If the button contains text that ends with **...**, the user is required to add a few of the filter conditions in addition to the pre-populated values. Otherwise the button click directly results in the search result set.

## Advanced Search


Enable advance search by appending `?source=cms` to the search URL. In Advanced Search mode, the left panel offers various filtering levels. The user can enter some or all of these filters to obtain the desired result set. The available advance search options are:


* **Namespace:** The path within which the searching is restricted. The widest it can go is by organization. For example, for service organization, the default namespace value is `/services`. To lookup instances within a specific environment, use `/<organization-name>/<assembly-name>/<environment-name>`.
* **Scope:** Select the phase of the OneOps lifecycle to be searched. For example, to search realized instances of a compute, select `operations(bom*)`. To go to the compute configuration that is specific to an environment, choose `transition(manifest*)`.
* **Class:** Within the selected scope for search, select the class. OneOps auto-completes this field. For example, if you want to see all computes, start entering **com**. A list of classes to choose from displays to granularize the result set.
* **Attribute:** For a specific class, there are certain sets of attributes that are supported and associated with that class. For example, the compute class has various attributes like public_ip, public_dns, osname and many others. Enter the specific attribute name. OneOps auto-completes this field. Note: attributes names differ based on the scope and class selected.
* **Attribute Value:** If interested in a specific value for the above, enter the attribute name here. If not all instances match, all of the above conditions are returned. This field is useful only when all of the above four fields are completed with relevant values/selections.

## Sample Searches

## Search Compute Instance for a Specific IP Address


1. Click quick search, **Compute instances by IP...**
2. Enter the IP address you have in the attribute value field at the bottom of left panel.

## Search the Number of Artifacts that are Configured within an Environment in an Assembly

To search the number of artifacts that are configured within an environment in an assembly, follow these steps:


1. Provide the namespace such as `/<organization-name>/<assembly-name>/<environment-name>`.
2. Select the design (`catalog*`) or transition (`manifest*`) as the scope.
3. Set the artifact as the class name
4. To obtain the search results, click **run.**

>The widest possible search is at the organization level. A search across multiple or all organizations is not feasible at this point.
