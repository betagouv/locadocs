import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';

export const LookingForEstatePlan = (root: string): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>Je cherche les plans d'un bien immobilier</TITLES.H1>

      <p>
        Le <strong>permis de construire</strong> est susceptible de contenir les
        plans d'un bien immobilier.
      </p>
      <p>
        Attention toutefois, le niveau de détail de ces plans n'est pas
        suffisant pour connaître certaines informations (techniques de
        construction, réseaux électriques, canalisations, etc.)
      </p>
      <p>
        De plus, les dossiers de permis de construire les plus anciens ne
        contiennent pas systématiquement de plans.
      </p>
      <p>
        Il est également possible de se tourner vers l'architecte qui peut avoir
        conservé les plans du bâtiment.
      </p>

      <div className="spacer" />
      <Link
        href={`${root}`}
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
