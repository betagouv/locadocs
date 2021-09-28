import { useRouter } from 'next/router';
import { CityAutoComplete } from '@components/CityAutoComplete';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { resultRoutes } from '.';

export const SelectCityNotarizedDeed = (
  buildRoute: (route: string) => string,
): JSX.Element => {
  const router = useRouter();
  const buildLink = (inseeCode: string): string => {
    return buildRoute(`${resultRoutes.RESULT_NOTARIZED_DEED}/${inseeCode}`);
  };

  return (
    <>
      <TITLES.H1>Dans quelle ville se situe le bien&nbsp;?</TITLES.H1>

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
