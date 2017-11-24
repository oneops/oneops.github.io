---
layout: wmt/docs
side-navigation: user-navigation.html
title: Components
---

# Components

Components are the building blocks used to assemble [packs](./packs.html) and therefore the platforms, that define your
assembly. Components in a pack can be required or optional and can depend on each other. Examples for components are
the compute, the operating system, the operating system user and many others.

You can see the components in the design view of your assembly in the list on the right.

Any component additions or configuration changes need to be deployed to take effect at runtime:

1. Add and/or change the component.
2. Press _Save_.
3. Create a assembly design release by pressing _Commit Design_.
4. Select the environment in transition.
5. Retrieve the design changes with _Pull Design_.
6. Implement the changes in transition by pressing _Commit and Deploy_
7. Observe the changes in operation of your chosen environment.

A number of base components are available in all platforms:

- [Artifact Component](./artifact-component.html)
- [Certificate Component](./certificate-component.html)
- [Compute Component](./compute-component.html)
- [Daemon Component](./daemon-component.html)
- [Download Component](./download-component.html)
- [File Component](./file-component.html)
- [Filebeat Component](./filebeat-component.html)
- [Firewall Component](./firewall-component.html)
- [Fully Qualified Domain Name (fqdn) Component](./fqdn-component.html)
- [Hostname Component](./hostname-component.html)
- [Job Component](./job-component.html)
- [Library Component](./library-component.html)
- [Logstash Component](./logstash-component.html)
- [Objectstore Component](./objectstore-component.html)
- [Operating System (os) Component](./os-component.html)
- [Secrets Client Component](./secrets-client-component.html)
- [Security Group (secgroup) Component](./secgroup-component.html)
- [Sensu Client (sensuclient) Component](./sensuclient-component.html)
- [Share Component](./share-component.html)
- [SSHKeys Component](./sshkeys-component.html)
- [Storage Component](./storage-component.html)
- [Telegraf Component](./telegraf-component.html)
- [User Component](./user-component.html)
- [Volume Component](./volume-component.html)

In addition specific components are available in various platforms and
documentation is available for a limited subset:

- [Apache HTTP Server Component](./apache-http-server-component.html)
- [Chocolatey Package Component](./chocolatey-package-component.html)
- [DotNet Framework Component](./ms-dotnetframework-component.html)
- [IIS Website Component](./ms-iis-website-component.html)
- [Java Component](./java-component.html)
- [Keystore Component](./keystore-component.html)
- [Load Balancer (lb) Component](./lb-component.html)
- [NuGet Package Component](./nuget-package-component.html)
- [Website Component](./website-component.html)
