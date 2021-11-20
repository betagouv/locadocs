import React from 'react';
import type { NextPage } from 'next';
import { ApplicationHead } from '@components/ApplicationHead';
import { ContentPage } from '@locadocs/design-system/components/ContentPage';
import { WebFooter } from '@components/WebFooter';
import * as TITLE from '@locadocs/design-system/components/Title';
import { WebHeader } from '@components/WebHeader';

const About: NextPage = () => (
  <React.Fragment>
    <ApplicationHead />
    <WebHeader />

    <ContentPage>
      <TITLE.H1>À propos</TITLE.H1>
      <TITLE.H2>Éditeur</TITLE.H2>
      <p>À remplir.</p>
      <TITLE.H2>Directeur de la publication</TITLE.H2>
      <p>À remplir.</p>
      <TITLE.H2>Copyright</TITLE.H2>
      <p>À remplir.</p>
      <TITLE.H2>Plus d’infos&nbsp;?</TITLE.H2>
      <p>À remplir.</p>
    </ContentPage>

    <WebFooter />
  </React.Fragment>
);

export default About;
