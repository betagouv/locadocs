import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import { resultRoutes, routes } from './index';

export const GuideLookingForEstatePlan = (
  buildRoute: (route: string) => string,
): JSX.Element => {
  const router = useRouter();
  const { inseeCode } = router.query;

  return (
    <>
      <TITLES.H1>Je cherche les plans d'un bien immobilier</TITLES.H1>

      <div className="innerContainer">
        <p>
          Le <strong>permis de construire</strong> est susceptible de contenir
          les plans d'un bien immobilier.
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
          Il est également possible de se tourner vers l'architecte qui peut
          avoir conservé les plans du bâtiment.
        </p>
      </div>

      <Link
        href={buildRoute(
          inseeCode
            ? `${resultRoutes.RESULT_BUILDING_PERMIT}/${inseeCode}`
            : routes.SELECT_CITY_BUILDING_PERMIT,
        )}
        label="Consulter un permis de construire"
        kind={ELinkKind.PRIMARY}
        leftIcon={mdiArrowRight}
      />
      <Link
        href={buildRoute(routes.INFOS_BUILDING_PERMIT)}
        label="Avoir plus d'informations sur le contenu d'un permis de construire"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute(routes.WHO_CAN_GET_BUILDING_PERMIT)}
        label="Savoir qui a le droit de consulter un permis de construire"
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
