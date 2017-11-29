---
layout: wmt/docs
side-navigation: user-navigation.html
title: Set Variable Cloud Scaling Percentage
id: set-variable-cloud-scaling-percentage
---

# Set Variable Cloud Scaling Percentage

## Solution

Cloud scaling percentage is used to determine the percentage to add or reduce a compute count for a given cloud.

For example: A platform scale configuration has current=10 and has 4 clouds added.


* If one of the cloud scale percentages is updated to 120%, then the target cloud will be scaled-up to 12 total computes.
* If another cloud scale percentage is updated to 80%, then the target cloud will be scaled-down to 8 total computes.

This allows a variable number of computes per cloud for a given platform.


* Cloud scale can be edited per platform on the transition platform page.
* By default, all cloud scale percentages are set to 100.
* The Cloud scale field allows any positive integer value.

## Edit Cloud Scale Percentage


1. In the transition phase, select the environment and then the platform.
2. From the list of clouds for the given platform, click the list icon on top, right side of the cloud and select **Cloud scale percentage.**
3. To set the scaling percent of cloud, enter a positive integer value.
