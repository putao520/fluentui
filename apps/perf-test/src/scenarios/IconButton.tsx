import * as React from 'react';
import { IconButton, IIconProps, IContextualMenuProps } from 'office-ui-fabric-react';

const emojiIcon: IIconProps = { iconName: 'Emoji2' };

const menuProps: IContextualMenuProps = {
  items: [
    {
      key: 'emailMessage',
      text: 'Email message',
      iconProps: { iconName: 'Mail' },
    },
    {
      key: 'calendarEvent',
      text: 'Calendar event',
      iconProps: { iconName: 'Calendar' },
    },
  ],
  directionalHintFixed: true,
};

const scenario = (
  <IconButton
    menuProps={menuProps}
    iconProps={emojiIcon}
    title="Emoji"
    ariaLabel="Emoji"
    styles={{ root: { background: 'red' } }}
  />
);

export default scenario;
