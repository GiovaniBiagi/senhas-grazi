// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvhX1yhewHBznvHVUlqlnyX5jdeKGsrwY",
  authDomain: "senhas-1b098.firebaseapp.com",
  projectId: "senhas-1b098",
  storageBucket: "senhas-1b098.appspot.com",
  messagingSenderId: "650127211016",
  appId: "1:650127211016:web:0553f1283cf9dadc5befbd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
