import { ApplicationHead } from '@components/ApplicationHead';
import { WebHeader } from '@components/WebHeader';
import { ContentPage } from '@locadocs/design-system/components/ContentPage';
import { WebFooter } from '@components/WebFooter';
import * as React from 'react';
import type { NextPage } from 'next';
import * as TITLE from '@locadocs/design-system/components/Title';

const PersonnalData: NextPage = () => (
  <React.Fragment>
    <ApplicationHead />
    <WebHeader />

    <ContentPage>
      <TITLE.H1>Suivi d'audience et vie privée</TITLE.H1>
      <TITLE.H2>
        Ce site n’affiche pas de bannière de consentement aux cookies, pourquoi
        ?
      </TITLE.H2>
      <p>
        C’est vrai, vous n’avez pas eu à cliquer sur un bloc qui recouvre la
        moitié de la page pour dire que vous êtes d’accord avec le dépôt de
        cookies — même si vous ne savez pas ce que ça veut dire !
      </p>
      <p>
        Rien d’exceptionnel, pas de passe-droit lié à un .gouv.fr. Nous
        respectons simplement la loi, qui dit que certains outils de suivi
        d’audience, correctement configurés pour respecter la vie privée, sont
        exemptés d’autorisation préalable.
      </p>
      <p>
        Nous utilisons pour cela <a href="https://matomo.org/">Matomo</a>, un
        outil <a href="https://matomo.org/free-software/">libre</a>, paramétré
        pour être en conformité avec la{' '}
        <a href="https://www.cnil.fr/fr/solutions-pour-la-mesure-daudience">
          recommandation «&nbsp;Cookies&nbsp;»
        </a>{' '}
        de la{' '}
        <abbr title="Commission Nationale de l'Informatique et des Libertés">
          CNIL
        </abbr>
        . Cela signifie que votre adresse IP, par exemple, est anonymisée avant
        d’être enregistrée. Il est donc impossible d’associer vos visites sur ce
        site à votre personne.
      </p>
      <TITLE.H2>
        Je contribue à enrichir vos données, puis-je y accéder ?
      </TITLE.H2>
      <p>
        Bien sûr&nbsp;! Les statistiques d’usage de la majorité de nos produits,
        dont beta.gouv.fr, sont disponibles en accès libre sur{' '}
        <a href="https://stats.data.gouv.fr/index.php?module=CoreHome&amp;action=index&amp;idSite=21&amp;period=range&amp;date=previous30#?module=VisitsSummary&amp;action=index&amp;idSite=21&amp;period=range&amp;date=previous30">
          stats.data.gouv.fr
        </a>
        .
      </p>
    </ContentPage>

    <WebFooter />
  </React.Fragment>
);

export default PersonnalData;
