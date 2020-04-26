import * as React from 'react';
import { Dialog, DialogType, DialogFooter, IDialogContentProps } from 'office-ui-fabric-react/lib/Dialog';

const dialogContentProps: IDialogContentProps = {
  type: DialogType.normal,
  title: 'Missing Subject',
  closeButtonAriaLabel: 'Close',
  subText: 'Do you want to send this message without a subject?',
};

const DialogExample: React.FunctionComponent = () => {
  return (
    <Dialog hidden={false} dialogContentProps={dialogContentProps}>
      <DialogFooter>Dialog Footer</DialogFooter>
    </Dialog>
  );
};

const scenario = <DialogExample />;

export default scenario;
