import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from '@locadocs/shared/utils/mongo';
import type { City } from '@locadocs/shared/types/City';

type TResponse = {
  mortgageRegistry?: Record<string, string>;
  city?: City;
  error?: string;
};

export default async function getMortgageRegistry(
  request: NextApiRequest,
  response: NextApiResponse<TResponse>,
): Promise<void> {
  const { inseeCode } = request.query;

  if (!inseeCode) {
    response.status(406).json({ error: 'You must provide an inseeCode.' });
    return;
  }

  const client = await connectToDb();
  const [mortgageRegistry, city] = await Promise.all([
    (await client
      .db('locadocs')
      .collection('mortgageRegistries')
      .findOne({ cities: inseeCode })) as unknown as Record<string, string>,
    (await client
      .db('locadocs')
      .collection('cities')
      .findOne({ inseeCode })) as unknown as City,
  ]);

  if (!mortgageRegistry) {
    response.status(404).json({ error: 'Registry not found.' });
  }

  response.status(200).json({
    city: city || undefined,
    mortgageRegistry: mortgageRegistry || undefined,
  });
}
