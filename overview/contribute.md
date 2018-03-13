---
layout: wmt/project
title:  Contribute
---

Our code is publicly available in several repositories on GitHub at
[https://github.com/oneops](https://github.com/oneops)

We utilize GitHub for issue tracking and contributions. You can contribute in two ways:

1. Report an issue or file a feature request [as an issue](#issues).
2. Add features, fix bugs yourself, or contribute your code with a pull request.


## Contributing Code or Documentation

Contributions are accepted as pull requests on the relevant repository.

Contributor are required to sign our by Contributor License Agreement
(the “CLA”). Each pull request is automatically verified, against the list
of contributors that have signed the CLA. If not, you are required to sign the
CLA for the contribution to be merged.

Further details are available in the
[Walmart CLA repository](https://github.com/walmartlabs/walmart-cla/).

The website is the main documentation for OneOps and we welcome issues and pull
requests for it as well. If you want to help, check out our
[documentation guideline](./doc-guideline.html).

## Code Review Process

Each GitHub pull request will go through 3 step before merge:

1. We will execute our automated test cases against the pull request. If the
tests failed the pull request will be  rejected with comments provided on the
failures.
2. If tests pass, the OneOps engineering team member will do the review of the
changes. Technical communication possible via github.com pull request page. When
ready, your pull request will be tagged with label `Ready For Merge`.
3. Your patch will be merged into `master` including necessary documentation
updates.

## Apache 2.0 License

OneOps uses the [Apache 2.0 license](https://github.com/oneops/oneops/blob/master/LICENSE) and any changes or
enhancements have to use the same license.

<a name="issues"></a>
## OneOps Issue Tracking in GitHub

If you are familiar with OneOps and know the repository that is causing you a problem or if you have a feature request
on a specific component, you can file an issue in the corresponding GitHub project. All of our Open Source Software
can be found in our [GitHub organization](https://github.com/oneops/).

Otherwise you can file your issue in the [OneOps project](https://github.com/oneops/oneops/issues) and we will make sure
it gets filed against the appropriate project.

To decrease the back and forth in issues, and to help us get to the bottom of them quickly, we use the issue template
below. You can copy/paste this template into the issue you are opening and edit it accordingly.

<a name="issuetemplate"></a>

```
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
```

## Provide Feedback or Contact Us

You can provide feedback or contact us by sending email to opensource@walmartlabs.com or by using one of the corresponding
[OneOps Slack channels]({{ site.slack_url}}) : #admin, #devel, or #user.
