import { SiteLayout } from '@components/Layouts';
import { ContentPage } from '@locadocs/design-system/components/ContentPage';
import * as React from 'react';
import type { NextPage } from 'next';
import * as TITLE from '@locadocs/design-system/components/Title';

const Accessibility: NextPage = () => (
  <SiteLayout>
    <ContentPage>
      <TITLE.H1>Déclaration d'accessibilité</TITLE.H1>
      <p>
        La DINUM s’engage à rendre son service accessible, conformément à
        l’article 47 de la loi n° 2005-102 du 11 février 2005.
      </p>
      <p>
        À cette fin, nous mettons en œuvre la stratégie et les actions suivantes
        : Télécharger le schéma pluriannuel de la DINUM au format PDF.
      </p>
      <p>Cette déclaration d’accessibilité s’applique à beta.gouv.fr.</p>
      <TITLE.H2>État de conformité</TITLE.H2>
      <p>
        Loc@docs est non conforme avec le RGAA 4.1. Le site n’a pas encore été
        audité.
      </p>
    </ContentPage>
  </SiteLayout>
);

export default Accessibility;
