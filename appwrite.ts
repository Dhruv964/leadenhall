import { Client, Databases, ID } from "node-appwrite";

const client = new Client();
client
  .setEndpoint(process.env.APPWRITE_ENDPOINT!)
  .setProject(process.env.APPWRITE_PROJECT_ID!)
  .setKey(process.env.APPWRITE_PVT_KEY!);

const databases = new Databases(client);

export { client, databases, ID };
