export const normalizeCityName = (city: string): string => {
  return city
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
};
