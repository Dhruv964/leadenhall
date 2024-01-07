import {Client, Account} from 'appwrite'
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64ac585281a2737d25cf')
    
export const account = new Account(client);
// export const handleSign = async () => {
//     account.createOAuth2Session('google', 'http://localhost:3000/', 'http://localhost:3000/login');
//   };
// account.createOAuth2Session('google', 'http://localhost:4321/demo', 'http://localhost:4321')
// const session = await account.getSession('current')