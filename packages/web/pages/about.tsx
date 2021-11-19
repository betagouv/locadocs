import { SiteLayout } from '@components/Layouts';
import { ContentPage } from '@locadocs/design-system/components/ContentPage';
import * as React from 'react';
import type { NextPage } from 'next';
import * as TITLE from '@locadocs/design-system/components/Title';

const About: NextPage = () => (
  <SiteLayout>
    <ContentPage>
      <TITLE.H1>À propos</TITLE.H1>
      <TITLE.H2>Éditeur</TITLE.H2>
      <p>
        Incubateur de services numériques de la Direction interministérielle du
        numérique (DINUM) - 20, avenue de Ségur - 75007 Paris.
      </p>
      <TITLE.H2>Directeur de la publication</TITLE.H2>
      <p>Directeur interministériel du numérique.</p>
      <TITLE.H2>Copyright</TITLE.H2>
      <p>
        Illustrations de la section équipe en page d’accueil : Freepik Toute
        autre illustration : beta.gouv.fr.
      </p>
      <TITLE.H2>Plus d’infos&nbsp;?</TITLE.H2>
      <p>
        Votre adresse électronique pourra nous être utile pour poursuivre cet
        échange et comprendre comment adapter notre outil afin de répondre au
        mieux à vos attentes.
      </p>
      <p>
        Elle ne sera pas utilisée à d'autres fins ni conservée au-delà de la
        phase d'expérimentation de l'outil. A tout moment, vous pouvez exercer
        vos droits d'accès, d'effacement, d'opposition ou de rectification en
        écrivant à l'adresse suivante{' '}
        <a href="mailto:locadocs@beta.gouv.fr">locadocs@beta.gouv.fr</a>
      </p>
    </ContentPage>
  </SiteLayout>
);

export default About;
