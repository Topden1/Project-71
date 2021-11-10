import firebase from "firebase";
require("@firebase/firestore");
//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAnmGE__kNdjxS4gJ2bvRLtgE4y2fTXZGQ",
    authDomain: "project-71-763d1.firebaseapp.com",
    projectId: "project-71-763d1",
    storageBucket: "project-71-763d1.appspot.com",
    messagingSenderId: "157872169788",
    appId: "1:157872169788:web:1e1e2a91a10fd97b613439"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


