---
layout: wmt/docs
side-navigation: user-navigation.html
title: Storage Component
---

# Storage Component

The _storage_ [component](./components.html) is of core importance and part of most platforms since it
defines any attached "block" storage accessible to the compute.

Once you define your storage configuration using the below information, you would continue the persistent storage
setup using the [volume compnent](./volume-component.html).

## Configuration

Besides the global configuration available for any component such as _Name_, you can configure the
following attributes:

_Size_: is used to specify the total space allocated represented in GB. Note: specific RAID configurations
will result in smaller usable volume sizes.<br>
_Slice Count_: is used to specify how many sections of storage to slice the size into. If you are wanting two
linux volumes named "/mystuff" and "/archive" you would specify 2. Please refer to the notes below for RAID levels.<br>
_Storage Type_: is used to specify the speed of disk. Typically, Standard is for spinning disks and IOPS is
for Premium SSD's.  Please refer to the Types offered by your cloud provider and how they are mapped to these
options.


### Miscellaneous Notes:
RAID levels and Slice Count reference:
* Raid 0 (Stripe)
* Raid 1 (Mirror) — 2 Drives
* Raid 5 (Drives with Parity) — Minimum 3 Drives
* Raid 6 (Drives with Double Parity) — Minimum 4 Drives
* Raid 10 (Mirror+Stripe) or 0+1 (Stripe+Mirror) — Minimum 4 Drives
* Raid 50 (Parity+Stripe) — Minimum 6 Drives
* Raid 60 (Double Parity+Stripe) — Minimum 8 Drives
