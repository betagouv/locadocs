import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { routes } from './index';

export const DocumentChoice = (root: string): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>Quel document cherchez-vous&nbsp;?</TITLES.H1>

      <Link
        href={`${root}/${routes.BEFORE_BUILDING_PERMIT}`}
        label="Je cherche un permis de construire"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={`${root}/${routes.BEFORE_NOTARIZED_DEED}`}
        label="Je cherche un acte notarié"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={`${root}/${routes.BEFORE_MORTGAGE_REGISTRY}`}
        label="Je cherche un registre des hypothèques"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={`${root}/${routes.BEFORE_LAND_REGISTRY}`}
        label="Je cherche le cadastre"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={`${root}/${routes.SUGGEST_DOCUMENT}`}
        label="Je cherche un autre document"
        kind={ELinkKind.SECONDARY}
      />

      <div className="spacer" />
      <Button
        onClick={() => router.back()}
        leftIcon={mdiArrowLeft}
        kind={EButtonKind.TERTIARY}
      />
    </>
  );
};
