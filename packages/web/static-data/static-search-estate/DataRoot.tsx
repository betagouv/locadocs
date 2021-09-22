import { Link } from '@locadocs/design-system/components/Link';
import { ELinkKind } from '@locadocs/design-system/components/Link/Link';
import * as TITLES from '@locadocs/design-system/components/Title';
import { routes } from './index';

export const DataRoot = (root: string): JSX.Element => (
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
      href={`${root}/${routes.DOCUMENT_CHOICE}`}
      label="Oui, j’ai identifié le document"
      kind={ELinkKind.SECONDARY}
    />
    <Link
      href={`${root}/${routes.DOCUMENT_CHOICE}`}
      label="Non, j’ai besoin d’être guidé"
      kind={ELinkKind.SECONDARY}
    />
  </>
);
