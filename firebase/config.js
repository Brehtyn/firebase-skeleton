import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAF4D4fwlNyDbTGyXSfHJZKTTBeDGsP4mo",
    authDomain: "florianasfriends.firebaseapp.com",
    projectId: "florianasfriends",
    storageBucket: "florianasfriends.appspot.com",
    messagingSenderId: "528184157444",
    appId: "1:528184157444:web:502a3005860fee09e85c51"
  };

  // initialize firebase backend

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore(); 

  // export firebase service

  export { projectFirestore };