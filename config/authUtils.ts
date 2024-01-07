import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from './firebase';


// Function to sign in using email and password
export const signInWithEmail = async (email: string, password: string) => {
   try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
   } catch (error) {
      throw error;
   }
};




// Function to get user-specific data from Firestore
// export const getUserData = async (userId: string) => {
//    try {
//       const userDoc = await firestore.collection('users').doc(userId).get();
//       if (userDoc.exists) {
//          return userDoc.data();
//       }
//       return null;
//    } catch (error) {
//       throw error;
//    }
// };
