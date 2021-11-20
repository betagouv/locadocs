import { useRouter } from 'next/router';
import { CityAutoComplete } from '@components/CityAutoComplete';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { resultRoutes, routes } from '.';
import { BreadCrump } from '@components/BreadCrump';

export const SelectCityMortgageRegistry = (
  buildRoute: (route: string) => string,
): JSX.Element => {
  const router = useRouter();
  const buildLink = (inseeCode: string): string => {
    return buildRoute(`${resultRoutes.RESULT_MORTGAGE_REGISTRY}/${inseeCode}`);
  };

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
            label: 'un registres des hypothèques',
            href: buildRoute(routes.BEFORE_MORTGAGE_REGISTRY),
          },
          { label: 'sélectionner la ville du bien' },
        ]}
      />

      <TITLES.H1>Dans quelle ville se situe le bien&nbsp;?</TITLES.H1>

      <p>
        Cette question va nous permettre de vous guider vers le bon
        interlocuteur.
      </p>

      <CityAutoComplete buildLink={buildLink} />

      <div className="spacer" />

      <Button
        onClick={() => router.back()}
        leftIcon={mdiArrowLeft}
        kind={EButtonKind.TERTIARY}
      />
    </>
  );
};
