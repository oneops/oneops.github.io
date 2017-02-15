---
layout: user-doc
title: Notifications to Amazon SNS
---

[Notifications](./notifications.html) can be configured to use the
[Amazon Simple Notification Service](https://aws.amazon.com/sns/) as a notification sink.

In preparation you need to create an Amazon SNS account and an access key

Then follow these steps to configure and use an SNS notification sink.

1. Create a [new notification sink](./notifications.html) with the type `account.notification.sns.sink`.
2. Provide your SNS credentials in _Credentials_ section including the _Access Key_ and the _Secret Key_.
3. _Save_ the new notification sink.
4. The first notification event creates an SNS topic for that environment. Subsequent notifications are posted to the
same topic.
5. Go to the SNS section in the Amazon AWS console.
6. Subscribe to the topic with your email or distribution list.
