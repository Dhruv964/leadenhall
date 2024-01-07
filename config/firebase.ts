import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAz89VgLZK-vTKhG4ZUhhzbhI7su_0WiL4",
  authDomain: "blozum-d2187.firebaseapp.com",
  projectId: "blozum-d2187",
  storageBucket: "blozum-d2187.appspot.com",
  messagingSenderId: "332300505990",
  appId: "1:332300505990:web:7593a8e8d81ffc836d9207",
  measurementId: "G-S7G1D15ZYN"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
