import { useRouter } from 'next/router';
import { SiteLayout } from '@components/Layouts';
import { StaticData } from '@views/StaticData';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { GLOBALS } from '../../../static-data/static-search-estate';
import { useEffect } from 'react';

const ResultBuildingPermit = (): JSX.Element => {
  let isMounted = true;
  const router = useRouter();
  const loadData = async (): Promise<void> => {
    const result = await fetch(
      `/api/get-mortgage-registry?inseeCode=${router.query.inseeCode}`,
    );
    const jsonResult = await result.json();
    if (isMounted) {
      // eslint-disable-next-line no-console
      console.log(jsonResult);
    }
  };

  useEffect(() => {
    loadData();
    return (): void => {
      isMounted = false;
    };
  }, []);

  return (
    <SiteLayout>
      <StaticData baseLine={GLOBALS.baseLine}>
        <TITLES.H1>Registre des hypothèques pour...</TITLES.H1>

        {router.query.inseeCode}

        <Button
          onClick={() => router.back()}
          leftIcon={mdiArrowLeft}
          kind={EButtonKind.TERTIARY}
        />
      </StaticData>
    </SiteLayout>
  );
};

export default ResultBuildingPermit;
