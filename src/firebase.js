import firebase from "firebase";

import "firebase/auth";

import "firebase/firestore";

import "firebase/database";

import "firebase/storage";

import "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDKtd1lr-1FpO-5U5WZ38ay6jWIJRT77c4",
  authDomain: "food-app-de26b.firebaseapp.com",
  projectId: "food-app-de26b",
  storageBucket: "food-app-de26b.appspot.com",
  messagingSenderId: "740197379466",
  appId: "1:740197379466:web:606cee7a1292c825e3ac73",
  measurementId: "G-P0X7VXT5B9",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase;
