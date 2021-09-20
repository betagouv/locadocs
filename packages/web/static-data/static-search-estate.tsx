import { Link } from '@locadocs/design-system/components/Link';
import { ELinkKind } from '@locadocs/design-system/components/Link/Link';
import * as TITLES from '@locadocs/design-system/components/Title';

export enum ERoutes {
  ROOT = '/',
}

export const GLOBALS = {
  appTitle: 'Loc@docs : Simplifier l’accès aux documents publics',
  baseLine: 'Trouver un document foncier',
};

export const ROUTES_CONTENT = {
  [ERoutes.ROOT]: (
    <>
      <TITLES.H1>Première étape...</TITLES.H1>
      <p>
        <strong>
          Savez-vous quel document administratif contient l’information que vous
          recherchez ?
        </strong>
      </p>
      <div className="spacer" />
      <Link
        href="/"
        label="Oui, j’ai identifié le document"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href="/"
        label="Non, j’ai besoin d’être guidé"
        kind={ELinkKind.SECONDARY}
      />
    </>
  ),
};
