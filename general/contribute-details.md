---
layout: general-doc
title: Contribution
---

# Contribution Details

Our code is publicly available in several repos on GitHub at
[https://github.com/oneops](https://github.com/oneops)

We utilize GitHub for issue tracking and contributions. You can contribute in two ways:

1. Report an issue or file a feature request [as an issue](#issues).
2. Add features, fix bugs yourself, or contribute your code with a pull request.


# Contributing Code or Documentation

For small changes — little bug fixes, correcting typos, and the like — please submit pull requests to any of our 
projects. For larger changes, we have to ask you to electronically sign a statement that indicates two things:

1. You are willingly licensing your contributions under the terms of the open source license of the project that
you are contributing to.
2. You are legally able to license your contributions as stated.

Once you sign this Contributor License Agreement (the “CLA”), we will  be able to merge your contributions and with only
the friction that results from the usual technical back-and-forth of a vibrant open source project. More details are on
the [Sign the CLA page](https://github.com/oneops/OneOps/blob/master/sign-cla.md).

Create [Pull-Requests](https://help.github.com/articles/creating-a-pull-request/) on your branch from master and we 
will review and merge.

The website is the main documentation for OneOps and we welcome issues and pull requests for it as well. If you want to
help, check out our [documentation guideline](./doc-guideline.html).

# Code Review Process

Each GitHub pull request will go through 3 step before merge:

1. We will execute our automated test cases against the pull request. If the tests failed the pull request will be 
rejected with comments provided on the failures.
2. If tests pass, the OneOps engineering team member will do the review of the changes. Technical communication possible
via github.com pull request page. When ready, your pull request will be tagged with label `Ready For Merge`.
3. Your patch will be merged into `master` including necessary documentation updates and you will be included in 
`CHANGELOG.md`.

# Apache 2.0 License

OneOps uses the [Apache 2.0 license](https://github.com/oneops/oneops/blob/master/LICENSE) and any changes or
enhancements have to use the same license.

# <a name="issues"></a> OneOps Issue Tracking in GitHub

If you are familiar with OneOps and know the repository that is causing you a problem or if you have a feature request
on a specific component, you can file an issue in the corresponding GitHub project. All of our Open Source Software 
can be found in our [GitHub organization](https://github.com/oneops/).

Otherwise you can file your issue in the [OneOps project](https://github.com/oneops/oneops/issues) and we will make sure
it gets filed against the appropriate project.

To decrease the back and forth in issues, and to help us get to the bottom of them quickly, we use the issue template 
below. You can copy/paste this template into the issue you are opening and edit it accordingly.

<a name="issuetemplate"></a>

~~~
### Version:
[Version of the project installed]

### Environment:
[Details about the environment such as the Operating System, cookbook details, etc.]

### Scenario:
[What you are trying to achieve and you can't?]

### Steps to Reproduce:
[If you are filing an issue, what are the things we need to do to reproduce your problem?]

### Expected Result:
[What are you expecting to happen as the consequence of the reproduction steps above?]

### Actual Result:
[What actually happens after the reproduction steps?]
~~~

## Useful GitHub Queries

Contributions go through a review process to improve code quality and avoid regressions. Managing a large number of
contributions requires a workflow to provide queues for work such as triage, code review, and merging. A semi-formal
process has evolved over the life of the project. Chef maintains this process pending community development and
acceptance of an [RFC](https://github.com/chef/chef-rfc). These queries help track contributions through this process:

* [Issues that are not assigned to a team](https://github.com/oneops/oneops/issues?q=is%3Aopen+-label%3AAIX+-label%3ABSD+-label%3Awindows+-label%3A%22Chef+Core%22++-label%3A%22Dev+Tools%22+-label%3AUbuntu+-label%3A%22Enterprise+Linux%22+-label%3A%22Ready+For+Merge%22+-label%3AMac+-label%3ASolaris+)
* [Untriaged Issues](https://github.com/oneops/oneops/issues?q=is%3Aopen+is%3Aissue+-label%3ABug+-label%3AEnhancement+-label%3A%22Tech+Cleanup%22+-label%3A%22Ready+For+Merge%22)
* [PRs to be Reviewed](https://github.com/pulls?q=is%3Aopen+is%3Apr+user%3Aoneops)
* [Suitable for First Contribution](https://github.com/oneops/oneops/labels/Easy)


# Provide Feedback or Contact Us

You can provide feedback or contact us by sending email to support@oneops.com or by using one of the corresponding 
[OneOps Slack channels]({{ site.slack_url}}) : #admin, #devel, or #user.
