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
import type { MortgageRegistry } from '@locadocs/shared/types/MortgageRegistry';
import { StaticIleEtVilaine } from './StaticIleEtVilaine';
import { StaticSeineMartime } from './StaticSeineMartime';
import { StaticEure } from './StaticEure';
import { googleTrackEvent } from '@utils/google';

export const ResultMortgageRegistry = (): JSX.Element => {
  let isMounted = true;
  const router = useRouter();
  const { inseeCode } = router.query;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [city, setCity] = useState<undefined | City>();
  const [mortgageRegistry, setMortgageRegistry] = useState<
    undefined | MortgageRegistry
  >();
  const loadData = async (): Promise<void> => {
    setIsLoading(true);

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

  const DefaultContentPost55 = () =>
    mortgageRegistry ? (
      <>
        <TITLES.H2>Les actes de vente postérieurs à 1955</TITLES.H2>

        <p>
          La documentation hypothécaire postérieure à 1955 est disponible au
          Service de la publicité foncière{' '}
        </p>

        <p>
          <strong>{mortgageRegistry.title}</strong> -{' '}
          {mortgageRegistry.districtNumber} - {mortgageRegistry.districtName}
        </p>

        <ul>
          {mortgageRegistry.address && <li>{mortgageRegistry.address}</li>}
          {mortgageRegistry.email && <li>{mortgageRegistry.email}</li>}
          {mortgageRegistry.phone && <li>{mortgageRegistry.phone}</li>}
          {mortgageRegistry.moreInfos && <li>{mortgageRegistry.moreInfos}</li>}
        </ul>
      </>
    ) : (
      <React.Fragment />
    );

  let content = mortgageRegistry ? (
    <>
      <TITLES.H2>Les actes de vente jusqu'à 1955</TITLES.H2>

      <p>
        Les registres des transcriptions hypothécaires sont en théorie conservés
        aux Archives départementales jusqu’en 1955 inclus. Vous trouverez plus
        d'informations sur les actes notariés conservés par les Archives
        départementales sur{' '}
        <a href="https://francearchives.fr/fr/annuaire/departements">
          leur site internet
        </a>
        .
      </p>

      <DefaultContentPost55 />
    </>
  ) : (
    <React.Fragment />
  );

  if (
    mortgageRegistry &&
    city &&
    (city?.postalCode || '').slice(0, 2) === '35'
  ) {
    content = (
      <StaticIleEtVilaine>
        <DefaultContentPost55 />
      </StaticIleEtVilaine>
    );
  } else if (
    mortgageRegistry &&
    city &&
    (city?.postalCode || '').slice(0, 2) === '76'
  ) {
    content = (
      <StaticSeineMartime>
        <DefaultContentPost55 />
      </StaticSeineMartime>
    );
  } else if (
    mortgageRegistry &&
    city &&
    (city?.postalCode || '').slice(0, 2) === '27'
  ) {
    content = <StaticEure city={city} />;
  }

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
              Le lieu de conservation des registres des hypothèques dépend de
              l’année du registre.
            </p>

            <p>
              L'acte de vente devant être transmis à l'administration fiscale
              dans un délai d'un à deux mois, l'année du registre correspond
              donc à l'année de la signature de l'acte de vente ou à l'année
              suivante.
            </p>

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
          page="result-mortgage-registry"
          params={{ inseeCode: String(inseeCode), city: String(city?.name) }}
        />
      )}
    </SiteLayout>
  );
};
