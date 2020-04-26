### What’s new in Fluent UI 7?

We’ve updated Fluent UI (formerly known as [UI Fabric](https://developer.microsoft.com/en-us/office/blogs/ui-fabric-is-evolving-into-fluent-ui/)) to include a new set of Web Fluent design styles, which include colors, type, depth and motion which are applied to the standard set of Fluent UI controls. These include:

- Colors are an updated, shared set used in common components such as personas, sites, groups and calendar events. We’ve also updated the Neutrals to be warmer and more approachable.
- Typography has been updated to a new common type ramp used across core Microsoft apps, leveraging the latest type weights from Fluent.
- Depth styles now include a common set of shadow levels from Fluent, and are applied to context menus, dialogs, panels, etc.
- Motion styles have been updated to the latest Fluent styles and are available to be used inside of your applications.

### Upgrading from UI Fabric 6 to Fluent UI 7

Along with a visual refresh, Fluent UI 7 updates the minimum required version of React to 16.8.1 and TypeScript to 3.3. It also includes a number of behavior improvements and removes old deprecated props. For a full rundown of these changes, and upgrade instructions, see the [release notes](https://github.com/microsoft/fluentui/wiki/Fabric-7) on our wiki.

### Can I preview the Fluent styles using Fabric 6?

If you want to preview the Fluent styles and how they will affect your existing Fabric 6 site, follow the [Fluent customization steps](https://github.com/microsoft/fluentui/wiki/Fluent-theme-in-Fabric-6) outlined in our wiki.

### Fluent for Fabric Core (CSS styles)

For apps built with Fabric Core, version 10 and later include the new Fluent colors, type sizes, animations, and shadows. Use NPM to import the latest release:

```
npm install office-ui-fabric-core
```

Once imported, you can reference the new SCSS variables and mixins for colors, type sizes, animations, depth, and more.
