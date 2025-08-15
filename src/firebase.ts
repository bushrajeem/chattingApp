// src/firebase.js
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4m40j0oOuBp95DolbEafFGf7-iq8E83o",
  authDomain: "chatting-app-3eaeb.firebaseapp.com",
  projectId: "chatting-app-3eaeb",
  storageBucket: "chatting-app-3eaeb.appspot.com",
  messagingSenderId: "133088505704",
  appId: "1:133088505704:web:0b4d261337f7aaf7e6f0dd",
  measurementId: "G-27BSSMWBT0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Set up Authentication
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;
