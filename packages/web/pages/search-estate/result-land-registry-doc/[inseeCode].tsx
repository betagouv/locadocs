import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SiteLayout } from '@components/Layouts';
import { StaticData } from '@views/StaticData';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { GLOBALS } from '../../../static-data/static-search-estate';
import { Loader } from '@locadocs/design-system/components/Loader';
import type { City } from '@locadocs/shared/types/City';

const ResultBuildingPermit = (): JSX.Element => {
  let isMounted = true;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [city, setCity] = useState<City>();

  const loadData = async (): Promise<void> => {
    setIsLoading(true);
    const { inseeCode } = router.query;

    if (!inseeCode) {
      return;
    }

    const result = await fetch(
      `/api/get-land-registry-documentation?inseeCode=${inseeCode}`,
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
              Documentation cadastrale pour {city?.name} - {city?.postalCode}
              {(city?.subCities?.length || []) > 0 &&
                ` (${city?.subCities.join(', ')})`}
            </TITLES.H1>

            <p>
              Le plan cadastral français est en ligne sur le site{' '}
              <a href="https://www.cadastre.gouv.fr/scpc/accueil.do">
                cadastre.gouv.fr
              </a>
              .
            </p>
            <p>
              Les plans cadastraux plus anciens sont conservés aux Archives
              départementales.
            </p>

            <p>
              Une partie de ces plans peut déjà être en ligne sur le site
              internet des Archives départementales. Retrouvez les coordonnées
              sur{' '}
              <a href="https://francearchives.fr/fr/annuaire/departements">
                l'annuaire des Archives départementales
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
