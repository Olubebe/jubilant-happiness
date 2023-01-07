// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9bmmeQarntNOkdvH2Q7YJ9Mdrpjm_9Pk",
  authDomain: "altpro-2d627.firebaseapp.com",
  projectId: "altpro-2d627",
  storageBucket: "altpro-2d627.appspot.com",
  messagingSenderId: "405728453238",
  appId: "1:405728453238:web:e37055d93fb2dd4ae23557",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
