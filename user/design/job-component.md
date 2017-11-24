---
layout: wmt/docs
side-navigation: user-navigation.html
title: Job Component
---

# Job Component

The _job_ [component](./components.html) is available in a number of platforms and can be used to execute specific
[cron](https://en.wikipedia.org/wiki/Cron) tasks on a regular schedule. Examples are _cassandra_, _es_ and many others.
Typically it is configured as an optional component and can simply be activated by adding it with the _+_ button in the
component list.

You can locate defined jobs with a [search](../general/search.html] using a _Class_ value of _manifest.Job_ for
configured jobs in the design phase or _bom.Job_ for deployed jobs in the operation phase.

# Attributes

Besides the global configuration available for any component such as _Name_ and _Description_, you can configure the
following attributes:

_Schedule_: You define the schedule by specifying a values for _Minute_, _Hour_, _Day_, _Month_ and _Weekday_. Numbers
as applicable for the range as well as `*` as placeholder for any value are valid.

_Command_: The command line command or script to execute.

_Options - User_: Specify the operating system user to use for the command execution.

_Options - Variables_: You can define environment variable values to set prior to the job execution.
