---
layout: post
title: One Source - OneOps Releases 17.08.02 and Earlier
published: true
authors: [mmoser]
---

Wow! What a whirlwind of changes to get it all together into one repository! If
you look at our [OneOps GitHub organization](https://github.com/oneops) you notice that the
number of repositories is greatly reduced now. The refactoring necessary to
get about a dozen repositories merged and the related changes to release
processes and more needed to be taken care of so our public releases dropped
a bit. We still did a bunch of them internally and released numerous changes to
our users. 

<!--more-->


## New Features and Signficant Changes

- Most of the project is located in 
[one source code repository](https://github.com/oneops/oneops)
- [Build instructions](../../developer/core-development/index.html) are much
  simplified
- Build can now produce a VM image to get OneOps up and running
- CMS database upgrade to PostgreSQL 9.6 resulting in large performance gains
- Updated and correct cost numbers for compute usage
- Configurable TCP port setting for MS SQL Server -
  [PR](https://github.com/oneops/circuit-oneops-1/pull/925)
- Replaced stored procedure usage in database layer to improve performance,
  [PR1](https://github.com/oneops/cmsdal/pull/90),
  [PR2](https://github.com/oneops/cmsdal/pull/94),
  [PR3](https://github.com/oneops/cmsdal/pull/95)


## Bug Fixes and Improvements

- Cost-related fixes in search index -
  [PR](https://github.com/oneops/oneops/pull/58)
- Consistent cleanup of CI resources in database and search index -
  [PR](https://github.com/oneops/oneops/pull/44)
- Fixed LB binding issue for computes in MS Azure -
  [PR](https://github.com/oneops/circuit-oneops-1/pull/915)
- Specific platform release discard changes in design are now visible in
  timeline - [PR](https://github.com/oneops/oneops/pull/18)
- Default pack catalog is now available to all organizations
- Improved catalog display for different pack versions
- Allow component attribute update via API, even when attributes are locked
- Automatically add owner email to auto-generated certificate components -
  [PR](https://github.com/oneops/circuit-oneops-1/pull/868)
- Improved handling of compute reboots -
  [PR](https://github.com/oneops-archive/oneops-admin/pull/194)
- Display warning message to prevent deployment to all clouds at once
- Improved support for volume component resizing -
  [PR](https://github.com/oneops/circuit-oneops-1/pull/906)

## Windows OS Related Improvements

- Certificate component Windows support improvement -
  [PR](https://github.com/oneops/oneops/pull/45)
- Support for multiple storage and volume components on Windows computes -
  [PR](https://github.com/oneops/circuit-oneops-1/pull/920)
- Support for parallem component runs - [PR](https://github.com/oneops/oneops/pull/34)
- Avoid assignment of new IP due to touch operation on compute -
  [PR](https://github.com/oneops/circuit-oneops-1/pull/889)
- Creation of conf files with compute metadata -
  [PR](https://github.com/oneops/circuit-oneops-1/pull/873)
- Add windows specific attributes for failover cluster and other configuration -
  [PR](https://github.com/oneops/circuit-oneops-1/pull/873)
- Retain access to persistent storage across compute replacements -
  [PR](https://github.com/oneops/circuit-oneops-1/pull/865)
- Improved domain joining for computes -
  [PR](https://github.com/oneops/circuit-oneops-1/pull/856)

## Source Release Tags

- [oneops tag release-17.08.02-01](https://github.com/oneops/oneops/tree/release-17.08.02-01)
- [oneops tag release-17.06.07-14](https://github.com/oneops/oneops/tree/release-17.06.07-14)
- [oneops tag release-17.06.07-08](https://github.com/oneops/oneops/tree/release-17.06.07-08)
- [oneops tag release-17.06.07-05](https://github.com/oneops/oneops/tree/release-17.06.07-05)
- [oneops tag release-17.06.07-04](https://github.com/oneops/oneops/tree/release-17.06.07-04)
- [oneops changelog](https://github.com/oneops/oneops/commits/master)
- [circuit-oneops changelog](https://github.com/oneops/circuit-oneops-1/commits/master)

Enjoy,

_OneOps Team_
