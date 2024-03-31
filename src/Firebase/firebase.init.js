// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEjJUlvWqhpytNfjGPpgi3_PPas6r0hc4",
  authDomain: "simple-firebase-87e1c.firebaseapp.com",
  projectId: "simple-firebase-87e1c",
  storageBucket: "simple-firebase-87e1c.appspot.com",
  messagingSenderId: "1074924099368",
  appId: "1:1074924099368:web:0274c6350b815434c8e21d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app