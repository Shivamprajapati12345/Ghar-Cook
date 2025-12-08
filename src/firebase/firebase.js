// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUacE7Vi2wDcAhCxTkjwtXnCVnGVL7L5c",
  authDomain: "ghar-cook.firebaseapp.com",
  projectId: "ghar-cook",
  storageBucket: "ghar-cook.firebasestorage.app",
  messagingSenderId: "635682345982",
  appId: "1:635682345982:web:9e3c49f148dc37d97666af",
  measurementId: "G-175K8BVK5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

