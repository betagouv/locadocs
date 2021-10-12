import { useRouter } from 'next/router';
import { SiteLayout } from '@components/Layouts';
import { StaticData } from '@views/StaticData';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { GLOBALS } from '../../../static-data/static-search-estate';
import { useEffect, useState } from 'react';
import { Loader } from '@locadocs/design-system/components/Loader';
import type { City } from '@locadocs/shared/types/City';
import type { MortgageRegistry } from '@locadocs/shared/types/MortgageRegistry';
import { Questionnaire } from '@components/Questionnaire';

const ResultBuildingPermit = (): JSX.Element => {
  let isMounted = true;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [city, setCity] = useState<undefined | City>();
  const [mortgageRegistry, setMortgageRegistry] = useState<
    undefined | MortgageRegistry
  >();
  const loadData = async (): Promise<void> => {
    setIsLoading(true);
    const { inseeCode } = router.query;

    if (!inseeCode) {
      return;
    }

    const result = await fetch(
      `/api/get-mortgage-registry?inseeCode=${inseeCode}`,
    );
    const { city, mortgageRegistry } = await result.json();

    if (isMounted) {
      setCity(city);
      setMortgageRegistry(mortgageRegistry);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();

    return (): void => {
      isMounted = false;
    };
  }, [router.query]);

  return (
    <SiteLayout>
      <StaticData baseLine={GLOBALS.baseLine}>
        {isLoading && <Loader />}

        {!isLoading && city && mortgageRegistry && (
          <>
            <TITLES.H1>
              Registre des hypothèques pour {city.name} - {city.postalCode}
              {city?.subCities.length > 0 && ` (${city.subCities.join(', ')})`}
            </TITLES.H1>

            <p>
              <strong>{mortgageRegistry.title}</strong> -{' '}
              {mortgageRegistry.districtNumber} -{' '}
              {mortgageRegistry.districtName}
            </p>

            <ul>
              {mortgageRegistry.address && <li>{mortgageRegistry.address}</li>}
              {mortgageRegistry.email && <li>{mortgageRegistry.email}</li>}
              {mortgageRegistry.phone && <li>{mortgageRegistry.phone}</li>}
              {mortgageRegistry.moreInfos && (
                <li>{mortgageRegistry.moreInfos}</li>
              )}
            </ul>

            <Button
              onClick={() => router.back()}
              leftIcon={mdiArrowLeft}
              kind={EButtonKind.TERTIARY}
            />
          </>
        )}
      </StaticData>

      <Questionnaire origin="result-mortgage-registry" />
    </SiteLayout>
  );
};

export default ResultBuildingPermit;
