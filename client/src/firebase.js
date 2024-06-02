// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhF0cnUOLmpc0W-q0Tk3Q27oKsml2bgis",
    authDomain: "mern-realstate-584b7.firebaseapp.com",
    projectId: "mern-realstate-584b7",
    storageBucket: "mern-realstate-584b7.appspot.com",
    messagingSenderId: "41195210241",
    appId: "1:41195210241:web:6072829ea026446669a200",
    measurementId: "G-4EDWLP5VWQ"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);