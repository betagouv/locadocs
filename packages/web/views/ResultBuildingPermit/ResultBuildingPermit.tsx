import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SiteLayout } from '@components/Layouts';
import { StaticData } from '@views/StaticData';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import type { City } from '@locadocs/shared/types/City';
import { GLOBALS } from '../../static-data/static-search-estate';
import { Loader } from '@locadocs/design-system/components/Loader';
import { Questionnaire } from '@components/Questionnaire';
import { StaticRennes } from './StaticRennes';
import { StaticHavre } from './StaticHavre';
import { googleTrackEvent } from '@utils/google';

export const ResultBuildingPermit = (): JSX.Element => {
  let isMounted = true;
  const router = useRouter();
  const { inseeCode } = router.query;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [city, setCity] = useState<City>();

  const loadData = async (): Promise<void> => {
    setIsLoading(true);
    const { inseeCode } = router.query;

    if (!inseeCode) {
      return;
    }

    const result = await fetch(
      `/api/get-building-permit?inseeCode=${inseeCode}`,
    );
    const { city } = await result.json();

    if (isMounted) {
      setCity(city);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    googleTrackEvent({
      action: 'conversion',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      params: { send_to: 'AW-864368696/VVKtCO67uYUDELjwlJwD' },
    });

    loadData();

    return (): void => {
      isMounted = false;
    };
  }, [router.query]);

  let content: JSX.Element;

  if (inseeCode === '35238') {
    content = <StaticRennes />;
  } else if (inseeCode === '76351') {
    content = <StaticHavre />;
  } else {
    content = (
      <>
        <p>
          Les permis de construire sont conservés à la mairie de la commune où a
          été construit le bien.
        </p>
        <p>
          Retrouver les coordonnées de la mairie sur{' '}
          <a href="https://lannuaire.service-public.fr/navigation/mairie">
            l'annuaire de service-public.fr
          </a>
          .
        </p>
      </>
    );
  }

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

            {content}

            <Button
              onClick={() => router.back()}
              leftIcon={mdiArrowLeft}
              kind={EButtonKind.TERTIARY}
            />
          </>
        )}
      </StaticData>

      {!isLoading && (
        <Questionnaire
          page="result-building-permit"
          params={{ inseeCode: String(inseeCode), city: String(city?.name) }}
        />
      )}
    </SiteLayout>
  );
};
