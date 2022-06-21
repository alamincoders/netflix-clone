// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGpkInuB9igr-gI2KFRv0dQ3KIGN7utBY",
  authDomain: "netflix2-8852a.firebaseapp.com",
  projectId: "netflix2-8852a",
  storageBucket: "netflix2-8852a.appspot.com",
  messagingSenderId: "755227590554",
  appId: "1:755227590554:web:cc5bd60dc4bb647c2c4423",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
