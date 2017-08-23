---
layout: user-doc
title: Components
---

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

Specific documentation is available for the following components:

- [Apache HTTP Server Component](./apache-http-server-component.html)
- [Chocolatey Package Component](./chocolatey-package-component.html)
- [Compute Component](./compute-component.html)
- [Cron Job Component](./cron-job-component.html)
- [DotNet Framework Component](./ms-dotnetframework-component.html)
- [Fully Qualified Domain Name (fqdn) Component](./fqdn-component.html)
- [IIS Website Component](./ms-iis-website-component.html)
- [Java Component](./java-component.html)
- [Keystore Component](./keystore-component.html)
- [Load Balancer (lb) Component](./lb-component.html)
- [NuGet Package Component](./nuget-package-component.html)
- [Secrets Client Component](./secrets-client-component.html)
- [SSL CertificateComponent](./ssl-certificate-component.html)
- [Storage Component](./storage-component.html)
- [User Component](./user-component.html)
- [Volume Component](./volume-component.html)
- [Website Component](./website-component.html)







