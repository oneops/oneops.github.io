---
layout: wmt/docs
side-navigation: user-navigation.html
title: Notifications to URL
---

# Notifications to URL

[Notifications](./notifications.html) can be configured to use a custom URL as notification sink.

In preparation you need to create a web application that receives notifications on a specific URL.

Then follow these steps to configure and use a URL notification sink.

1. Create a [new notification sink](./notifications.html) with the type `account.notification.url.sink`.
2. Configure the _Endpoint URL_ of the server in the _Endpoint_ section.
3. If the URL is protected from anonymous posts, provide _Service Username_ and _Service Password_ in the _Credentials_
section.
4. _Save_ the new notification sink.
