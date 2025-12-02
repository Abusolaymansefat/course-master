import { MongoClient, ServerApiVersion } from "mongodb";

export const dbConnect = (collectionName) => {
  const uri = process.env.DB_URL;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
   client.connect();
  return client.db(process.env.DB_NAME).collection(collectionName);
};