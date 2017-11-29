---
layout: wmt/docs
side-navigation: dev-navigation.html
title: Design Attachments API
id: design-attachments-api
---

Use the Attachment API to store additional configuration entities for any component. You can use
[attachments](/user/design/attachments.html) to add configuration files, certificates, custom scripts etc. Attachment
content can be specified directly in the request or from a specified remote URL location.

Each attachment has a `:runs_on` attribute that allows for optional callback executions *before* or *after* component lifecycle events of **add, update** and **delete.** In addition, you can specify the on-demand option in the `runs_on` list which makes the attachment with the associated execution command to be available as an on-demand component action to be invoked at any time during operations.

# List

Get a list of attachments for a design component.

```
GET /assemblies/:assembly/design/platforms/:platform/components/:component/attachments
```

## Response

```
<%= headers 200 %> <%= json(:design_attachment) { |h| [h] } %>
```

# Create

Add a new attachment to this design component.

```
POST /assemblies/:assembly/design/platforms/:platform/components/:component/attachments
```

## Restrictions

Attachment names must be unique within a given platform namespace.

## Input

```
cms_dj_ci : Required Hash

ciName
: _Required_ **String**

comments
: _Optional_ **String**

ciAttributes
: _Required_ **Hash**

    content
    : _Optional_ **String** - Attachment content.

    source
    : _Optional_ **String** - Source URL where the content to be downloaded is located. The location must be a file, binary or text.

    headers
    : _Optional_ **Hash** - Optional HTTP headers to be used to force MIME types or for other customizations to the download request.

    basic_auth_user
    : _Optional_ **String** - Username for protected URL location.

    basic_auth_password
    : _Optional_ **String** - Password for protected URL location.

    checksum
    : _Optional_ **String** - Checksum to compare after the download.

    path
    : _Optional_ **String** - Destination filename path where the content should be saved or the remote source URL content should be downloaded to.

    exec_cmd
    : _Optional_ **String** - Command-line to execute after the content is saved.

    runs_on
    : _Optional_ **String** - Comma-separated list of lifecycle events for automatic callbacks.
    The list can contain only the following events: **before-add, after-add, before-update, after-update, before-delete, after-delete, on-demand.**

    priority
    : _Optional_ **String** - Specify priority of executions in case there are multiple attachments in the same callback event.
```


Ruby:

```
<%= json %5C :cms_dj_ci => { :ciName => "myattachment", :comments => "These are your comments", :ciAttributes => { "content" => "Some file or script content here", "source" => "", "headers" => "", "basic_auth_user" => "", "basic_auth_password" => "", "checksum" => "", "path" => "/tmp/myattachment.sh",

"exec_cmd" => "/tmp/myattachment.sh", "run_on" => "before-add,on-demand", "priority" => "1" } } %>
```


## Response

```
<%= headers 200 %> <%= json :design_attachment %>
```

# Get

Retrieve the requested attachment in this design component.

```
GET /assemblies/:assembly/design/platforms/:platform/components/:component/attachments/:attachment
```

## Response

```
<%= headers 200 %> <%= json :design_attachment %>
```

# Update

Update the specified attachment in this design component with new data.

```
PUT /assemblies/:assembly/design/platforms/:platform/components/:component/attachments/:attachment
```

## Input

```
cms_dj_ci : Required Hash


comments
: _Optional_ **String**

ciAttributes
: _Required_ **Hash**

    content
    : _Optional_ **String** - Attachment content.

    source
    : _Optional_ **String** - Source URL where the content to be downloaded is located. The location must be a file, binary or text.

    headers
    : _Optional_ **Hash** - Optional HTTP headers to be used to force MIME types or for other customizations to the download request.

    basic_auth_user
    : _Optional_ **String** - Username for protected URL location.

    basic_auth_password
    : _Optional_ **String** - Password for protected URL location.

    checksum
    : _Optional_ **String** - Checksum to compare after the download.

    path
    : _Optional_ **String** - Destination filename path where the content should be saved or the remote source URL content should be downloaded to.

    exec_cmd
    : _Optional_ **String** - Command-line to execute after the content is saved.

    runs_on
    : _Optional_ **String** - Comma-separated list of lifecycle events for automatic callbacks.
    The list can contain only the following events: **before-add, after-add, before-update, after-update, before-delete, after-delete, on-demand.**

    priority
    : _Optional_ **String** - Specify priority of executions in case there are multiple attachments in the same callback event.
```

Ruby:

```
<%= json %5C :cms_dj_ci => { :comments => "These are your comments", :ciAttributes => { "content" => "Some file or script content here", "source" => "", "headers" => "", "basic_auth_user" => "", "basic_auth_password" => "", "checksum" => "", "path" => "/tmp/myattachment.sh",

"exec_cmd" => "/tmp/myattachment.sh", "run_on" => "before-add,on-demand", "priority" => "1" } } %>
```


## Response

```
<%= headers 200 %> <%= json :design_attachment %>
```

# Delete

Remove the specified attachment in this design component.

```
DELETE /assemblies/:assembly/design/platforms/:platform/components/:component/attachments/:attachment
```

## Response

```
<%= headers 200 %>
```
