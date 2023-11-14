// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogify-4be1d.firebaseapp.com",
  projectId: "blogify-4be1d",
  storageBucket: "blogify-4be1d.appspot.com",
  messagingSenderId: "1041873471565",
  appId: "1:1041873471565:web:e081dab5c4949426acf404",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
