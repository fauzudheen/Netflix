

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAixTael7wV18nTK0zyrWqaWxmbbaUKyQ",
  authDomain: "netflix-react-35dd9.firebaseapp.com",
  projectId: "netflix-react-35dd9",
  storageBucket: "netflix-react-35dd9.appspot.com",
  messagingSenderId: "791883364650",
  appId: "1:791883364650:web:10cad384518ec0818ac653"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);