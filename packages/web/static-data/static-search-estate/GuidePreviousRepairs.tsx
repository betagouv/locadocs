import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { routes } from '.';

export const GuidePreviousRepairs = (root: string): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>
        Je cherche l'antériorité des travaux sur un bien immobilier
      </TITLES.H1>

      <p>
        Si le bien immobilier a fait l'objet de travaux de construction (abri,
        garage, piscine, etc.), d'extension ou de changement de destination, un{' '}
        <strong>permis de construire</strong> a pu être établi.
      </p>

      <p>
        Tous les travaux ne relèvent cependant pas d'une demande de permis de
        construire mais ont pu faire l'objet d'une simple déclaration préalable
        de travaux.
      </p>

      <div className="spacer" />
      <Link
        href={`${root}/${routes.BEFORE_BUILDING_PERMIT}`}
        label="Consulter un permis de construire"
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
