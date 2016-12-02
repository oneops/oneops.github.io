---
layout: dev-doc
title: Documentation Guideline
---

The OneOps documentation is part of the publicly available web site at [http://www.oneops.com](http://www.oneops.com). 
Contributions are welcome and managed in the [same manner as code contributions](./index.html).

## Technical Details

The web site, including the documentation, is managed in the repository
[https://github.com/oneops/oneops.github.io](https://github.com/oneops/oneops.github.io). It is a static web site
generated from source using [Jekyll](https://jekyllrb.com/). All content is written using Markdown, specifically
[GitHub Flavored Markdown](https://help.github.com/categories/writing-on-github/) parsed by
[kramdown](https://kramdown.gettalong.org/index.html). More information about the site and documentation is available
in the [README](https://github.com/oneops/oneops.github.io/blob/master/README.md).

The `master` branch contains the current deployment and any changes in this branch are automatically deployed. Therefore
submit your changes as pull requests, if possible to allow us to run a verification.

## Writing Guideline

When editing existing, or writing new documentation, please try to adhere to the following guidelines.

- Ideal line width is 120 characters or less.
- Do not use TAB and other characters that invalidates JSON formatted content.
- Use a spell checker.
- Observe the usage of title case in section and page titles.
- Use consistent naming in text e.g. always OneOps and not oneops, SSH and not ssh, URL and not url.

For image inclusion there are some specific requests:

- Do not add too many images.
- Keep the image size suitable for the web site.
- Images should concentrate on the relevant content.
- PNG format is preferred.

The better you follow these guidelines, the faster your changes will be merged.

## Pull Requests and Review

Before merging a pull request we will perform some validation.

- Review of content regarding guidelines above.
- Provide feedback beyond the guidelines as applicable.
- Perform a local build with Java Jekyll and Ruby Jekyll.
- Visual inspection of new content to ensure rendering works as intended in markdown source.
- Link check run.
