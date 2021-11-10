import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { routes } from '.';

export const GuideServitude = (
  buildRoute: (route: string) => string,
): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>
        Je cherche l'existence d’une servitude sur un terrain
      </TITLES.H1>

      <div className="innerContainer">
        <p>
          La servitude est l'obligation pour un propriétaire de permettre à un
          tiers l'usage d'une ressource (par exemple, droit de puisage) ou d'une
          voie de circulation (par exemple, droit de passage) sur son bien.
        </p>

        <p>
          L'existence d'une servitude peut être mentionnée dans le{' '}
          <strong>titre de propriété</strong> du bien. Elle peut toutefois avoir
          fait l'objet d'un accord oral ou d'un contrat sous seing privé.
        </p>

        <p>
          Il n'existe aucune administration publique chargée de recenser les
          servitudes. Cette information ne figure pas dans le cadastre.
        </p>
      </div>

      <Link
        href={buildRoute(routes.GUIDE_PROPERTY_DEED)}
        label="Chercher un titre de propriété"
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
