import * as React from 'react';
import { FocusZone } from 'office-ui-fabric-react';

const FocusZoneContent: React.FunctionComponent = () => {
  const items: React.ReactNode[] = [];

  for (let i = 0; i < 20; i++) {
    items.push(<li key={i} data-is-focusable={true} />);
  }

  return <>{items}</>;
};

const scenario = (
  <FocusZone as="ul">
    <FocusZoneContent />
  </FocusZone>
);

export default scenario;
