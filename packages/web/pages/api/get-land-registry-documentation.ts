import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from '@locadocs/shared/utils/mongo';
import type { City } from '@locadocs/shared/types/City';

type TResponse = {
  city?: City;
  error?: string;
};

export default async function getLandRegistryDocumentation(
  request: NextApiRequest,
  response: NextApiResponse<TResponse>,
): Promise<void> {
  const { inseeCode } = request.query;

  if (!inseeCode) {
    response.status(406).json({ error: 'You must provide an inseeCode.' });
    return;
  }

  const client = await connectToDb();
  const city = (await client
    .db('locadocs')
    .collection('cities')
    .findOne({ inseeCode })) as unknown as City;

  if (!city) {
    response.status(404).json({ error: 'City not found.' });
  }

  response.status(200).json({
    city: city || undefined,
  });
}
