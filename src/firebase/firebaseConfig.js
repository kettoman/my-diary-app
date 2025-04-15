// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwh7R1AhNJWWwWZ1pqCNe80NZZdag79Fk",
  authDomain: "loglogdiay.firebaseapp.com",
  projectId: "loglogdiay",
  storageBucket: "loglogdiay.firebasestorage.app",
  messagingSenderId: "353050136019",
  appId: "1:353050136019:web:2c32059756ae6d9d89f326",
  measurementId: "G-4955WXVWWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firestoreインスタンスを作成
export const db = getFirestore(app);


