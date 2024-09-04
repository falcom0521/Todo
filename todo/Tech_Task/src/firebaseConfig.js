// firebaseConfig.js

import firebase from 'firebase/app';
import 'firebase/auth';  // If you use Firebase Auth
import 'firebase/database';  // If you use Firebase Realtime Database
import 'firebase/firestore'; // If you use Firestore
import 'firebase/storage'; // If you use Firebase Storage

const firebaseConfig = {
    apiKey: "AIzaSyA_7pPQBC-71VypmbBIY-jXA4NMOc3eWc0",
    authDomain: "todo-5919c.firebaseapp.com",
    projectId: "todo-5919c",
    storageBucket: "todo-5919c.appspot.com",
    messagingSenderId: "583872871680",
    appId: "1:583872871680:web:2ebe0f142fe55cdfa107e5",
    measurementId: "G-KX0S0GC3R3"
  };

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
