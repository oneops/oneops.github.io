---
layout: wmt/post
title: Launching Secrets Management
published: true
authors: [mmoser]
---

When you build up complex, powerful features in an application it often a good
idea to work with another application that is already best in its class. Done
right this can yield pretty amazing results. The new secrets management in
OneOps is a good example for this approach as it uses the great tool
[Keywhiz](https://square.github.io/keywhiz/) from
[Square](https://square.github.io/).

<!--more-->

Our new secrets management system was implemented by great teamwork across
multiple teams at Walmart all working together with Square on Keywhiz-related
improvements and configuration and the OneOps-related improvements.

And we ended up with a pretty impressive setup with the following components:

- A large, fail-safe deployment of Keywhiz servers and backing database systems
  for secrets storage encrypted with HSMs
- A deployment of the new [OneOps Secrets Proxy](../../user/account/secrets-proxy.html)
- A pre-configured binary of the OneOps Secrets CLI for user convenience
- Addition of the [secrets client component](../../user/design/secrets-client-component)
  to all platforms

The setup allows usage of secrets such as username/password information in files,
certificates, keys, tokens and others to be managed in a secure manner end to
end. Your OneOps assemblies can access these secrets on your computes as desired
and the management and provisioning to the computes is completely secure.

Our deployment is using over a dozen Keywhiz servers and is mostly likely one of
the largest Keywhiz production deployments. It is  scaled to handle well beyond
100.000 computes with secret clients.

To allow users to ramp up usage quickly, we have created a new training class -
[OneOps User Training: Level 3 - Advanced Examples](../overview/training.html#user-3)
that adds secrets management as a first module.

A special thank you has to go out to the team at
[Square](https://square.github.io/). We look forward to further collaboration!

_OneOps Team_
