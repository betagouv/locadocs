import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from '@locadocs/shared/utils/mongo';
import type { MetaSortOperators } from 'mongodb';

type Data = {
  result?: Array<Record<string, string>>;
  error?: string;
};

export default async function getCities(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
): Promise<void> {
  const { search } = request.query;

  if (!search) {
    response.status(400).json({ error: 'You must provide a search.' });
    return;
  }

  const client = await connectToDb();
  const result = await client
    .db('locadocs')
    .collection('cities')
    .find({ $text: { $search: search as string } })
    .sort({
      score: { $meta: 'textScore' as MetaSortOperators },
    })
    .limit(25)
    .toArray();

  response.status(200).json({ result });
}
