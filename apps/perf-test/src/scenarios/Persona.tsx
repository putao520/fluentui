import * as React from 'react';
import { Persona, PersonaSize, PersonaPresence, IPersonaSharedProps } from 'office-ui-fabric-react';

const examplePersona: IPersonaSharedProps = {
  imageInitials: 'AL',
  text: 'Annie Lindqvist',
  secondaryText: 'Software Engineer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
};

const scenario = (
  <Persona
    {...examplePersona}
    size={PersonaSize.size32}
    presence={PersonaPresence.online}
    hidePersonaDetails={false}
    imageAlt="Annie Lindqvist, status is online"
  />
);

export default scenario;
