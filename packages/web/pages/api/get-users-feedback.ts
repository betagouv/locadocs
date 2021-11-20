import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from '@locadocs/shared/utils/mongo';

export default async function getBuildingPermit(
  _request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  const client = await connectToDb();
  const [satisfactionVotes, suggestions] = await Promise.all([
    await client
      .db('locadocs')
      .collection('satisfactionVotes')
      .find()
      .toArray(),
    await client.db('locadocs').collection('suggestions').find().toArray(),
  ]);

  response.status(200).json({
    satisfactionVotes: satisfactionVotes.map(vote => ({
      page: vote.page,
      params: vote.params,
      value: vote.value,
      createdAt: vote.createdAt,
    })),
    suggestions: suggestions.map(suggestion => ({
      comment: suggestion.comment,
      email: suggestion.email,
      createdAt: suggestion.createdAt,
      page: suggestion.page,
      params: suggestion.params,
    })),
  });
}
