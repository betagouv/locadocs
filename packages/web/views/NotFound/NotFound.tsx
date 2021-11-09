import React from 'react';
import * as TITLE from '@locadocs/design-system/components/Title';
import { Container } from './NotFound.styled';

export const NotFound: React.FC<unknown> = (): JSX.Element => {
  return (
    <Container>
      <TITLE.H1>Nous n’avons pas trouvé la page que vous cherchez.</TITLE.H1>

      <img
        src="/imgs/404.png"
        alt="woman searching for a 404 page"
        width="900"
        height="600"
      />
    </Container>
  );
};
