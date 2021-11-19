import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import { resultRoutes, routes } from './index';
import { BreadCrump } from '@components/BreadCrump';

export const WhoCanGetBuildingPermit = (
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
          { label: 'qui peut consulter un permis de construire ?' },
        ]}
      />

      <TITLES.H1>Qui peut consulter un permis de construire&nbsp;?</TITLES.H1>

      <div className="innerContainer">
        <p>
          Les dossiers de permis de construire sont communicables à toute
          personne, dès lors que l'instruction est terminée.
        </p>

        <p>
          Toutefois, en raison de la protection de la vie privée ou d’autres
          secrets protégés, des restrictions de communication peuvent être
          appliquées à certaines informations.
        </p>

        <blockquote>
          Vous trouverez plus d'informations sur la communicabilité des permis
          de construire sur le{' '}
          <a
            href="https://www.cada.fr/administration/permis-de-construire"
            target="_blank"
            rel="noopener noreferrer"
          >
            site internet de la Commission d'accès aux documents administratifs
          </a>
          .
        </blockquote>
      </div>

      <Link
        href={buildRoute(
          inseeCode
            ? `${resultRoutes.RESULT_BUILDING_PERMIT}/${inseeCode}`
            : routes.SELECT_CITY_BUILDING_PERMIT,
        )}
        label="Je souhaite consulter un permis de construire"
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
