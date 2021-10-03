import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from '@locadocs/shared/utils/mongo';

type Data = {
  result: Array<Record<string, string>>;
};

export default async (
  request: NextApiRequest,
  response: NextApiResponse<Data>,
): Promise<void> => {
  const { search } = request.query;
  const client = await connectToDb();
  const result = await client
    .db('locadocs')
    .collection('cities')
    .find({ $text: { $search: search as string } })
    .toArray();

  response.status(200).json({ result });
};
