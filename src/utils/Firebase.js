// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuUtaTyhTfV6exy9nEBlbyIR7wZGHQltg",
  authDomain: "netflixgpt-6d1c9.firebaseapp.com",
  projectId: "netflixgpt-6d1c9",
  storageBucket: "netflixgpt-6d1c9.appspot.com",
  messagingSenderId: "604543926224",
  appId: "1:604543926224:web:190ae00f07cde42b6ac3d5",
  measurementId: "G-1RPX8VZTWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);