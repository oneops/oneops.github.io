---
layout: project
title: Assemblies API
id: assemblies-api
---


To `add`, `update` and `delete` assemblies in your organization, use the Assemblies API.

# List

Get a list of assemblies in your organization.

~~~
GET /assemblies
~~~

## Response

~~~
<%= headers 200 %> <%= json(:assembly) { |h| [h] } %>
~~~

# Create

Create a new assembly in your organization. The authenticated user must be a user in the organization.

~~~
POST /assemblies
~~~

## Input

~~~bash
cms_ci : Required Hash

ciName
: _Required_ **String**

comments
: _Optional_ **String**

ciAttributes
: _Required_ **Hash**

    description
    : _Optional_ **String**
~~~

~~~ruby
<%= json %5C :cms_ci => { :ciName => "myassembly", :comments => "These are your comments", :ciAttributes => { :description => "This is your assembly description" } } %>
~~~


## Response

~~~
<%= headers 200 %> <%= json :assembly %>
~~~

# Get

Retrieve the requested assembly.

~~~
GET /assemblies/:assembly
~~~

## Response

~~~
<%= headers 200 %> <%= json :assembly %>
~~~

# Update

Update the specified assembly with new data.

~~~
PUT /assemblies/:assembly
~~~

## Input

~~~
cms_ci : Required Hash

comments
: _Optional_ **String**

ciAttributes
: _Required_ **Hash**

    description
    : _Optional_ **String**
~~~

~~~ruby
<%= json %5C :cms_ci => { :comments => "These are your comments", :ciAttributes => { :description => "This is your assembly description" } } %>
~~~


## Response

~~~
<%= headers 200 %> <%= json :assembly %>
~~~

# Delete

Remove the specified assembly.

~~~
DELETE /assemblies/:assembly
~~~

## Response

~~~
<%= headers 200 %>
~~~

# Clone

To create a clone with another name, copy the assembly.

[comment]: # (Todo)

# Catalog

Save the assembly into the organization catalog.

[comment]: # (__TODO add steps here?)
