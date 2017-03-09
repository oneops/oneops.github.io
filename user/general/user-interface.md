---
layout: user-doc
title: User Interface
---

OneOps provides a very powerful user interface with numerous features to enable the user to perform their tasks
efficiently:

- [Overview](#overview)
- [Navigation bar](#navigation-bar)
- [Lists](#lists)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Short URLs](#short-urls)
- [Search](./search.html)
- [Favorites](./favorites.html)

> Explore the various features to save time in your usage of OneOps. 

## Overview

The user interface provides simple top bar to access some features on the top:

<img src="/assets/img/ui/ui-overview-topbar.png"/>

The top bar includes the following control and segments:

- [Navigation bar](#navigation-bar) toggle
- OneOps logo
- Organization dialog with items to search, manage and navigate to organizations
- Username with link to profile
- [Search](./search.html) button
- Favorites dialog with items to manage and navigate to [favorites](./favorites.html)
- Feedback link
- Sign out button

Clicking on the the navigation bar toogle replaces the top bar with the more powerful navigation bar resulting in
display similar to the following example. 

<img src="/assets/img/ui/ui-overview.png"/>

The black horizontal bar displays a breadcrumb navigation to the current entity and starts at the current organization.
The right side of the same bar contains link to the three assembly lifecycle phases - design, transition and operations.

## Navigation Bar

The main navigation bar visible on the left includes the following features (top to bottom, left to right)

- OneOps logo
- Water drop icon to change color scheme used for the navigation bar
- Pin icon to prevent automatic collapse of navigation bar and keep it expanded 
- X icon to close the navigation bar
- Display of current organization and search button to change organization
- Catalogs access link 
- Clouds access link
- Assemblies access link
- [Search](./search.html) access link
- Settings link to access the current organization's profile
- Navigation aid for the current assembly
- Optional, configurable links to support, file issues, provide feedback, documentation and release notes
- Username with link to profile
- [Search](./search.html) button
- Favorites dialog with items to manage and navigate to [favorites](./favorites.html)
- Feedback link
- Sign out button

The navigation aid for the current assembly includes links to the design, transition and operate phases and the
applicable entities. Some items can be expanded and contracted. 

The navigation bar adapts to the current user privileges and the current context.

## Phases Wizard

The phases wizard is displayed above the main content area and contains links to actions related to Account setup and
the  phases Design, Transition and Operate. The links are all context sensitive to the current organization and
assembly. The current phase is highlighted in green. It can be disabled with the close button on the right.

## Lists

Lists consist of a powerful header and the line items. The header on lists includes feature to sort and filter the data
as well as perform actions. It items display data and include a check box for bulk operation actions on the left and
item-specific action buttons on the right.

## Keyboard Shortcuts

OneOps supports a number of keyboard shortcuts that enable an advanced user to navigate to specific components and other
entities within the context of the current organization. These keyboard shortcuts trigger the appearance of an input
control in a pop up dialog. You can type multiple values to narrow down the returned data to the desired results. Up to
20 results are displayed. Clicking on a result allows the user to navigate to the entity.

`ALT-o`: navigate to a specific _organization_.<br/>
`ALT-d`: navigate to an entity in the _design_ phase.<br/>
`ALT-t`: navigate to an entity in the _transition_ phase.<br/>
`ALT-p`: navigate to an entity in the _operate_ phase.<br/>
`ALT-g`: _go_ to an entity, adding a stand-alone `d`, `t` or `o` character to the query narrows the results to the design,
transition or operation phases.<br/>

## Short URLs

OneOps supports some short URLs. A user can type these URLs faster and navigate to the entity with a known identifier. 

Deployment:

* UI access at `/r/deployment/<deployment_id>` or shorter `/r/d/<deployment_id>`
* JSON at `/l/deployment/<deployment_id>` or shorter `/l/d/<deployment_id>`

Releases:

* UI access at `/r/release/<release_id>`  or shorter `/r/r/<release_id>`
* JSON at `/l/release/<release_id>`  or shorter `/l/r/<release_id>`

Procedure:

* UI access at `/r/procedure/<procedure_id>`  or shorter `/r/p/<procedure_id>`
* JSON at `/l/procedure/<procedure_id>`  or shorter `/l/p/<procedure_id>`

Instance:

* UI access at `/r/instances/<instance_id>`  or shorter `/r/i/<instance_id>`
* JSON at `/l/i/<instance_id>` 