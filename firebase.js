// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxD-7UUKENbZOQ6W0G-8wQVdC2fc6TsgA",
  authDomain: "budgetauth.firebaseapp.com",
  projectId: "budgetauth",
  storageBucket: "budgetauth.appspot.com",
  messagingSenderId: "224573192949",
  appId: "1:224573192949:web:18556d4665848e093da3bc",
  measurementId: "G-T0HT421TD0",
};

// Initialize Firebase
let app =
  firebase.apps.length === 0
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

export const auth = firebase.auth();
