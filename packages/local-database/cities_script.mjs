import mongo from 'mongodb';
import parse from 'csv-parse';
import fs from 'fs';

/**
 * Script to inject the French cities in the database
 */
const records = {};
const codeSet = new Set();
const parser = fs.createReadStream(`./cities.csv`).pipe(
  parse({
    delimiter: ';',
  }),
);

for await (const record of parser) {
  const [inseeCode, name, postalCode, line5] = record;

  if (inseeCode === 'Code_commune_INSEE') {
    continue;
  }

  if (codeSet.has(inseeCode)) {
    records[inseeCode].subCities.push(line5);
  } else {
    codeSet.add(inseeCode);

    records[inseeCode] = {
      inseeCode,
      postalCode,
      name,
      subCities: line5 === '' ? [] : [line5],
    };
  }
}

const client = await mongo.MongoClient.connect('mongodb://localhost:3001', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ignoreUndefined: true,
});
await client
  .db('locadocs')
  .collection('cities')
  .insertMany(Object.values(records));
await client.close();
