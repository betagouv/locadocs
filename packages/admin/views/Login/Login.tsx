import React from 'react';

import { Container } from './LoginStyles';
import * as TITLE from '@locadocs/design-system/components/Title';
import { Input } from '@locadocs/design-system/components/Input';
import { Button } from '@locadocs/design-system/components/Button';
import { mdiArrowRight } from '@mdi/js';

export const Login: React.FC<unknown> = (): JSX.Element => {
  const sendLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Container onSubmit={sendLogin}>
      <TITLE.H1>Connexion</TITLE.H1>
      <p className="infos">
        Entrez l’email du compte pour y recevoir un code de connexion.
      </p>

      <Input
        inputProps={{
          type: 'email',
          required: true,
          placeholder: 'ex : nom.prenom@mail.com',
        }}
        label="Email"
      />

      <Button label="Envoyer" type="submit" rightIcon={mdiArrowRight} />
    </Container>
  );
};
