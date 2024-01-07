import React, { useEffect, useState } from 'react';
// import { Appwrite } from 'appwrite';
import LoginPage from './login';
import { Content } from '../components/home/content';
import { account } from '../lib/appwrite';



const Home: React.FC = (props) => {
   const [user, setUser] = useState<any | null>(null);
   const [isLoading, setIsLoading] = useState(true);
   

   //
   

   useEffect(() => {
      // const appwrite = new Appwrite();
      // appwrite.setEndpoint('YOUR_APPWRITE_ENDPOINT'); // Replace with your Appwrite endpoint
      // appwrite.setProject('YOUR_APPWRITE_PROJECT_ID'); // Replace with your Appwrite project ID

      // Check if the user is authenticated with Appwrite
      // const session = account.getSession('current');
      const getData = account.get()
      getData.then((response) => {
         setUser(response);
         console.log(response)
      })
      .catch((error) => {
         setUser(null);
         console.log(error)
      })
      .finally(() => {
         setIsLoading(false);
         console.log("finally")
      });
   }, []);

   if (isLoading) {
      return <p>Loading...</p>;
   }
   
   return (
      <div>
         {user ? <><Content numRequests={props.numRequests} numberOfUniqueUserIds={props.numberOfUniqueUserIds} newUsersForToday={props.newUsersForToday} /></> : <LoginPage />}
      </div>
   );
};


export default Home;


export async function getServerSideProps() {

      try {
         const response = await fetch('http://localhost:3000/api/listDocuments');
         const data = await response.json();
         const { numRequests, numberOfUniqueUserIds, newUsersForToday } = data;

         return {
            props: {
                  numRequests : numRequests,
                  numberOfUniqueUserIds : numberOfUniqueUserIds,
                  newUsersForToday : newUsersForToday
            }
         };
      } catch (error) {
         console.error(error);
         return {
            props: {
                  numRequests: null // Handle error gracefully
            }
         };
      }
}
