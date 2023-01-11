// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from '@firebase/firestore';
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKn3RiynNZq5ycsqLhfWlgkuW3NfsxqIw",
  authDomain: "pizzeria-react-doneva.firebaseapp.com",
  projectId: "pizzeria-react-doneva",
  storageBucket: "pizzeria-react-doneva.appspot.com",
  messagingSenderId: "807366411499",
  appId: "1:807366411499:web:1eefa04594166715546aae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth = getAuth(app)