---
layout: wmt/docs
side-navigation: user-navigation.html
title: Notifications to Jabber
---

# Notifications to Jabber

[Notifications](./notifications.html) can be configured to use the [open XMPP messaging standard](https://xmpp.org/)
originally introduced by [Jabber](http://jabber.org) as notification sink.

In preparation you need to get access details for the XMPP/Jabber server.

Then follow these steps to configure and use an SNS notification sink.

1. Create a [new notification sink](./notifications.html) with the type `account.notification.jabber.sink`.
2. Configure the connection to the XMPP/Jabber server in _Settings_ section.
    1. _Chat Server_ - hostname of the chat server.
    2. _Chat Server Port_ - TCP port of the chat server.
    3. _Conferences Identifier_ - identifier for the chat conference to receive the notifications.
    4. _User Account_ - account to authenticate to the server and use to post the notifications.
    5. _User Password_ - password of the user account.
3. _Save_ the new notification sink.
