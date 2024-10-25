// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUR7bIldLXkadX0y65Tt_1jgWH9M-LHf4",
  authDomain: "e-commerce-60050.firebaseapp.com",
  projectId: "e-commerce-60050",
  storageBucket: "e-commerce-60050.appspot.com",
  messagingSenderId: "527068867139",
  appId: "1:527068867139:web:3b47981f45d9e3769b02f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
