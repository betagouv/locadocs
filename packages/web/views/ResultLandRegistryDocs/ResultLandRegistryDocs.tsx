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

export const ResultLandRegistryDocs = (): JSX.Element => {
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

  let content: JSX.Element = (
    <>
      <p>
        Pour consulter la documentation cadastre écrite, il convient de
        s’adresser :
      </p>

      <p>
        Soit au centre des impôts. Vous pouvez retrouver les coordonnées des
        centres des impôts sur{' '}
        <a href="https://lannuaire.service-public.fr/navigation/centre_impots_fonciers">
          l’annuaire de service.public.fr
        </a>
        .
      </p>

      <p>
        Soit, pour la partie plus ancienne, aux Archives départementales. Vous
        pouvez retrouver les coordonnées sur{' '}
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
