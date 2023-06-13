// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAnk36ScshNj20p9eJuaz4Dit_SM78ngE",
  authDomain: "chat-726e9.firebaseapp.com",
  projectId: "chat-726e9",
  storageBucket: "chat-726e9.appspot.com",
  messagingSenderId: "590225473305",
  appId: "1:590225473305:web:e69aad33a7e12aafe28f88"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const storage = getStorage();
export const db = getFirestore();