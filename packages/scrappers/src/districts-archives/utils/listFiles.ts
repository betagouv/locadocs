import { districtsList } from '../../shared-utils/districtsList';

export const districtsURLsList = districtsList.map(districtNumber => {
  return {
    districtNumber,
    url: `https://francearchives.fr/fr/annuaire/departements?dpt=${districtNumber}`,
  };
});
