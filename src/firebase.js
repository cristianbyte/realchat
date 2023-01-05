import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDUEsqi9kCOTFrbPL8qDt3rtYC9CXWl560",
  authDomain: "real-chat-f377d.firebaseapp.com",
  projectId: "real-chat-f377d",
  storageBucket: "real-chat-f377d.appspot.com",
  messagingSenderId: "985912889328",
  appId: "1:985912889328:web:c018f9f4759894a5b2d735",
  measurementId: "G-65H0K05J8B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()