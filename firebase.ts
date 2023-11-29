import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtdDnVPgs9QcMjaGpelBju-TUUwj5og_0",
  authDomain: "saas-translator-98b54.firebaseapp.com",
  projectId: "saas-translator-98b54",
  storageBucket: "saas-translator-98b54.appspot.com",
  messagingSenderId: "46174285494",
  appId: "1:46174285494:web:8033ea789d389f98778017"
};

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const functions = getFunctions(app);

  export {db, auth, functions };