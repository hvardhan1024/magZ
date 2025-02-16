// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "magz-6855e.firebaseapp.com",
  projectId: "magz-6855e",
  storageBucket: "magz-6855e.firebasestorage.app",
  messagingSenderId: "299259548682",
  appId: "1:299259548682:web:be36b8e5207de9bb0cbbf3"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);