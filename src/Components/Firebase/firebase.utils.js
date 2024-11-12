// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTBWTlIqvER9j6q5NaxWogwGMY0frFEVc",
  authDomain: "sample-auth-ad8b1.firebaseapp.com",
  projectId: "sample-auth-ad8b1",
  storageBucket: "sample-auth-ad8b1.firebasestorage.app",
  messagingSenderId: "674027888083",
  appId: "1:674027888083:web:d7dcefe64a23ca4ce0e326"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;