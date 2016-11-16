---
layout: user-doc
title: Environment
id: environment
---

An Environment is a combination of your assembly (base design) with operational attributes to match the associated business requirements, such as a new dev, qa, or prod Environment. Changes from the base design can be pulled on demand, via UI or API. Based on the availability modes, in the transition you could see platform components defined for that mode . For eg for redundant mode you would see load balancer. 


* **Mix Platform Availability Mode:** For example, a load-balanced web with a single db (with backups)
* **DNS Domain:** Use custom DNS providers (route53, rackspace, dyndns)
* **Automation:** Continuous Delivery
