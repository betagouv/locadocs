import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import { resultRoutes, routes } from './index';
import { BreadCrump } from '@components/BreadCrump';

export const InfosBuildingPermit = (
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
            label: 'un permis de construire',
            href: buildRoute(routes.BEFORE_BUILDING_PERMIT),
          },
          { label: 'que contient un permis de construire ?' },
        ]}
      />

      <TITLES.H1>Que contient un permis de construire&nbsp;?</TITLES.H1>

      <div className="innerContainer">
        <p>
          Un dossier de permis de construire est susceptible de contenir les
          documents suivants&nbsp;:
        </p>

        <p></p>
        <ul>
          <li>La demande du pétitionnaire.</li>
          <li>
            Un plan de situation du terrain sur lequel la construction est
            prévue.
          </li>
          <li>Un plan de masse.</li>
          <li>Des élévations et coupes.</li>
          <li>Une notice descriptive.</li>
          <li>Les avis des services consultés.</li>
          <li>L'arrêté d'autorisation de construire.</li>
          <li>La déclaration d'achèvement des travaux.</li>
          <li>Le certificat de conformité.</li>
        </ul>

        <p>
          Les dossiers les plus anciens comportent moins de pièces et peuvent se
          réduire à la demande et à l’autorisation.
        </p>

        <TITLES.H2>De quand date le permis de construire&nbsp;?</TITLES.H2>
        <p>
          Cette formalité est obligatoire depuis la loi du 15 juin 1943. Avant
          1943, les permis de construire n’existent que dans les communes qui se
          sont dotées d’une réglementation sur l’urbanisme.
        </p>

        <TITLES.H2>
          Que ne contient pas un permis de construire&nbsp;?
        </TITLES.H2>
        <p>
          Lorsqu'il contient des plans, ceux-ci ne sont pas suffisamment
          détaillés pour permettre de connaître des informations relatives aux
          techniques de construction, aux réseaux électriques, aux
          canalisations, etc.
        </p>

        <p>
          <strong>
            Souhaitez-vous poursuivre votre recherche de permis de construire?
          </strong>
        </p>
      </div>

      <Link
        href={buildRoute(
          inseeCode
            ? `${resultRoutes.RESULT_BUILDING_PERMIT}/${inseeCode}`
            : routes.SELECT_CITY_BUILDING_PERMIT,
        )}
        label="Oui, je souhaite poursuivre"
        leftIcon={mdiArrowRight}
        kind={ELinkKind.PRIMARY}
      />
      <Link
        href={buildRoute(routes.DEAD_END)}
        label="Non, ce document ne correspond pas à ma recherche"
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
