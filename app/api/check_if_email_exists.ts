/* eslint-disable import/no-anonymous-default-export */
//@ts-nocheck
import { Client, Databases, ID, Query } from 'node-appwrite';
import { getSession } from "next-auth/react";

export default async (req, res) => {
    const session = await getSession({ req });
    const client = new Client();
    const databases = new Databases(client);
    const user_email = session?.user?.email;

    client
            .setEndpoint(process.env.APPWRITE_ENDPOINT)  
            .setProject(process.env.APPWRITE_PROJECT_ID) 
            .setKey(process.env.APPWRITE_PVT_KEY) 
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const documents = await databases.listDocuments(
            process.env.APPWRITE_DATABASE_ID,
            process.env.APPWRITE_BLZCREDITS_COLLECTION_ID,
            [
                Query.equal('user_email', [user_email]),
            ]
        );

        if (documents.documents.length === 0) {
            // Document not found, return error

            return res.status(201).json({"error": "User not found"});
        } else {
            const userDocument = documents.documents[0];
            return res.status(200).json(userDocument);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
