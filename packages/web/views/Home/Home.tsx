import React from 'react';
import * as TITLE from '@locadocs/design-system/components/Title';
import { Link } from '@locadocs/design-system/components/Link';
import { Container } from './Home.styled';
import { mdiArrowRight } from '@mdi/js';
import * as ROUTES from '@constants/routes';

export const Home: React.FC<unknown> = (): JSX.Element => {
  return (
    <Container>
      <header>
        <div>
          <div>
            <TITLE.H1>
              Simplifions l’accès des usagers aux documents administratifs
              publics
            </TITLE.H1>

            <ul>
              <li>À qui dois-je m’adresser&nbsp;?</li>
              <li>Est-ce que je peux consulter le document&nbsp;?</li>
              <li>Vais-je y trouver l’information que je cherche&nbsp;?</li>
            </ul>
          </div>

          <img
            src="/imgs/home_illustration.svg"
            alt="woman searching for a file"
            width="578"
            height="622"
          />
        </div>
      </header>

      <section>
        <TITLE.H2>Trouver un document sur un bien immobilier</TITLE.H2>

        <p>
          Vous cherchez <strong>un document ou une information</strong> sur{' '}
          <strong>un terrain, une maison ou un immeuble</strong>&nbsp;?
          <br />
          Nous avons créé ce guide pour vous aider à&nbsp;:
        </p>

        <ul>
          <li>
            <strong>Identifier le document administratif</strong> susceptible de
            contenir l'information que vous recherchez.
          </li>
          <li>
            <strong>Vous orienter vers le bon contact</strong> pour consulter ou
            obtenir une copie de ce document.
          </li>
        </ul>

        <Link
          label="Commencer"
          href={ROUTES.ESTATE}
          rightIcon={mdiArrowRight}
        />
      </section>
    </Container>
  );
};
