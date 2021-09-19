/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-empty-function */
import { exec as execCallback, spawn } from 'child_process';
import { createInterface } from 'readline';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mkdir } from 'fs/promises';
import { promisify } from 'util';
import mongo from 'mongodb';

process.env.MONGO_URI = 'mongodb://localhost:3001';
const exec = promisify(execCallback);
const __dirname = dirname(fileURLToPath(import.meta.url));

await mkdir(join(__dirname, 'data')).catch(error => {
  if (error.code !== 'EEXIST') throw error;
});

const dbProcess = spawn(
  'mongod',
  [
    '--dbpath=data',
    '--port',
    '3001',
    '--replSet',
    'rs0',
    '--bind_ip',
    'localhost',
    '--quiet',
  ],
  { cwd: __dirname },
);

dbProcess.stderr.pipe(process.stderr);

dbProcess.on('exit', () => {
  process.kill();
});

process.on('exit', async () => {
  dbProcess.kill();
});

for await (const line of createInterface({ input: dbProcess.stdout })) {
  const json = JSON.parse(line.toString());

  if (json.msg === 'Waiting for connections') {
    break;
  }
}

await exec(`mongo ${process.env.MONGO_URI} --eval "rs.initiate()"`);

const client = await mongo.MongoClient.connect('mongodb://localhost:3001', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ignoreUndefined: true,
});

await Promise.all([
  client
    .db('locadocs')
    .collection('users')
    .createIndexes([{ key: { email: 1 }, unique: true }]),
]);

await client.close();
