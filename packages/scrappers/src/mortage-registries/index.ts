#!/usr/bin/env ts-node
/* eslint-disable no-console */
import { districtsURLsList } from './utils/listFiles';
import { normalizedCitieName } from './utils/normalizedCitieName';
import { getNodeText } from './utils/getNodeText';
import fetch from 'node-fetch';
import { parse } from 'node-html-parser';
import { connectToDb } from '@locadocs/shared/utils/mongo';

let client: any;
let citiesCollection: any;
let mortgageRegistriesCollection: any;

const processDistrict = async (targetDistrict: {
  url: string;
  districtNumber: string;
}) => {
  const response = await fetch(targetDistrict.url);
  const body = await response.text();
  const page = parse(body);

  const districtName = page
    .querySelector('h2')
    ?.innerText.split(' – ')
    .slice(1)
    .join(' ');
  const services = page.querySelectorAll('.service');
  const data = [];

  for (const service of services) {
    const title = getNodeText(service.querySelector('h3'));

    if (title === 'Département soumis au livre foncier') {
      continue;
    }

    const address = getNodeText(service.querySelector('.adresse'));
    const email = getNodeText(service.querySelector('.mel'));
    const phone = getNodeText(service.querySelector('.tel'));
    const moreInfos = getNodeText(service.querySelector('.inner'));
    const listText = service
      .querySelector('.ressort')
      ?.querySelector('.list').innerText;
    let cities: Array<string> = [];

    if (listText === 'Toutes les communes du département.') {
      cities = (
        await citiesCollection
          .find({
            postalCode: {
              $regex: new RegExp(`^${targetDistrict.districtNumber}`),
            },
          })
          .toArray()
      ).map(city => city.inseeCode);
    } else {
      let citiesList = service
        .querySelector('.ressort')
        ?.querySelector('.list')
        ?.innerText?.replace(/\./, ',')
        ?.replace(/ *\([^)]*\) */g, '')
        ?.split(',')
        .map(city => {
          const name = city.replace('.', '');
          const normalizedName = normalizedCitieName(
            name,
            targetDistrict.districtNumber,
          );

          if (Array.isArray(normalizedName)) {
            return normalizedName.map(normalizedName => ({
              name: 'split',
              normalizedName,
            }));
          }

          return {
            name,
            normalizedName,
          };
        });

      citiesList = citiesList
        .flat()
        .filter(city => city.normalizedName && city.normalizedName !== '');

      for (const city of citiesList) {
        const result = (
          await citiesCollection
            .find({
              name: city.normalizedName,
              postalCode: {
                $regex: new RegExp(`^${targetDistrict.districtNumber}`),
              },
            })
            .toArray()
        ).map(city => city.inseeCode);

        cities = [...cities, ...result];

        if (result.length !== 1) {
          const resultSubCities = await citiesCollection
            .find({
              subCities: city.normalizedName,
              postalCode: {
                $regex: new RegExp(`^${targetDistrict.districtNumber}`),
              },
            })
            .toArray();

          if (resultSubCities.length !== 1) {
            console.log(city.normalizedName, targetDistrict);
          }
        }
      }
    }

    data.push({
      districtNumber: targetDistrict.districtNumber,
      districtName,
      title,
      address,
      email,
      phone,
      moreInfos,
      cities,
    });
  }

  for (const dataPoint of data) {
    await mortgageRegistriesCollection.updateOne(
      {
        title: dataPoint.title,
      },
      { $set: dataPoint },
      {
        upsert: true,
      },
    );
  }

  console.log(`DONE : ${targetDistrict.districtNumber}`);
};

(async () => {
  console.log('START');

  client = await connectToDb();
  citiesCollection = await client.db('locadocs').collection('cities');
  mortgageRegistriesCollection = await client
    .db('locadocs')
    .collection('mortgageRegistries');

  // let index = 0;
  for (const district of districtsURLsList) {
    // if (index < 90 || index > 10000) {
    //   index++;
    //   continue;
    // }

    await processDistrict(district);

    // index++;
  }

  console.log('END');
})();
