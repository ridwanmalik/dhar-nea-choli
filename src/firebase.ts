// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyC0bjhpuLoQ9XEgEuPG1VYTNpDLf89ih9Y",
  authDomain: "dhar-nea-choli.firebaseapp.com",
  projectId: "dhar-nea-choli",
  storageBucket: "dhar-nea-choli.appspot.com",
  messagingSenderId: "492227767190",
  appId: "1:492227767190:web:2ff18dc6888d52ed214bb7",
  measurementId: "G-5CG6QE8N9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
