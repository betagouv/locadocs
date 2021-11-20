import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from '@locadocs/shared/utils/mongo';

export default async function sendSuggestion(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  const { comment, page, params, email } = request.body;
  const client = await connectToDb();
  await client
    .db('locadocs')
    .collection('suggestions')
    .insertOne({
      comment,
      createdAt: new Date(),
      email,
      ip: request.headers['x-real-ip'] || request.connection.remoteAddress,
      page,
      params,
      userAgent: request.headers['user-agent'],
    });

  response.status(200).send('ok');
}
