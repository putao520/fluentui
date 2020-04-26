import * as React from 'react';
import { IDocPageProps } from '../../../common/DocPage.types';

import { PeoplePickerNormalExample } from './examples/PeoplePicker.Normal.Example';
import { PeoplePickerCompactExample } from './examples/PeoplePicker.Compact.Example';
import { PeoplePickerListExample } from './examples/PeoplePicker.List.Example';
import { PeoplePickerPreselectedItemsExample } from './examples/PeoplePicker.PreselectedItems.Example';
import { PeoplePickerLimitedSearchExample } from './examples/PeoplePicker.LimitedSearch.Example';
import { PeoplePickerProcessSelectionExample } from './examples/PeoplePicker.ProcessSelection.Example';
import { PeoplePickerControlledExample } from './examples/PeoplePicker.Controlled.Example';

const PeoplePickerNormalExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/examples/PeoplePicker.Normal.Example.tsx') as string;
const PeoplePickerCompactExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/examples/PeoplePicker.Compact.Example.tsx') as string;
const PeoplePickerListExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/examples/PeoplePicker.List.Example.tsx') as string;
const PeoplePickerPreselectedItemsExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/examples/PeoplePicker.PreselectedItems.Example.tsx') as string;
const PeoplePickerLimitedSearchExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/examples/PeoplePicker.LimitedSearch.Example.tsx') as string;
const PeoplePickerProcessSelectionExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/examples/PeoplePicker.ProcessSelection.Example.tsx') as string;
const PeoplePickerControlledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/examples/PeoplePicker.Controlled.Example.tsx') as string;

export const PeoplePickerPageProps: IDocPageProps = {
  title: 'PeoplePicker',
  componentName: 'PeoplePicker',
  componentUrl:
    'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/PeoplePicker',
  examples: [
    {
      title: 'Normal People Picker',
      code: PeoplePickerNormalExampleCode,
      view: <PeoplePickerNormalExample />,
    },
    {
      title: 'Compact People Picker',
      code: PeoplePickerCompactExampleCode,
      view: <PeoplePickerCompactExample />,
    },
    {
      title: 'List People Picker',
      code: PeoplePickerListExampleCode,
      view: <PeoplePickerListExample />,
    },
    {
      title: 'People Picker with Preselected Items',
      code: PeoplePickerPreselectedItemsExampleCode,
      view: <PeoplePickerPreselectedItemsExample />,
    },
    {
      title: 'People Picker with Limited Search',
      code: PeoplePickerLimitedSearchExampleCode,
      view: <PeoplePickerLimitedSearchExample />,
    },
    {
      title: 'People Picker with Processed Selection',
      code: PeoplePickerProcessSelectionExampleCode,
      view: <PeoplePickerProcessSelectionExample />,
    },
    {
      title: 'Controlled People Picker',
      code: PeoplePickerControlledExampleCode,
      view: <PeoplePickerControlledExample />,
    },
  ],
  propertiesTablesSources: [
    require<string>('!raw-loader!office-ui-fabric-react/src/components/pickers/BasePicker.types.ts'),
  ],
  overview: require<
    string
  >('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/docs/PeoplePickerOverview.md'),
  bestPractices: require<
    string
  >('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/docs/PeoplePickerBestPractices.md'),
  dos: require<
    string
  >('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/docs/PeoplePickerDos.md'),
  donts: require<
    string
  >('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/docs/PeoplePickerDonts.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
};
