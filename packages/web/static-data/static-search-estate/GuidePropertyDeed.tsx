import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { routes } from '.';

export const GuidePropertyDeed = (root: string): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>Je cherche un titre de propriété</TITLES.H1>

      <p>
        Le titre de propriété est la copie authentique de l'acte de vente signé
        chez le notaire. Il est remis à l'acquéreur d'un bien immobilier.
      </p>

      <p>
        En cas de perte d'un titre de propriété, il est possible de retrouver
        <strong>l'acte de vente établi par le notaire</strong>.
      </p>

      <p>
        Les <strong>registres des hypothèques</strong> contiennent une copie des
        actes notariés et peuvent à ce titre pallier le manque ou la perte d'un
        titre de propriété.
      </p>

      <div className="spacer" />
      <Link
        href={`${root}/${routes.BEFORE_NOTARIZED_DEED}`}
        label="Consulter un acte notarié"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={`${root}/${routes.BEFORE_MORTGAGE_REGISTRY}`}
        label="Consulter un registre des hypothèques"
        kind={ELinkKind.SECONDARY}
      />
      <Button
        onClick={() => router.back()}
        leftIcon={mdiArrowLeft}
        kind={EButtonKind.TERTIARY}
      />
    </>
  );
};
