---
layout: user-doc
title: Keywhiz Proxy
---

The OneOps Keywhiz Proxy is a proxy server that sits in front of a
[Keywhiz server](https://square.github.io/keywhiz/)
used for secrets storage. It understand the concepts and access configuration
of OneOps and allows a user to store secrets in Keywhiz and access them in
their OneOps assemblies via the
[Keywhiz client component](../design/keywhiz-client-component.html)

The source can be found at
[https://github.com/oneops/keywhiz-proxy](https://github.com/oneops/keywhiz-proxy).

## Installation

Currently installation requires you to build the proxy from source and deploy it
via a custom generated OneOps assembly.

## Cloud Configuration

Once the Keywhiz Proxy is installed, the `keywhiz cloud service` has to be added
to each cloud and configured to point at the Keywhiz Proxy. In addition, the
`certificate cloud service` has to be configured on each cloud.