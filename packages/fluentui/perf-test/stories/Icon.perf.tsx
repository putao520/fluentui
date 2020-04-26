import * as React from 'react';
import { FontIcon as IconFabric, initializeIcons } from 'office-ui-fabric-react';
import { CloseIcon } from '@fluentui/react-northstar';

initializeIcons();

export default {
  iterations: 5000,
};

export const Fabric = () => <IconFabric iconName="cancel" />;
export const Fluent = () => <CloseIcon />;
