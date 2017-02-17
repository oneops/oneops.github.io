---
layout: user-doc
title: Notifications to Slack
---

[Notifications](./notifications.html) can be configured to use [Slack](https://slack.com/)
channels as a notification sink.

## Administrator Setup

In preparation an [administrator](/admin/) needs to create a [custom bot user](https://api.slack.com/bot-users)
for each Slack team that wants to receive notifications:

1. Create a new custom bot user. If you are currently logged into Slack in your browser,
   [try this link](https://my.slack.com/services/new/bot).
2. Select the Slack team that will receive the notifications.
3. Choose a username for your bot - e.g. oneopsbot
4. Click the _Add Bot Integration_ button
5. Update other settings for the bot user as desired.
5. Note down the _API Token_ for the configuration in OneOPs.

In addition you need to configure the Slack integration in the OneOps notification service called _Antenna_ by
setting the environment variables for the Tomcat server running Antenna:

`slack.url`: The URL to reach the Slack chat service. Defaults to `https://slack.com`. You need to ensure that
this host can be reached on the network. In an open deployment on the internet this is already the case. If OneOps
runs in an isolated network you need to open up the network or introduce a reverse proxy server that can forward
requests between Antenna and Slack. One option for such a reverse proxy server is
[NGINX](https://www.nginx.com/resources/admin-guide/reverse-proxy/).

`slack.tokens`: The Slack bot API tokens need to be provided to Antenna with this configuration. The supported
syntax is a comma separated list of all your bot user tokens for each team like `team1=<token1>,team2=<token2>`.

Assuming your OneOps installation is managed and run by OneOps itself you can configure those environment
variables for Antenna with the OneOps user interface:

- Locate the assembly for OneOps core
- Inspect the _Design_ and locate the _Antenna_ platform in the platforms list on the right
- Click on the _Antenna_ platform
- Click on the _Tomcat_ component in the list of components on the right
- Press the _Edit_ button
- Locate _Environment Variables_  and add `slack.url` and `slack.tokens` as required
- Press the _Save_ button

If OneOps is running via a manual install and is not managed by OneOps itself you have to configure the
environment variables in the startup scripts for the Tomcat instance running Antenna.

## User Configuration

With the administrator setup completed you can create your Slack notification sinks:

1. Create a [new notification sink](./notifications.html) with the type `account.notification.slack.sink`.
2. Add the desired _Channels_ to receive notifications in the _Slack Config_ section.
3. Optionally configure _Text Formats_ for inserting additional texts into the message based on detected
text. E.g., setting the _Key_ field to `critical` and _Value_ to `:fire: ${text}` results in the Fire emoji to be
inserted before any occurrence of `critical`.
4. If desired, enable _Include Notification Fields_.
5. _Save_ the new notification sink.
6. Ensure that the Slack bot user has access to the channel. For public channels, this is automatically the case. For private channels the bot user needs to be added to the channel users.
