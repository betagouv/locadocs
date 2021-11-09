import { districtsList } from '../../shared-utils/districtsList';

export const districtsURLsList = districtsList.map(districtNumber => {
  const value =
    districtNumber.length === 3 ? districtNumber : districtNumber + '0';

  return {
    districtNumber,
    url: `http://www2.impots.gouv.fr/contacts/spf/dep/${value}.htm`,
  };
});
