// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2l4fGYhW9DZ6JZ62UYG1UX-SRMkBZly0",
  authDomain: "rizz-chat-de318.firebaseapp.com",
  projectId: "rizz-chat-de318",
  storageBucket: "rizz-chat-de318.firebasestorage.app",
  messagingSenderId: "288780156641",
  appId: "1:288780156641:web:5ad9213391f741880281a0",
  measurementId: "G-X3BK1W503Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);