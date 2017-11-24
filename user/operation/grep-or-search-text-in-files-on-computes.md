---
layout: wmt/docs
side-navigation: user-navigation.html
title: Grep or Search Text in Files on Computes
id: grep-or-search-text-in-files-on-computes
---

# Grep or Search Text in Files on Computes

## Solution

OneOps has a couple of actions available on "Volume" components to help text-search one or multiple files on a compute.


* **log-grep:** You can search a regex text in one or multiple files. The result of the grep search is printed on the action execution log.
* **log-grep-count:** Same as above but the result printed is the total number of lines matched in each files and not the actual matched text content.

## Action Location


1. Go to the operations of any volume component and find the two actions in the actions drop-down menu as shown below.
2. Alternatively, go one level up and select multiple volume component objects and execute the actions on all of them at the same time.

<img src="/assets/docs/local/images/grep-action-location.png" class="img-responsive" />


## Action Parameters Window


1. It is necessary to enter two mandatory arguments:
  * Files (Use the absolute file path in which you want to search a regex. If you have multiple files to search in, separate their full paths with a space)
  * Search Regex Pattern
2. There are also two optional arguments to specify at what line # the search should start and at what line it should end. By default, it searches the whole file or files.

![Grep log new](/assets/docs/local/images/grep-log-new.png)

## log-grep Action Result

As shown below, the result of the log-grep action is printed on the output of the action execution. For each match, it prints the name of the file followed by the line # matched and then the actual line.

![Log grep action result](/assets/docs/local/images/log-grep-action-result.png)

## log-grep-count Action Result

As shown below, the result of the log-grep-count action is printed on the output of the action execution. It prints the filename followed by the total number of lines matched.

![Log grep count action result](/assets/docs/local/images/log-grep-count-action-result.png)
