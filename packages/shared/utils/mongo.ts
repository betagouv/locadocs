import { MongoClient } from 'mongodb';

const cached = (global as any).mongo ?? {
  client: undefined,
  promise: undefined,
};

export async function connectToDb(): Promise<MongoClient> {
  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    cached.promise = MongoClient.connect(
      process.env.MONGO_URI || ('http://localhost:3001' as string),
      {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        ignoreUndefined: true,
      },
    );
  }

  cached.client = await cached.promise;

  return cached.client;
}
