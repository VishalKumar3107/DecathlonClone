// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBJmIgElLRdAV1t7Q8f99G4VeDgEfb5Os",
  authDomain: "decathloneclone-65bfa.firebaseapp.com",
  projectId: "decathloneclone-65bfa",
  storageBucket: "decathloneclone-65bfa.appspot.com",
  messagingSenderId: "45063627731",
  appId: "1:45063627731:web:16aaf6e64d633701a08526",
  measurementId: "G-3G1QBC239R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);