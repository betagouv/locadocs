import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from '@locadocs/shared/utils/mongo';

type Data = {
  mortgageRegistry?: Document;
  city?: Document;
  error?: string;
};

export default async function getMortgageRegistry(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
): Promise<void> {
  const { inseeCode } = request.query;

  if (!inseeCode) {
    response.status(406).json({ error: 'You must provide an inseeCode.' });
  }

  const client = await connectToDb();
  const [mortgageRegistry, city] = await Promise.all([
    await client
      .db('locadocs')
      .collection('mortgageRegistries')
      .findOne({ cities: inseeCode }),
    await client.db('locadocs').collection('cities').findOne({ inseeCode }),
  ]);

  if (!mortgageRegistry) {
    response.status(404).json({ error: 'Registry not found.' });
  }

  response.status(200).json({
    city: city as Document,
    mortgageRegistry: mortgageRegistry as Document,
  });
}
