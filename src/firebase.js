// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6-oN004ZUEeTfbYXJ6ZaGvlDO9XJZgGY",
  authDomain: "uta-market-125a1.firebaseapp.com",
  projectId: "uta-market-125a1",
  storageBucket: "uta-market-125a1.appspot.com",
  messagingSenderId: "519462719770",
  appId: "1:519462719770:web:5266d4cbc5cf2174b11ca3",
  measurementId: "G-BBZ1GEQ7R7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
