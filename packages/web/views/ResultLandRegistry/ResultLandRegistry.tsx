import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SiteLayout } from '@components/Layouts';
import { StaticData } from '@views/StaticData';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { GLOBALS } from '../../static-data/static-search-estate';
import { Loader } from '@locadocs/design-system/components/Loader';
import type { City } from '@locadocs/shared/types/City';
import { Questionnaire } from '@components/Questionnaire';
import { StaticEure } from './StaticEure';
import { StaticIleEtVilaine } from './StaticIleEtVilaine';
import { StaticSeineMartime } from './StaticSeineMartime';
import { googleTrackEvent } from '@utils/google';

export const ResultLandRegistry = (): JSX.Element => {
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

    const result = await fetch(`/api/get-land-registry?inseeCode=${inseeCode}`);
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

  let content: JSX.Element = (
    <>
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
        Une partie de ces plans peut déjà être en ligne sur le site internet des
        Archives départementales. Retrouvez les coordonnées sur{' '}
        <a href="https://francearchives.fr/fr/annuaire/departements">
          l'annuaire des Archives départementales
        </a>
        .
      </p>
    </>
  );

  if ((city?.postalCode || '').slice(0, 2) === '35') {
    content = <StaticIleEtVilaine />;
  } else if ((city?.postalCode || '').slice(0, 2) === '76') {
    content = <StaticSeineMartime />;
  } else if ((city?.postalCode || '').slice(0, 2) === '27') {
    content = <StaticEure />;
  }

  return (
    <SiteLayout>
      <StaticData baseLine={GLOBALS.baseLine}>
        {isLoading && <Loader />}

        {!isLoading && (
          <>
            <TITLES.H1>
              Le cadastre pour {city?.name} - {city?.postalCode}
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
          page="result-land-registry"
          params={{ inseeCode: String(inseeCode), city: String(city?.name) }}
        />
      )}
    </SiteLayout>
  );
};
