import React from 'react';
import * as TITLE from '@locadocs/design-system/components/Title';
import { Container } from './NotFound.styled';

export const NotFound: React.FC<unknown> = (): JSX.Element => {
  return (
    <Container>
      <TITLE.H1>404 : Page non trouvée</TITLE.H1>
    </Container>
  );
};
