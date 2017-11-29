---
layout: wmt/docs
side-navigation: user-navigation.html
title: Ensure that Alerts for Production Environment are Sent to NOC
id: ensure-alerts-for-production-environment-are-sent-to-noc
---

# Ensure that Alerts for Production Environment are Sent to NOC

## Solution

If you want to enable NOC alerts for your production environment so that NOC can see them and take action, follow these steps:


1. Create CEN page(s) for your application.
2. After the CENs are created, send the link(s) to your team to get them reviewed and approved by the NOC.
3. Go to the environment in OneOps (Transition section) for which you want to enable NOC alerts.
4. Select each platform and then each component inside that platform and follow next steps for all of the components.
    1. Select the **monitors** tab.
    2. Select each monitor that you see on the page.
    3. At the bottom on the monitor details page, in the **Documentation** text field, enter the link to your CEN page
    4. Save it.
5. If you have approval from NOC for your CENs and if you have completed the Documentation fields as mentioned above, NOC will configure your environment to send alerts to NOC.

## See Also

<a href="/user/design/watching-an-assembly.html">Watching an Assembly</a>
