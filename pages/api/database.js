import sdk from "node-appwrite"

// const client = new sdk.Client();

// const databases = new sdk.Databases(client);

// client
//     .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT) // Your API Endpoint
//     .setProject(process.env.NEXT_PUBLIC_PROJECT) // Your project ID
//     .setKey(process.env.NEXT_PUBLIC_KEY) // Your secret API key
// ;


// const promise = databases.listDocuments(process.env.NEXT_PUBLIC_DATABASE, process.env.NEXT_PUBLIC_CHATS_COLLECTION);


// console.log(promise);
// promise.then(function (response:any) {
//     console.log(response);
// }, function (error:any) {
//     console.log(error);
// });


const client = new sdk.Client();
const databases = new sdk.Databases(client);

client
        .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT) // Your API Endpoint
        .setProject(process.env.NEXT_PUBLIC_PROJECT) // Your project ID
        .setKey(process.env.NEXT_PUBLIC_KEY) // Your secret API key
;

export default async function handler(req: any, res: any) {
    try {
        const promise = await databases.listDocuments(process.env.NEXT_PUBLIC_DATABASE, process.env.NEXT_PUBLIC_CHATS_COLLECTION);
        // this.chats = promise.documents;
        // this.Users = promise.total;
        console.log(promise.total);
        // console.log(promise.documents);
        res.status(200).json(promise.documents);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}