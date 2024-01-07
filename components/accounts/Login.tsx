import {Input, Link, Navbar, Text} from '@nextui-org/react';
import React, { useState } from 'react';
import { signInWithEmail } from '../../config/authUtils';
import {auth, firestore} from '../../config/firebase';
import { collection, getDocs } from "firebase/firestore"; 
import { doc, getDoc } from "firebase/firestore";


const UserLogin: React.FC = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const handleLogin = async () => {
      try {
         await signInWithEmail(email, password);
          // Get UID of the authenticated user
          auth.onAuthStateChanged(async (user: any) => {
         if (user) {
            const uid = user.uid;
            const querySnapshot = await getDocs(collection(firestore, "Blozum"));
            const docRef = doc(firestore, "Blozum", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
  const email = docSnap.data()["email"];
  const collection_id = docSnap.data()["collection_id"];
  const database_id = docSnap.data()["database_id"];
         
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
            // window.location.href = '/accounts'; // Redirect to dashboard
         } else {
            console.log("SIGNED OUT");
         }
         });
         
      } catch (error) {
         console.error('Error logging in:', error);
      }
   };

   return (
      <div>
         <h1>Login</h1>

                        <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  clearable
                  css={{
                     'w': '100%',
                     'transition': 'all 0.2s ease',
                     '@xsMax': {
                        w: '100%',
                        // mw: '300px',
                     },
                     '& .nextui-input-content--left': {
                        h: '100%',
                        ml: '$4',
                        dflex: 'center',
                     },
                  }}
                  placeholder="Email"
               />
                <Input
                  value={password}
                onChange={(e) => setPassword(e.target.value)}
                  clearable
                  css={{
                     'w': '100%',
                     'transition': 'all 0.2s ease',
                     '@xsMax': {
                        w: '100%',
                        // mw: '300px',
                     },
                     '& .nextui-input-content--left': {
                        h: '100%',
                        ml: '$4',
                        dflex: 'center',
                     },
                  }}
                  placeholder="Password"
         />
         <button onClick={handleLogin}>Log In</button>
      </div>
   );
};
export default UserLogin;
