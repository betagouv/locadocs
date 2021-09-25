import React from 'react';
import { Container } from './CityAutoCompleteStyles';
import { Input } from '@locadocs/design-system/components/Input';

type TCity = {
  inseeCode: string;
  name: string;
  postalCode: string;
  subCities: Array<string>;
};

export const CityAutoComplete: React.FC<unknown> = (): JSX.Element => {
  const [citiesFound, setCitiesFound] = React.useState<Array<TCity>>([]);

  const onChange = async (event: React.FormEvent<HTMLInputElement>) => {
    const userInput = event.currentTarget.value;
    if (userInput.length < 3) {
      setCitiesFound([]);
      return;
    }

    const result = await fetch(`/api/get-cities?search=${userInput}`);
    const { result: cities } = await result.json();

    setCitiesFound(cities || []);
  };

  return (
    <Container>
      <Input label="Entrez une ville" inputProps={{ onChange }} />
      {citiesFound.length > 0 &&
        citiesFound.map(city => (
          <div key={city.inseeCode}>
            {city.name} - {city.postalCode} -
          </div>
        ))}
    </Container>
  );
};
