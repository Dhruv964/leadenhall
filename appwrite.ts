import { Client, Databases, ID, Storage, InputFile } from "node-appwrite";

const client = new Client();
client
  .setEndpoint(process.env.APPWRITE_ENDPOINT!)
  .setProject(process.env.APPWRITE_PROJECT_ID!)
  .setKey(process.env.APPWRITE_PVT_KEY!);

const databases = new Databases(client);

const storage = new Storage(client);

export { client, databases, ID, storage, InputFile };
