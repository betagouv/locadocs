import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import { resultRoutes, routes } from './index';
import { BreadCrump } from '@components/BreadCrump';
import { Questionnaire } from '@components/Questionnaire';

export const WhoCanGetLandRegistry = (
  buildRoute: (route: string) => string,
): JSX.Element => {
  const router = useRouter();
  const { inseeCode } = router.query;

  return (
    <>
      <BreadCrump
        steps={[
          { label: 'commencer ma recherche', href: buildRoute(routes.ROOT) },
          {
            label: 'quel document cherchez-vous ?',
            href: buildRoute(routes.DOCUMENT_CHOICE),
          },
          {
            label: 'le cadastre',
            href: buildRoute(routes.BEFORE_LAND_REGISTRY),
          },
          { label: 'qui peut consulter le cadastre ?' },
        ]}
      />

      <TITLES.H1>Qui peut consulter le cadastre&nbsp;?</TITLES.H1>

      <div className="innerContainer">
        <p>Les plans sont librement communicables.</p>
        <p>
          Les matrices cadastrales (registres des propriétaires) sont librement
          communicables au-delà d'un délai de 50 ans. Avant l'échéance du délai
          de 50 ans&nbsp;:
        </p>

        <ul>
          <li>Le propriétaire peut demander les relevés de ses propriétés.</li>
          <li>
            Les tiers peuvent obtenir la communication ponctuelle d’extraits
            d’informations cadastrales concernant des parcelles déterminées.
          </li>
        </ul>

        <p>
          <strong>Que souhaitez-vous faire&nbsp;?</strong>
        </p>
      </div>

      <Questionnaire page="who-can-get-land-registry" />

      <Link
        href={buildRoute(
          inseeCode
            ? `${resultRoutes.RESULT_LAND_REGISTRY}/${inseeCode}`
            : routes.SELECT_CITY_LAND_REGISTRY,
        )}
        label="Consulter un plan cadastral"
        kind={ELinkKind.PRIMARY}
        leftIcon={mdiArrowRight}
      />

      <Link
        href={buildRoute(
          inseeCode
            ? `${resultRoutes.RESULT_LAND_REGISTRY_DOC}/${inseeCode}`
            : routes.SELECT_CITY_LAND_REGISTRY_DOC,
        )}
        label="Consulter la documentation cadastrale écrite"
        kind={ELinkKind.PRIMARY}
        leftIcon={mdiArrowRight}
      />

      <Button
        onClick={() => router.back()}
        leftIcon={mdiArrowLeft}
        kind={EButtonKind.TERTIARY}
      />
    </>
  );
};
