import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { SiteLayout } from '@components/Layouts';
import { StaticData } from '@views/StaticData';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { GLOBALS } from '../../../static-data/static-search-estate';
import type { City } from '@locadocs/shared/types/City';
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
              Actes notariés pour {city?.name} - {city?.postalCode}
              {(city?.subCities?.length || []) > 0 &&
                ` (${city?.subCities.join(', ')})`}
            </TITLES.H1>

            <p>
              Le lieu de conservation des actes notariés dépend de la date de
              l’acte.
            </p>

            <TITLES.H2>Les actes de moins de 75 ans</TITLES.H2>
            <p>
              Les actes de moins de 75 ans sont conservés par le notaire qui les
              a établis ou par son successeur.
            </p>
            <p>Pour contacter le notaire ou son successeur :</p>
            <ul>
              <li>
                Retrouver les coordonnées du notaire ou de son successeur sur{' '}
                <a href="https://www.notaires.fr/fr/annuaires-notaire">
                  l'annuaire en ligne des notaires de France
                </a>
                .
              </li>
              <li>
                Si vous ne connaissez pas le nom du successeur du notaire, il
                est possible de s'adresser à la{' '}
                <a href="https://www.notaires.fr/fr/annuaire-chambre-notaire">
                  chambre départementale
                </a>
                .
              </li>
            </ul>

            <TITLES.H2>Les actes de plus de 75 ans</TITLES.H2>
            <p>
              Les actes notariés de plus de 75 ans sont en théorie conservés aux
              Archives départementales. Cette date n'est pas fixe et il arrive
              que le notaire conserve des actes plus anciens.
            </p>

            <p>
              Vous trouverez plus d'informations sur les actes notariés
              conservés par les Archives départementales sur leur site internet.
              Retrouvez les coordonnées sur{' '}
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
