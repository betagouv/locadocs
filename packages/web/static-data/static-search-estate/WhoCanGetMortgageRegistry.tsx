import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { resultRoutes, routes } from './index';

export const WhoCanGetMortgageRegistry = (
  buildRoute: (route: string) => string,
): JSX.Element => {
  const router = useRouter();
  const { inseeCode } = router.query;

  return (
    <>
      <TITLES.H1>
        Qui peut consulter un registre des hypothèques&nbsp;?
      </TITLES.H1>

      <p>
        Les registres sont librement communicables à tous au-delà d'un délai de
        50 ans.
      </p>

      <TITLES.H2>Avant l'échéance du délai de 50 ans :</TITLES.H2>
      <ul>
        <li>
          Le propriétaire, l'héritier, l'acquéreur ou le vendeur du bien peuvent
          avoir accès.
        </li>
        <li>Les tiers peuvent demander un accès anticipé par dérogation.</li>
      </ul>

      <div className="spacer" />
      <Link
        href={buildRoute(
          inseeCode
            ? `${resultRoutes.RESULT_MORTGAGE_REGISTRY}/${inseeCode}`
            : routes.SELECT_CITY_MORTGAGE_REGISTRY,
        )}
        label="Je souhaite consulter un registre des hypothèques"
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
