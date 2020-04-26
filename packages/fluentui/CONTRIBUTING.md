# Contributing to `@fluentui/react-northstar` (and others under `packages/fluentui`)

**NOTE: This document currently only applies to the packages located under `packages/fluentui`, such as `@fluentui/react-northstar`. For other packages, see [this wiki page][17] instead!**

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Getting started](#getting-started)
  - [Useful Commands](#useful-commands)
- [Workflow](#workflow)
- [Accessibility](#accessibility)
  - [Role and aria props](#role-and-aria-props)
  - [Focus](#focus)
  - [Keyboard handling](#keyboard-handling)
- [Packages](#packages)
  - [Add a new package](#add-a-new-package)
    - [Run `syncpack format`](#run-syncpack-format)
  - [Add a new dependency](#add-a-new-dependency)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting started

**If you would like to contribute to packages besides the ones under `packages/fluentui`, see [this wiki page][17] instead!**

To contribute to packages in this folder, follow [these setup instructions](setup-local-development.md).

### Useful Commands

> This list contains the most useful commands. You should run `yarn run` to see all scripts.

From repo root:

```sh
yarn start                 # start doc site: choose `@fluentui/docs`

yarn test                  # run all packages' tests once

yarn build                 # build all packages
yarn build:fluentui:docs   # build docs

gulp deploy:docs           # deploy gh-pages doc site

yarn lint                  # lint all packages

yarn prettier              # run prettier on changed files
```

From an individual under `packages/fluentui`, such as `packages/fluentui/react-northstar`:

```sh
yarn test                  # test once
yarn test:watch            # test on file change

yarn build                 # build all files in package

yarn lint                  # lint once
yarn lint:fix              # lint and attempt to fix
```

## Workflow

These guides will walk your through various activities for contributing:

- [Add a feature](add-a-feature.md)
- [Test a feature](test-a-feature.md)
- [Document a feature](document-a-feature.md)
- [Release a new package version](release-a-package.md)

## Accessibility

`@fluentui/react-northstar` implements accessibility using accessibility behaviors. The behaviors add attributes to the DOM elements (mainly role and aria-\* properties) as well as handle keyboard interaction and focus. Every accessible component has a default behavior, which can be overridden using the `accessibility` prop. You can choose a behavior from the ones provided by Fluent UI or you can implement a new behavior.

Behaviors apply properties, focus handling and keyboard handlers to the component slots. When developing a component, the properties and keyboard handlers need to be spread to the corresponding slots.

For complete accessibility contributing guide, requirements and testing, see [Accessibility][2]

- [Role and aria props](#role-and-aria-props)
- [Focus](#focus)
- [Keyboard handling](#keyboard-handling)

### Role and aria props

ARIA [roles][3] and [attributes][4] provide necessary semantics for assistive technologies that allow persons with disabilities to navigate in the page/application.

In addition to behaviors, ARIA [landmarks][5] and [naming props][6] need to be added to the components/elements to form the page structure and provide textual information.

For example, to make an icon-only Button accessible, `aria-label` prop needs to be used:

```html
<button icon="star" iconOnly aria-label="Favorites" primary />
```

### Focus

An application should always have an element with [focus][7] when in use. The user can change the focused element by:

- pressing tab/shift+tab keys to navigate through the components
- pressing arrow keys to navigate through children (for example menu items in menu)
- using the screen reader with or without virtual cursor

`@fluentui/react-northstar` uses the [FocusZone][8] component for basic tab and arrow key focus handling. To use the focus zone, you can use the `focusZone` configuration in the behavior (for example see [MenuItemBehavior][9]).

Focused component needs to be clearly visible. This is handled in `@fluentui/react-northstar` by focus indicator functionality. Focus indicator will be displayed only if the application is in keyboard mode. Application switches to keyboard mode when a key relevant to navigation is pressed. It disables keyboard mode on mouse click events.

To style the focused component, you can use the `isFromKeyboard` utility and prop. See [Button component][10] and [Button style][11] for reference.

### Keyboard handling

In addition to basic focus handling, specific keyboard handlers can be added to the behaviors. These keyboard handlers call actions defined in the components, when corresponding keys are pressed by the user. For reference, see `keyActions` in [MenuItemBehavior][12] and `actionHandlers` in [MenuItem component][13].

## Packages

We are using [Lerna][14] to manage our packages and [Yarn Workspaces][15] to link them.

### Add a new package

For now, you must copy the structure and boilerplate files of an existing package under `packages/fluentui` when adding a new package. `packages/fluentui/accessibility` is a good basic example.

- choose a name and update the `name` field (keep the `@fluentui` scope)
  - it can be prefixed with the library name if the implementation is not framework-agnostic.
- the directory name should match the unscoped part of the package name
- please provide a meaningful description to a package in the matched field
- use `https://github.com/microsoft/fluentui/tree/master/packages/fluentui/__DIRECTORY_NAME__` as `homepage`
- our packages are currently published with MIT license, please follow it until you will have specific legal requirements

#### Run `syncpack format`

Organise a new `package.json` according to a conventional format, where fields appear in a predictable order and nested fields are ordered alphabetically.

```
yarn syncpack format
```

### Add a new dependency

Please always use [`lerna add`][16] to manage all dependencies including internal packages. The command below will add `@fluentui/react-proptypes` as a production dependency to the `@fluentui/react-northstar` package.

```yarn
lerna add @fluentui/react-proptypes packages/fluentui/react-northstar
```

[1]: https://nodejs.org/
[2]: https://github.com/stardust-ui/accessibility/blob/master/CONTRIBUTING.md
[3]: https://www.w3.org/TR/wai-aria-1.1/#usage_intro
[4]: https://www.w3.org/TR/wai-aria-1.1/#introstates
[5]: https://www.w3.org/TR/wai-aria-1.1/#landmark_roles
[6]: https://www.w3.org/TR/wai-aria-1.1/#namecalculation
[7]: https://www.w3.org/TR/wai-aria-1.1/#managingfocus
[8]: https://developer.microsoft.com/en-us/fabric#/components/focuszone
[9]: https://github.com/microsoft/fluentui/blob/master/packages/fluentui/accessibility/src/behaviors/Menu/MenuBehavior.ts
[10]: https://github.com/microsoft/fluentui/blob/master/packages/fluentui/react-northstar/src/components/Button/Button.tsx
[11]: https://github.com/microsoft/fluentui/blob/master/packages/fluentui/react-northstar/src/themes/teams/components/Button/buttonStyles.ts
[12]: https://github.com/microsoft/fluentui/blob/master/packages/fluentui/accessibility/src/behaviors/Menu/MenuItemBehavior.ts
[13]: https://github.com/microsoft/fluentui/blob/master/packages/fluentui/react-northstar/src/components/Menu/MenuItem.tsx
[14]: https://lerna.js.org
[15]: https://yarnpkg.com/en/docs/workspaces
[16]: https://github.com/lerna/lerna/tree/master/commands/add
[17]: https://github.com/microsoft/fluentui/wiki/Contributing
