import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import { resultRoutes, routes } from './index';
import { BreadCrump } from '@components/BreadCrump';

export const WhoCanGetNotarizedDeed = (
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
            label: 'un acte notarié',
            href: buildRoute(routes.BEFORE_NOTARIZED_DEED),
          },
          { label: 'qui peut consulter un acte notarié ?' },
        ]}
      />

      <TITLES.H1>Qui peut consulter un acte notarié&nbsp;?</TITLES.H1>

      <div className="innerContainer">
        <p>
          Les registres et minutes de notaires sont librement communicables à
          tous au-delà d'un délai de 75 ans.
        </p>

        <p>Avant l'échéance du délai de 75 ans&nbsp;:</p>
        <ul>
          <li>
            Les parties ainsi que leurs héritiers et ayants droit ont accès à
            l'acte de vente.
          </li>

          <li>Les tiers peuvent demander un accès anticipé par dérogation.</li>
        </ul>
      </div>

      <Link
        href={buildRoute(
          inseeCode
            ? `${resultRoutes.RESULT_NOTARIZED_DEED}/${inseeCode}`
            : routes.SELECT_CITY_NOTARIZED_DEED,
        )}
        label="Je souhaite consulter un acte notarié"
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
