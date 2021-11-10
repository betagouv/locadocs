import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import { resultRoutes, routes } from './index';

export const GuidePreviousRepairs = (
  buildRoute: (route: string) => string,
): JSX.Element => {
  const router = useRouter();
  const { inseeCode } = router.query;

  return (
    <>
      <TITLES.H1>
        Je cherche l'antériorité des travaux sur un bien immobilier
      </TITLES.H1>

      <div className="innerContainer">
        <p>
          Si le bien immobilier a fait l'objet de travaux de construction (abri,
          garage, piscine, etc.), d'extension ou de changement de destination,
          un <strong>permis de construire</strong> a pu être établi.
        </p>

        <p>
          Tous les travaux ne relèvent cependant pas d'une demande de permis de
          construire mais ont pu faire l'objet d'une simple déclaration
          préalable de travaux.
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
