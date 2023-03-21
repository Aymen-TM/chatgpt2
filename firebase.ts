// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCleNOZkCiu4Tok-U575LmDb1jNTcwKTuw",
  authDomain: "chatgpt2-994f1.firebaseapp.com",
  projectId: "chatgpt2-994f1",
  storageBucket: "chatgpt2-994f1.appspot.com",
  messagingSenderId: "969596654586",
  appId: "1:969596654586:web:8aab3ed9735afc484bca43"
};

// Initialize Firebase
const app =getApps().length ? getApp(): initializeApp(firebaseConfig);
const db = getFirestore(app);

export{
    db
}