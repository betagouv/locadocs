import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from '@locadocs/shared/utils/mongo';
// import type { MetaSortOperators } from 'mongodb';
import { normaliseCityName } from '@utils/normaliseCityName';

type TResponse = {
  result?: Array<Record<string, string>>;
  error?: string;
};

export default async function getCities(
  request: NextApiRequest,
  response: NextApiResponse<TResponse>,
): Promise<void> {
  const { search } = request.query;

  if (!search) {
    response.status(400).json({ error: 'You must provide a search.' });
    return;
  }

  const normalisedSearch = normaliseCityName(search as string);
  const postalCode = normalisedSearch
    .split(' ')
    .filter((value: string) => /^\d+$/.test(value))[0];
  const textSearch = normalisedSearch.replace(/[0-9]/g, '').trim();
  const searchQuery: Record<string, Record<string, string>> = {};

  if (postalCode) {
    searchQuery.postalCode = { $regex: postalCode };
  }

  if (textSearch) {
    searchQuery.name = { $regex: textSearch };
  }

  const client = await connectToDb();
  const result = await client
    .db('locadocs')
    .collection('cities')
    .find(searchQuery)
    .limit(25)
    .toArray();

  // const result = await client
  //   .db('locadocs')
  //   .collection('cities')
  //   .find({ $text: { $search: search as string } })
  //   .sort({
  //     score: { $meta: 'textScore' as MetaSortOperators },
  //   })
  //   .limit(25)
  //   .toArray();

  // console.log('***');
  // console.log('result');
  // console.log(result);

  response.status(200).json({ result });
}
