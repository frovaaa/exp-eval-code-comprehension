import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
if (!uri) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

async function connectToDatabase(): Promise<{ db: Db; client: MongoClient }> {
  if (cachedClient && cachedDb) {
    // console.log('Using cached db and client');
    return { db: cachedDb, client: cachedClient };
  }

  // console.log('Creating new db and client');
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(process.env.MONGODB_DB_NAME);

  cachedClient = client;
  cachedDb = db;

  // console.log('Returning new db and client');
  return { db, client };
}

export async function getDbAndClient(): Promise<{
  db: Db;
  client: MongoClient;
}> {
  return connectToDatabase();
}

export async function closeDbAndClient() {
  if (!cachedClient || !cachedDb) {
    // console.log('No client or db to close');
    return;
  }

  await cachedClient.close();
  cachedClient = null;
  cachedDb = null;
  // console.log('Closed db and client');
}
