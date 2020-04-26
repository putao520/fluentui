import * as React from 'react';
import cx from 'classnames';
import createSvgIcon from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

const ContactGroupCallIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg className={classes.svg} viewBox="8 8 16 16" role="presentation" focusable="false">
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M19,20c0,1.6-1.7,2.1-3,2.1c-1.3,0-3-0.5-3-2.1v-5h6V20z M11.5,16c0.3,0,0.5,0.2,0.5,0.5S11.8,17,11.5,17H9v2
        c0,1.1,1.7,1.1,2.5,1.1c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5H11c-1.3,0-3-0.5-3-2.1v-3H11.5z M10,11c1.1,0,2,0.9,2,2s-0.9,2-2,2
        s-2-0.9-2-2S8.9,11,10,11z M10,12c-0.5,0-1,0.5-1,1c0,0.5,0.5,1,1,1c0.5,0,1-0.5,1-1C11,12.5,10.5,12,10,12z M14,16v4
        c0,0.9,1.3,1.1,2,1.1s2-0.2,2-1.1v-4H14z M16,10c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S14.9,10,16,10z M16,11c-0.5,0-1,0.5-1,1
        c0,0.5,0.5,1,1,1c0.5,0,1-0.5,1-1C17,11.5,16.5,11,16,11z M20.4,8.1c0.7,0,1,0.7,1,1.3c0,0.3-0.2,0.6-0.4,0.8l0.6,0.8
        c0.2-0.1,0.3-0.1,0.5-0.1c0.5,0,1.3,0.5,1.3,1.1c0,0.4-0.3,0.9-0.7,0.9c-0.4,0-1.1-0.4-1.4-0.6c-1.1-0.7-1.7-2-1.7-3.3
        C19.6,8.4,19.8,8.1,20.4,8.1z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M19,20c0,1.6-1.7,2.1-3,2.1c-1.3,0-3-0.5-3-2.1v-5h6V20z M12,21.1h-1c-1.3,0-3-0.5-3-2.1v-3h4V21.1z M10,11
        c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S8.9,11,10,11z M16,10c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S14.9,10,16,10z M20.4,8.1
        c0.7,0,1,0.7,1,1.3c0,0.3-0.2,0.6-0.4,0.8l0.6,0.8c0.2-0.1,0.3-0.1,0.5-0.1c0.5,0,1.3,0.5,1.3,1.1c0,0.4-0.3,0.9-0.7,0.9
        c-0.4,0-1.1-0.4-1.4-0.6c-1.1-0.7-1.7-2-1.7-3.3C19.6,8.4,19.8,8.1,20.4,8.1z"
      />
    </svg>
  ),
  displayName: 'ContactGroupCallIcon',
});

export default ContactGroupCallIcon;
