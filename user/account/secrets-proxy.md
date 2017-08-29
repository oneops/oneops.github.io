---
layout: user-doc
title: Secrets Proxy
---

The OneOps Secrets Proxy is a proxy server that sits in front of a
[Keywhiz server](https://square.github.io/keywhiz/)
used for secrets storage. It understand the concepts and access configuration
of OneOps and allows a user to store secrets in Keywhiz and access them in
their OneOps assemblies via the
[secrets client component](../design/secrets-client-component.html).

The source can be found at
[https://github.com/oneops/secrets-proxy](https://github.com/oneops/secrets-proxy).

## Installation

Currently installation requires you to build the proxy from source and deploy it
via a custom generated OneOps assembly using one customlb platform with the
necessary configuration.

In addition a Keywhiz server installation is required for the secret
storage. This installation can be using OneOps via a customlb platform or a
similar approach or use a separate deployment outside OneOps.

## Cloud Configuration

Once the Secrets Proxy is installed, the `secrets cloud service` has to be added
to each cloud and configured to point at the secrets proxy. In addition, the
`certificate cloud service` has to be configured on each cloud.
