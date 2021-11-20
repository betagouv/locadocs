import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { routes } from '.';
import { BreadCrump } from '@components/BreadCrump';
import { Questionnaire } from '@components/Questionnaire';

export const GuideContiguity = (
  buildRoute: (route: string) => string,
): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <BreadCrump
        steps={[
          { label: 'commencer ma recherche', href: buildRoute(routes.ROOT) },
          {
            label: 'que cherchez-vous ?',
            href: buildRoute(routes.WHAT_ARE_YOU_LOOKING_FOR),
          },
          { label: 'des informations sur la mitoyenneté d’un mur' },
        ]}
      />

      <TITLES.H1>
        Je cherche des informations sur la mitoyenneté d'un mur
      </TITLES.H1>

      <div className="innerContainer">
        <p>
          Un mur mitoyen est un mur commun entre deux voisins qui en partagent
          la propriété.
        </p>

        <p>
          L'absence de mitoyenneté d'un mur peut être mentionnée dans le titre
          de propriété du bien.
        </p>
        <p>
          Il n'existe aucune administration publique chargée de recenser les
          mitoyennetés. Cette information ne figure pas dans le cadastre.
        </p>
      </div>

      <Questionnaire page="guide-contiguity" />

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
