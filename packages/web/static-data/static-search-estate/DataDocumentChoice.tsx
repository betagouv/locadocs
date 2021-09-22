import { Link } from '@locadocs/design-system/components/Link';
import { ELinkKind } from '@locadocs/design-system/components/Link/Link';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';

export const DataDocumentChoice = (root: string): JSX.Element => (
  <>
    <TITLES.H1>Quel document cherchez-vous ?</TITLES.H1>

    <Link
      href={`${root}`}
      label="Je cherche un permis de construire"
      kind={ELinkKind.SECONDARY}
    />
    <Link
      href={`${root}`}
      label="Je cherche un acte notarié"
      kind={ELinkKind.SECONDARY}
    />
    <Link
      href={`${root}`}
      label="Je cherche un registre des hypothèques"
      kind={ELinkKind.SECONDARY}
    />
    <Link
      href={`${root}`}
      label="Je cherche le cadastre"
      kind={ELinkKind.SECONDARY}
    />
    <Link
      href={`${root}`}
      label="Je cherche un autre document"
      kind={ELinkKind.SECONDARY}
    />

    <div className="spacer" />
    <Link href={`${root}`} leftIcon={mdiArrowLeft} kind={ELinkKind.SECONDARY} />
  </>
);
