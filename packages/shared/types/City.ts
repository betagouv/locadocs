export type City = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _id: string;
  name: string;
  inseeCode: string;
  postalCode: string;
  subCities: Array<string>;
};
