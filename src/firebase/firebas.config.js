// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq9VAt4wCEKIKHF1arsdGp0mlxpHdNJQM",
  authDomain: "life-bonz.firebaseapp.com",
  projectId: "life-bonz",
  storageBucket: "life-bonz.firebasestorage.app",
  messagingSenderId: "116122073922",
  appId: "1:116122073922:web:da8683351290660e37a6db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);