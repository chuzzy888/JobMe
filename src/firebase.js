import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCa_IJyNBzrkBGIDjpOFTsZ5whxRkdISpc",
  authDomain: "jobme-67e8a.firebaseapp.com",
  projectId: "jobme-67e8a",
  storageBucket: "jobme-67e8a.appspot.com",
  messagingSenderId: "349482765710",
  appId: "1:349482765710:web:430eadea5be43839c1a8df",
  measurementId: "G-7FJ1XE9NK8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
