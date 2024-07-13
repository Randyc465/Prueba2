// firebaseConfig.tsx

import '@react-native-firebase/auth';
import '@react-native-firebase/database';
import firebase from 'firebase/app';
import 'firebase/auth'; // Importa los módulos que necesites usar (por ejemplo, auth)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKQoBj6Q4fcRONanzyhVJ0y4vQO2ZqsFo",
  authDomain: "prueba-ac37b.firebaseapp.com",
  projectId: "prueba-ac37b",
  storageBucket: "prueba-ac37b.appspot.com",
  messagingSenderId: "1007393162248",
  appId: "1:1007393162248:web:75b69d9ed1d4c19ece3dbd",
  measurementId: "G-H7VXGVZZHN"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);