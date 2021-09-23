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
      <p>À remplir.</p>
      <TITLE.H2>Directeur de la publication</TITLE.H2>
      <p>À remplir.</p>
      <TITLE.H2>Copyright</TITLE.H2>
      <p>À remplir.</p>
      <TITLE.H2>Plus d’infos&nbsp;?</TITLE.H2>
      <p>À remplir.</p>
    </ContentPage>
  </SiteLayout>
);

export default About;
