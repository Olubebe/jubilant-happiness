// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT0KU-WoZQkMXeCP6s0lJ_3J5kVKMBse0",
  authDomain: "better-pro.firebaseapp.com",
  projectId: "better-pro",
  storageBucket: "better-pro.appspot.com",
  messagingSenderId: "925520367655",
  appId: "1:925520367655:web:9ec8fc660236c52fa27e02",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
