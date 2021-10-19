import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from '@locadocs/shared/utils/mongo';

export default async function getCities(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  const { value, origin } = request.body;
  const client = await connectToDb();
  await client
    .db('locadocs')
    .collection('satisfactionVotes')
    .insertOne({
      value,
      origin,
      userAgent: request.headers['user-agent'],
      ip: request.headers['x-real-ip'] || request.connection.remoteAddress,
      createdAt: new Date(),
    });

  response.status(200).send('ok');
}
