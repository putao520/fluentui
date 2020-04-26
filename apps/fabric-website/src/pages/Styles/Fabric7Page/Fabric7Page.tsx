import * as React from 'react';
import { StylesAreaPage, IStylesPageProps } from '../StylesAreaPage';

export const Fabric7Page: React.FunctionComponent<IStylesPageProps> = props => {
  return (
    <StylesAreaPage
      {...props}
      title="Fluent UI 7 Updates"
      componentUrl="https://github.com/microsoft/fluentui/tree/master/apps/fabric-website/src/pages/Styles/Fabric7Page"
      overview={
        require('!raw-loader!@uifabric/fabric-website/src/pages/Styles/Fabric7Page/docs/web/Fabric7Overview.md') as string
      }
    />
  );
};
