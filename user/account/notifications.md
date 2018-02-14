---
layout: wmt/docs
side-navigation: user-navigation.html
title: Notifications
---

# {{ page.title }}

A number of events in an organization in OneOps can trigger notifications. These
events include deployments, monitors, scale and repair actions.

Notifications can be sent to a number of receiving _notification sinks_
including simple URLs, Jabber, Amazon SNS and Slack.

## Configuration

To set up and configure notifications, follow these steps:

1. Access the settings for the desired organization
   1. Click _Settings_ under the specific organization in the left hand navigation
   2. Alternative click on the settings icon in the header
2. Select the _notifications_ tab.

3. Press the _Add_ button on top of the list of notifications to create a new
   notification sink.

4. Or click on the name of a specific notification sink in the list to access
its configuration in the _Details_ section on the right. Pressing the _Edit_
button allows you to change the configuration.

5. Provide all desired values and press _Save_.

Each notification sink includes a number of generic as well as type-specific
configuration settings.  The type is selected as a first action when creating a
new notification sink.

The generic settings are:

- _Name:_ the required name of the notification sink.</dd>

- _Global - Description:_ optional description for the notification sink</dd>

- _Filtering:_ fine-grained control over which messages are sent is possible
with filtering enabled. You can configure filters with criteria such as _Event
Type_, _Severity Level_, _Environment Profile Pattern_, _NS Paths_, _Monitoring
Clouds_ and _Message Pattern_. Typically filtering should be enabled so that
specific the notification sync is not flooded by all events for the
organization. Instead it can be filtered to e.g. only receive specific events
for a specific assembly with a combination of the available criteria.

- _Transformation:_ message can be transformed before they are sent

- _Dispatching - Message Dispatching_: configure to use synchronous or
  asynchronous mechanism for dispatching event messages.</dd>

You can select multiple notification sinks to similar targets with different
filters to achieve the desired verbosity and message frequence.

Type-specific configuration and usage is explained in the the sink specific sections:

* [Notifications to URL](#notifications-to-url)
* [Notifications to Concord ](#notifications-to-concord)
* [Notifications to Amazon SNS](#notifications-to-amazon-sns)
* [Notifications to Jabber](#notifications-to-jabber)
* [Notifications to Slack](#notifications-to-slack)

<a name="notifications-to-url"/>

## Notifications to URL

Notifications can be configured to use a custom URL as notification sink.

In preparation you need to create a web application that receives notifications
on a specific URL.

Then follow these steps to configure and use a URL notification sink.

1. [Create a new notification sink](#notification) with the type
   `account.notification.url.sink`.

2. Configure the _Endpoint URL_ of the server in the _Endpoint_ section.

3. If the URL is protected from anonymous posts, provide _Service Username_ and
_Service Password_ in the _Credentials_ section.

4. _Save_ the new notification sink.


<a name="notifications-to-concord"/>

## Notifications to Concord

The workflow orchestration system Concord is an example of a system that can be
configured as a [URL sink](#notifications-to-url) to receive notifications from
OneOps.

The _Endpoint URL_ needs to be configured to use the oneops event endpoint of
the Concord API e.g. at `https://concord.example.com/api/v1/events/oneops`.

Typically credentials are required and need to be configured with a service
username and password.

To enable Concord triggers for compute replacements filtering is setup with:

- Event Type set to Deployment
- Severity Level set to All
- NS Path to / to send events for all assemblies in the org
- Include Ci enabled with the class patterns bom.Compute, bom.oneops.1.Compute
  and bom.main.2.Compute to capture all computes
- Include Ci on Replace enabled

This allows a Concord project to configure a trigger that can react to the 
replace compute events in OneOps by calling a workflow. This can for example be
used to run an Ansible playbook against a replaced compute.

<a name="notifications-to-amazon-sns"/>

## Notifications to Amazon SNS

Notifications can be configured to use the
[Amazon Simple Notification Service](https://aws.amazon.com/sns/) as a
notification sink.

In preparation you need to create an Amazon SNS account and an access key. Then
follow these steps to configure and use an SNS notification sink.

1. [Create a new notification sink](#notification) with the type
   `account.notification.sns.sink`.

2. Provide your SNS credentials in _Credentials_ section including the _Access
   Key_ and the _Secret Key_.

3. _Save_ the new notification sink.

5. Go to the SNS section in the Amazon AWS console.

4. The first notification event creates an SNS topic for that
environment. Subsequent notifications are posted to the same topic.

6. Subscribe to the topic with your email or distribution list.


<a name="notifications-to-jabber"/>

## Notifications to Jabber


Notifications can be configured to use the
[open XMPP messaging standard](https://xmpp.org/) originally introduced by
[Jabber](http://jabber.org) as notification sink.

In preparation you need to get access details for the XMPP/Jabber server. Then
follow these steps to configure and use an SNS notification sink.

1. [Create a new notification sink](#notification) with the type
   `account.notification.jabber.sink`.

2. Configure the connection to the XMPP/Jabber server in _Settings_ section.
    1. _Chat Server_ - hostname of the chat server.
    2. _Chat Server Port_ - TCP port of the chat server. 
    3. _Conferences Identifier_ - identifier for the chat conference to receive
       the notifications.
    4. _User Account_ - account to authenticate to the server and use to post
       the notifications.
    5. _User Password_ - password of the user account.

3. _Save_ the new notification sink.


<a name="notifications-to-slack"/>

## Notifications to Slack


Notifications can be configured to use [Slack](https://slack.com/) channels as a
notification sink.

### Slack Administrator Setup

In preparation an [administrator](/admin/) needs to create a
[custom bot user](https://api.slack.com/bot-users) for each Slack team that
wants to receive notifications:

1. Create a new custom bot user. If you are currently logged into Slack in your
   browser, [try this link](https://my.slack.com/services/new/bot).
2. Select the Slack team that will receive the notifications.
3. Choose a username for your bot - e.g. oneopsbot
4. Click the _Add Bot Integration_ button
5. Update other settings for the bot user as desired.
5. Note down the _API Token_ for the configuration in OneOPs.

In addition you need to configure the Slack integration in the OneOps
notification service called _Antenna_ by setting the environment variables for
the Tomcat server running Antenna:

`slack.url`: The URL to reach the Slack chat service. Defaults to
`https://slack.com`. You need to ensure that this host can be reached on the
network. In an open deployment on the internet this is already the case. If
OneOps runs in an isolated network you need to open up the network or introduce
a reverse proxy server that can forward requests between Antenna and Slack. One
option for such a reverse proxy server is
[NGINX](https://www.nginx.com/resources/admin-guide/reverse-proxy/).

`slack.tokens`: The Slack bot API tokens need to be provided to Antenna with
this configuration. The supported syntax is a comma separated list of all your
bot user tokens for each team like `team1=<token1>,team2=<token2>`.

Assuming your OneOps installation is managed and run by OneOps itself you can
configure those environment variables for Antenna with the OneOps user
interface:

- Locate the assembly for OneOps core
- Inspect the _Design_ and locate the _Antenna_ platform in the platforms list
  on the right
- Click on the _Antenna_ platform
- Click on the _Tomcat_ component in the list of components on the right
- Press the _Edit_ button
- Locate _Environment Variables_ and add `slack.url` and `slack.tokens` as
  required
- Press the _Save_ button

If OneOps is running via a manual install and is not managed by OneOps itself
you have to configure the environment variables in the startup scripts for the
Tomcat instance running Antenna.

### Slack User Configuration

With the administrator setup completed you can create your Slack notification
sinks:

1. [Create a new notification sink](#notification) with the type
   `account.notification.slack.sink`.

2. Add the desired _Channels_ to receive notifications in the _Slack Config_
   section.

3. Optionally configure _Text Formats_ for inserting additional texts into the
message based on detected text. E.g., setting the _Key_ field to `critical` and
_Value_ to `:fire: ${text}` results in the Fire emoji to be inserted before any
occurrence of `critical`.

4. If desired, enable _Include Notification Fields_.

5. _Save_ the new notification sink.

6. Ensure that the Slack bot user has access to the channel. For public
   channels, this is automatically the case. For private channels the bot user
   needs to be added to the channel users.
