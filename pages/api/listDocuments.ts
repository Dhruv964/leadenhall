// import sdk from "node-appwrite";

// export default async function handler(req, res) {
//     const client = new sdk.Client();
//     const databases = new sdk.Databases(client);

//     client
//         .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
//         .setProject(process.env.NEXT_PUBLIC_PROJECT)
//         .setKey(process.env.NEXT_PUBLIC_KEY);

//     try {
//         const response = await databases.listDocuments(process.env.NEXT_PUBLIC_DATABASE, process.env.NEXT_PUBLIC_CHATS_COLLECTION);
//         res.status(200).json(response);
//         // const data = JSON.parse(response);

//         // Filter objects with user_id "tanmayjuneja"
//         const filteredData = response.documents.filter(doc => doc.user_id === "tanmayjuneja12");
//         const numRequests = filteredData[0].num_requests;
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "An error occurred" });
//     }
// }


// pages/api/getRequests.js

import sdk from "node-appwrite";

export default async function handler(req, res) {
    const client = new sdk.Client();
    const databases = new sdk.Databases(client);

    client
        .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
        .setProject(process.env.NEXT_PUBLIC_PROJECT)
        .setKey(process.env.NEXT_PUBLIC_KEY);

    try {
        const response = await databases.listDocuments(process.env.NEXT_PUBLIC_DATABASE, process.env.NEXT_PUBLIC_CHATS_COLLECTION);
        // console.log(response);
        // Filter objects with user_id "tanmayjuneja"
        const totalConversations = response["total"];

        const filteredData = response.documents.filter(doc => doc.user_id === "tanmayjuneja12");

        const numRequests = parseInt(filteredData[0].num_requests);

        const fallBack = parseInt(filteredData[0].negative_responses);
        const convertedLeads = totalConversations - fallBack;



        // Get the count of unique user IDs
        // Specify the target date for which you want to count new users
        const targetDate = '2023-07-18'; // Change this date to your desired target date

        // Create a Set to store unique user IDs
        const uniqueUserIds = new Set();

        // Iterate through the documents array and add user IDs to the Set
        response.documents.forEach(document => {
            uniqueUserIds.add(document.user_id);
        });

        // Get the count of unique user IDs
        const numberOfUniqueUserIds = uniqueUserIds.size;

        // Calculate new unique users for the target date
        const numChatsTargetDate = response.documents.filter(document => {
            const createdAtDate = new Date(document['$createdAt']).toISOString().split('T')[0];
            return createdAtDate === targetDate;
        }).length;

        // Calculate new unique users for today
        const currentDate = new Date().toISOString().split('T')[0];
        const numChatsToday = response.documents.filter(document => {
            const createdAtDate = new Date(document['$createdAt']).toISOString().split('T')[0];
            return createdAtDate === currentDate;
        }).length;


        const newUsersForTargetDate = response.documents.filter(document => {
            const createdAtDate = new Date(document['$createdAt']).toISOString().split('T')[0];
            return createdAtDate === targetDate;
        }).reduce((accumulator, document) => {
            accumulator.add(document.user_id);
            return accumulator;
        }, new Set()).size;

        console.log(`New unique users for ${targetDate}: ${newUsersForTargetDate}`);

        // Calculate new unique users for today
        const newUsersForToday = response.documents.filter(document => {
            const createdAtDate = new Date(document['$createdAt']).toISOString().split('T')[0];
            return createdAtDate === currentDate;
        }).reduce((accumulator, document) => {
            accumulator.add(document.user_id);
            return accumulator;
        }, new Set()).size;

        const datesArray = [];
        const numChatsArray = [];
        const numUniqueUsersArray = [];

        for (let i = 0; i < 7; i++) {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() - i);
            const currentDateString = currentDate.toISOString().split('T')[0];

            datesArray.unshift(currentDateString); // Add the date to the beginning of the array

            // Calculate the number of chats for the current date
            const numChatsForDate = response.documents.filter(document => {
                const createdAtDate = new Date(document['$createdAt']).toISOString().split('T')[0];
                return createdAtDate === currentDateString;
            }).length;
            numChatsArray.unshift(numChatsForDate); // Add the number of chats to the beginning of the array

            // Calculate the number of unique users for the current date
            const numUniqueUsersForDate = response.documents.filter(document => {
                const createdAtDate = new Date(document['$createdAt']).toISOString().split('T')[0];
                return createdAtDate === currentDateString;
            }).reduce((accumulator, document) => {
                accumulator.add(document.user_id);
                return accumulator;
            }, new Set()).size;
            numUniqueUsersArray.unshift(numUniqueUsersForDate); // Add the number of unique users to the beginning of the array
        }


        res.status(200).json({
            numRequests,
            totalConversations,
            convertedLeads,
            fallBack,
            numberOfUniqueUserIds,
            numChatsToday,
            numChatsTargetDate,
            newUsersForToday,
            newUsersForTargetDate,
            datesArray,
            numChatsArray,
            numUniqueUsersArray
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
}
