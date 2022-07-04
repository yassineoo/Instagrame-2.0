// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";

import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVU68eqi4jHiteo-BG5LdKTUe7LAJ1z2I",
  authDomain: "tutorialinstagrame.firebaseapp.com",
  projectId: "tutorialinstagrame",
  storageBucket: "tutorialinstagrame.appspot.com",
  messagingSenderId: "790896627687",
  appId: "1:790896627687:web:efd70d0b2d208ffa50f742",
  measurementId: "G-8DJRK6FW1M"
};
let app;
// Initialize Firebase
console.log(getApps());
if (!getApps()){
  app = getApp();
}
 else   app=initializeApp(firebaseConfig)  ;

const db = getFirestore();
const storage =getStorage();

export {app ,db, storage}