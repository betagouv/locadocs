import { useRouter } from 'next/router';
import { CityAutoComplete } from '@components/CityAutoComplete';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { resultRoutes, routes } from '.';
import { BreadCrump } from '@components/BreadCrump';

export const SelectCityNotarizedDeed = (
  buildRoute: (route: string) => string,
): JSX.Element => {
  const router = useRouter();
  const buildLink = (inseeCode: string): string => {
    return buildRoute(`${resultRoutes.RESULT_NOTARIZED_DEED}/${inseeCode}`);
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
            label: 'un acte notarié',
            href: buildRoute(routes.BEFORE_NOTARIZED_DEED),
          },
          { label: 'sélection de la ville de l’étude notariale' },
        ]}
      />

      <TITLES.H1>
        Dans quelle ville se situe l’étude du notaire&nbsp;?
      </TITLES.H1>

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
