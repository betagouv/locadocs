import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from '@locadocs/shared/utils/mongo';

export default async function satisfactionVotes(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  const { value, page, params } = request.body;
  const client = await connectToDb();
  await client
    .db('locadocs')
    .collection('satisfactionVotes')
    .insertOne({
      value,
      page,
      params,
      userAgent: request.headers['user-agent'],
      ip: request.headers['x-real-ip'] || request.connection.remoteAddress,
      createdAt: new Date(),
    });

  response.status(200).send('ok');
}
