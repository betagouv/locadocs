import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from '@locadocs/shared/utils/mongo';

type Data = {
  result: Array<Record<string, string>>;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> => {
  const { search } = req.query;
  const client = await connectToDb();
  const result = await client
    .db('locadocs')
    .collection('cities')
    .find({ $text: { $search: search as string } })
    .toArray();

  res.status(200).json({ result });
};
