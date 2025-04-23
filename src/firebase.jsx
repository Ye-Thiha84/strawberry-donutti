// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLWpWaUO6znC0kaC1GdUh2yJ-oDfbgj6E",
  authDomain: "strawberry-donut.firebaseapp.com",
  projectId: "strawberry-donut",
  storageBucket: "strawberry-donut.firebasestorage.app",
  messagingSenderId: "254803488518",
  appId: "1:254803488518:web:069f351959b3bff4b2b887",
  measurementId: "G-19QV46ZFK2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // 🔥 Firestore instance

export { db };
