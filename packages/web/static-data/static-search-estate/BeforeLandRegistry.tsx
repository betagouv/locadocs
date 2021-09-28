import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { resultRoutes, routes } from './index';

export const BeforeLandRegistry = (
  buildRoute: (route: string) => string,
): JSX.Element => {
  const router = useRouter();
  const { inseeCode } = router.query;

  return (
    <>
      <TITLES.H1>Que souhaitez-vous faire&nbsp;?</TITLES.H1>

      <Link
        href={buildRoute(
          inseeCode
            ? `${resultRoutes.RESULT_LAND_REGISTRY}/${inseeCode}`
            : routes.SELECT_CITY_LAND_REGISTRY,
        )}
        label="Consulter un plan cadastral"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute(
          inseeCode
            ? `${resultRoutes.RESULT_LAND_REGISTRY_DOC}/${inseeCode}`
            : routes.SELECT_CITY_LAND_REGISTRY_DOC,
        )}
        label="Consulter la documentation cadastrale écrite"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute(routes.INFOS_LAND_REGISTRY)}
        label="Avoir plus d'informations sur le contenu du cadastre"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute(routes.WHO_CAN_GET_LAND_REGISTRY)}
        label="Savoir qui a le droit de consulter le cadastre"
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
