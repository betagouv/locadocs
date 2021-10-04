import React from 'react';
import { Container } from './CityAutoComplete.styled';
import { Input } from '@locadocs/design-system/components/Input';
import { Loader } from '@locadocs/design-system/components/Loader';
import NextLink from 'next/link';
import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';
import type { City } from '@locadocs/shared/types/City';

type TProps = {
  buildLink: (cityCode: string) => string;
};

export const CityAutoComplete: React.FC<TProps> = ({
  buildLink,
}): JSX.Element => {
  const [citiesFound, setCitiesFound] = React.useState<Array<City>>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [cityNotFound, setCityNotFound] = React.useState<boolean | string>(
    false,
  );
  let timeoutId: NodeJS.Timer;
  const onChange = async (event: React.FormEvent<HTMLInputElement>) => {
    const userInput = event.currentTarget.value;
    clearTimeout(timeoutId);
    setCityNotFound(false);

    if (userInput.length < 3) {
      setCitiesFound([]);
      return;
    }

    timeoutId = setTimeout(async () => {
      setIsLoading(true);

      const result = await fetch(`/api/get-cities?search=${userInput}`);
      const { result: cities } = await result.json();

      setCitiesFound(cities || []);
      setIsLoading(false);
      if (!cities || cities.length === 0) {
        setCityNotFound(userInput);
      } else {
        setCityNotFound(false);
      }
    }, 200);
  };

  return (
    <Container>
      <Input
        label="Entrez une ville, un code postal ou les deux"
        inputProps={{ onChange, placeholder: 'ex: bagneux la fosse 10340' }}
        error={cityNotFound ? `Pas de ville pour ${cityNotFound}` : undefined}
      />

      {isLoading && <Loader />}

      {!isLoading && citiesFound?.length > 0 && (
        <div className="results">
          {citiesFound.map(city => {
            let label = `${city.name}`;
            if (city.subCities && city.subCities.length > 0) {
              label += ` (${city.subCities.join(', ')})`;
            }
            label += ` - ${city.postalCode}`;

            return (
              <NextLink key={city.inseeCode} href={buildLink(city.inseeCode)}>
                <a href={buildLink(city.inseeCode)}>
                  <span>{label}</span>
                  <Icon path={mdiArrowRight} />
                </a>
              </NextLink>
            );
          })}
        </div>
      )}
    </Container>
  );
};
