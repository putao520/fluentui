import {
  callable,
  ComponentVariablesInput,
  ComponentVariablesObject,
  mergeComponentVariables,
  ThemePrepared,
  withDebugId,
} from '@fluentui/styles';

const variablesCache = new WeakMap<ThemePrepared, Record<string, ComponentVariablesObject>>();

const resolveVariables = (
  displayNames: string[],
  theme: ThemePrepared,
  variables: ComponentVariablesInput | undefined,
  enabledVariablesCaching: boolean | undefined,
): ComponentVariablesObject => {
  let componentThemeVariables: ComponentVariablesObject;

  // Filter out components that doesn't have defined variables in theme
  const effectiveDisplayNames = displayNames.filter(displayName => !!theme.componentVariables[displayName]);

  //
  // Simple caching model, works only if there is no `props.variables`
  // Resolves variables for this component, cache the result in provider
  //

  if (enabledVariablesCaching) {
    if (!variablesCache.has(theme)) {
      variablesCache.set(theme, {});
    }

    const variablesThemeCache = variablesCache.get(theme) || {};

    // const displayNames = { Foo: variables, Bar: undefined, Baz: undefined }
    // This allows to avoid creating useless cache entries for `Bar` & `Baz` components
    const handlingDisplayName = effectiveDisplayNames[effectiveDisplayNames.length - 1];

    if (!variablesThemeCache[handlingDisplayName]) {
      variablesThemeCache[handlingDisplayName] = mergeComponentVariables(
        ...effectiveDisplayNames.map(displayName => theme.componentVariables[displayName]),
      )(theme.siteVariables);
      variablesCache.set(theme, variablesThemeCache);
    }

    componentThemeVariables = variablesThemeCache[handlingDisplayName];
  } else if (effectiveDisplayNames.length === 1) {
    componentThemeVariables = callable(theme.componentVariables[effectiveDisplayNames[0]])(theme.siteVariables) || {};
  } else {
    componentThemeVariables = mergeComponentVariables(
      ...effectiveDisplayNames.map(displayName => theme.componentVariables[displayName]),
    )(theme.siteVariables);
  }

  if (variables === undefined) {
    return componentThemeVariables;
  }

  return mergeComponentVariables(
    componentThemeVariables,
    withDebugId(variables, 'props.variables'),
  )(theme.siteVariables);
};

export default resolveVariables;
