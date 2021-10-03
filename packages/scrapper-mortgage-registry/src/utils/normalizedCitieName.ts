export const normalizedCitieName = (
  city: string,
  districtNumber: string,
): string | Array<string> => {
  const name = city
    .toLocaleUpperCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/-/g, ' ')
    .replace(/'/g, ' ')
    .replace(/’/g, ' ')
    .replace(' SAINTE ', ' STE ')
    .replace(' SAINT ', ' ST ')
    .replace(/^SAINTE /, 'STE ')
    .replace(/^SAINT /, 'ST ')
    .replace('Œ', 'OE')
    .replace(/  +/g, ' ');

  /**
   * Exceptions
   */
  if (districtNumber === '13') {
    switch (name) {
      case '1ER':
        return 'MARSEILLE 01';
      case '2EME':
        return 'MARSEILLE 02';
      case '3EME':
        return 'MARSEILLE 03';
      case '4EME':
        return 'MARSEILLE 04';
      case '5EME':
        return 'MARSEILLE 05';
      case '6EME':
        return 'MARSEILLE 06';
      case '7EME':
        return 'MARSEILLE 07';
      case '8EME':
        return 'MARSEILLE 08';
      case '9EME':
        return 'MARSEILLE 09';
      case '10EME':
        return 'MARSEILLE 10';
      case '11EME':
        return 'MARSEILLE 11';
      case '12EME':
        return 'MARSEILLE 12';
      case '13EME':
        return 'MARSEILLE 13';
      case '14EME':
        return 'MARSEILLE 14';
      case '15EME ET 16EME ARRONDISSEMENTS DE MARSEILLE':
        return ['MARSEILLE 15', 'MARSEILLE 16'];
    }
  }

  if (districtNumber === '69') {
    switch (name) {
      case 'LYON 1ER ARRONDISSEMENT':
        return 'LYON 01';
      case 'LYON 2E ARRONDISSEMENT':
        return 'LYON 02';
      case 'LYON 4E ARRONDISSEMENT':
        return 'LYON 04';
      case 'LYON 5E ARRONDISSEMENT':
        return 'LYON 05';
      case 'LYON 9E ARRONDISSEMENT':
        return 'LYON 09';
      case 'LYON 3E ARRONDISSEMENT':
        return 'LYON 03';
      case 'LYON 6E ARRONDISSEMENT':
        return 'LYON 06';
      case 'LYON 7E ARRONDISSEMENT':
        return 'LYON 07';
      case 'LYON 8E ARRONDISSEMENT':
        return 'LYON 08';
    }
  }

  if (districtNumber === '75') {
    switch (name) {
      case '1ER':
        return 'PARIS 01';
      case '2EME':
        return 'PARIS 02';
      case '3EME':
        return 'PARIS 03';
      case '4EME':
        return 'PARIS 04';
      case '5EME':
        return 'PARIS 05';
      case '6EME':
        return 'PARIS 06';
      case '7EME':
        return 'PARIS 07';
      case '8EME':
        return 'PARIS 08';
      case '9EME':
        return 'PARIS 09';
      case '10EME':
        return 'PARIS 10';
      case '11EME':
        return 'PARIS 11';
      case '12EME':
        return 'PARIS 12';
      case '13EME':
        return 'PARIS 13';
      case '14EME':
        return 'PARIS 14';
      case '15EME ET 16EME ARRONDISSEMENTS':
        return ['PARIS 15', 'PARIS 16'];
      case '17EME':
        return 'PARIS 17';
      case '18EME':
        return 'PARIS 18';
      case '19EME':
        return 'PARIS 19';
      case '20EME ARRONDISSEMENTS':
        return 'PARIS 20';
    }
  }

  if (name === 'LAMAGDELAINE SUR TARN') {
    return 'LA MAGDELAINE SUR TARN';
  }
  if (districtNumber === '35' && name === 'ST PERE') {
    return 'ST PERE MARC EN POULET';
  }
  if (districtNumber === '37' && name === 'PORTS') {
    return 'PORTS SUR VIENNE';
  }
  if (districtNumber === '42' && name === 'POMMIERS') {
    return 'POMMIERS EN FOREZ';
  }
  if (districtNumber === '74' && name === 'LE BOUCHET MONT CHARVIN') {
    return 'LE BOUCHET';
  }
  if (districtNumber === '84' && name === 'CASTELLET') {
    return 'CASTELLET EN LUBERON';
  }

  return name;
};
