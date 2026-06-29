// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxirnc7pHxgbEzLGvGQYNZLgQfVqlHCFE",
  authDomain: "auth-18-12-2006.firebaseapp.com",
  projectId: "auth-18-12-2006",
  storageBucket: "auth-18-12-2006.firebasestorage.app",
  messagingSenderId: "285654912341",
  appId: "1:285654912341:web:294eb0eef822cd1f9733dc",
  measurementId: "G-T6J4LRH098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;