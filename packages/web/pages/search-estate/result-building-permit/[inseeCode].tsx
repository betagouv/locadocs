import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { SiteLayout } from '@components/Layouts';
import { StaticData } from '@views/StaticData';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import type { City } from '@locadocs/shared/types/City';
import { GLOBALS } from '../../../static-data/static-search-estate';
import { Loader } from '@locadocs/design-system/components/Loader';

const ResultBuildingPermit = (): JSX.Element => {
  let isMounted = true;
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [city, setCity] = React.useState<City>();

  const loadData = async (): Promise<void> => {
    setIsLoading(true);
    const { inseeCode } = router.query;

    if (!inseeCode) {
      return;
    }

    const result = await fetch(
      `/api/get-mortgage-registry?inseeCode=${inseeCode}`,
    );
    const { city } = await result.json();

    if (isMounted) {
      setCity(city);
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

        {!isLoading && (
          <>
            <TITLES.H1>
              Permis de construire pour {city?.name} - {city?.postalCode}
              {(city?.subCities?.length || []) > 0 &&
                ` (${city?.subCities.join(', ')})`}
            </TITLES.H1>

            <p>
              Les permis de construire sont conservés à la mairie de la commune
              où a été construit le bien.
            </p>
            <p>
              Retrouver les coordonnées de la mairie sur{' '}
              <a href="https://lannuaire.service-public.fr/navigation/mairie">
                l'annuaire de service-public.fr
              </a>
              .
            </p>

            <Button
              onClick={() => router.back()}
              leftIcon={mdiArrowLeft}
              kind={EButtonKind.TERTIARY}
            />
          </>
        )}
      </StaticData>
    </SiteLayout>
  );
};

export default ResultBuildingPermit;
