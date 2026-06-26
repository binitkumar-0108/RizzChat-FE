// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhpAzbHblIkxQjIFrgDXzcLFEgQyCx580",
  authDomain: "auth-01-08-2005.firebaseapp.com",
  projectId: "auth-01-08-2005",
  storageBucket: "auth-01-08-2005.firebasestorage.app",
  messagingSenderId: "821487568102",
  appId: "1:821487568102:web:9853d51616cf7381ce6727",
  measurementId: "G-V5QB6EEDYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;