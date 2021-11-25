import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from '@locadocs/shared/utils/mongo';

type Data = {
  city?: Data;
  error?: string;
};

export default async function getBuildingPermit(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
): Promise<void> {
  const { inseeCode } = request.query;

  if (!inseeCode) {
    response.status(406).json({ error: 'You must provide an inseeCode.' });
    return;
  }

  const client = await connectToDb();
  const city = await client
    .db('locadocs')
    .collection('cities')
    .findOne({ inseeCode });

  if (!city) {
    response.status(404).json({ error: 'City not found.' });
  }

  response.status(200).json({
    city: city as Data,
  });
}
