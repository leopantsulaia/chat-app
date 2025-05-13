import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: meta.firebase.VITE_API_KEY,
  authDomain: "chat-app-58ac9.firebaseapp.com",
  projectId: "chat-app-58ac9",
  storageBucket: "chat-app-58ac9.firebasestorage.app",
  messagingSenderId: "942415100929",
  appId: "1:942415100929:web:030dbb80dcdb2652b55400",
  measurementId: "G-0GVD5WGZ1Q"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("Firebase Analytics initialized:", analytics);


export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()