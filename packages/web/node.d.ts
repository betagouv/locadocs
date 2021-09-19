declare module NodeJS {
  interface Global {
    mongo?: {
      client?: import('mongodb').MongoClient;
      promise?: Promise<import('mongodb').MongoClient>;
    };
    dbProcess?: import('child_process').ChildProcessWithoutNullStreams;
  }
}
