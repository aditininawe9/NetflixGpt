// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA5ZHwm6hHwRzk_OSXwJpilGJy7bACaE0",
  authDomain: "netflixgpt-5039d.firebaseapp.com",
  projectId: "netflixgpt-5039d",
  storageBucket: "netflixgpt-5039d.firebasestorage.app",
  messagingSenderId: "801331692144",
  appId: "1:801331692144:web:866d4f9f904a4d81ae6ab5",
  measurementId: "G-97FMTT2BYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();