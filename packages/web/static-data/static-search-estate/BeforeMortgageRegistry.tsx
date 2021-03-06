import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import { resultRoutes, routes } from './index';
import { BreadCrump } from '@components/BreadCrump';

export const BeforeMortgageRegistry = (
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
          { label: 'les registres des hypothèques' },
        ]}
      />

      <TITLES.H1>Les registres des hypothèques</TITLES.H1>

      <p>Que souhaitez-vous faire&nbsp;?</p>

      <Link
        href={buildRoute(
          inseeCode
            ? `${resultRoutes.RESULT_MORTGAGE_REGISTRY}/${inseeCode}`
            : routes.SELECT_CITY_MORTGAGE_REGISTRY,
        )}
        label="Consulter un registre des hypothèques"
        kind={ELinkKind.PRIMARY}
        leftIcon={mdiArrowRight}
      />
      <Link
        href={buildRoute(routes.INFOS_MORTGAGE_REGISTRY)}
        label="Avoir plus d'informations sur le contenu d'un registre des hypothèques"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute(routes.WHO_CAN_GET_MORTGAGE_REGISTRY)}
        label="Savoir qui a le droit de consulter un registre des hypothèques"
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
