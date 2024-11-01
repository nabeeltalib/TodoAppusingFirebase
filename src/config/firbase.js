// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAH00DnAArut7iXmTdiJTWTkiDZjomu4Fs",
  authDomain: "todoapp-nabeelahmed.firebaseapp.com",
  projectId: "todoapp-nabeelahmed",
  storageBucket: "todoapp-nabeelahmed.firebasestorage.app",
  messagingSenderId: "647619385440",
  appId: "1:647619385440:web:0f761f4965b9b008df0b05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


