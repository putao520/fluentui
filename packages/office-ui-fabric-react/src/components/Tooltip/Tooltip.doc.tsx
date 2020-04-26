import * as React from 'react';
import { TooltipCustomExample } from './examples/Tooltip.Custom.Example';

import { IDocPageProps } from '../../common/DocPage.types';
import { TooltipBasicExample } from './examples/Tooltip.Basic.Example';
import { TooltipDisplayExample } from './examples/Tooltip.Display.Example';
import { TooltipInteractiveExample } from './examples/Tooltip.Interactive.Example';
import { TooltipOverflowExample } from './examples/Tooltip.Overflow.Example';
import { TooltipAbsolutePositionExample } from './examples/Tooltip.AbsolutePosition.Example';

const TooltipBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Tooltip/examples/Tooltip.Basic.Example.tsx') as string;
const TooltipDisplayExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Tooltip/examples/Tooltip.Display.Example.tsx') as string;
const TooltipCustomExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Tooltip/examples/Tooltip.Custom.Example.tsx') as string;
const TooltipInteractiveExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Tooltip/examples/Tooltip.Interactive.Example.tsx') as string;
const TooltipOverflowExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Tooltip/examples/Tooltip.Overflow.Example.tsx') as string;
const TooltipAbsolutePositionExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Tooltip/examples/Tooltip.AbsolutePosition.Example.tsx') as string;

export const TooltipPageProps: IDocPageProps = {
  title: 'Tooltip',
  componentName: 'Tooltip',
  componentUrl:
    'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Tooltip',
  examples: [
    {
      title: 'Default Tooltip',
      code: TooltipBasicExampleCode,
      view: <TooltipBasicExample />,
    },
    {
      title: 'Tooltip wrapping inline or inline-block elements',
      code: TooltipDisplayExampleCode,
      view: <TooltipDisplayExample />,
    },
    {
      title: 'Tooltip with custom content',
      code: TooltipCustomExampleCode,
      view: <TooltipCustomExample />,
    },
    {
      title: 'Tooltip with a closing delay',
      code: TooltipInteractiveExampleCode,
      view: <TooltipInteractiveExample />,
    },
    {
      title: 'Tooltip only on overflow',
      code: TooltipOverflowExampleCode,
      view: <TooltipOverflowExample />,
    },
    {
      title: 'Tooltip on absolutely-positioned element',
      code: TooltipAbsolutePositionExampleCode,
      view: <TooltipAbsolutePositionExample />,
    },
  ],
  overview: require<string>('!raw-loader!office-ui-fabric-react/src/components/Tooltip/docs/TooltipOverview.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
  allowNativeProps: true,
};
