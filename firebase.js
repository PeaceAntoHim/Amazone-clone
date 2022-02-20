import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDqyXzWPFKR2k4wiH9iVGsiukJMTZGfgHw",
    authDomain: "e-clone-7332d.firebaseapp.com",
    projectId: "e-clone-7332d",
    storageBucket: "e-clone-7332d.appspot.com",
    messagingSenderId: "721995349364",
    appId: "1:721995349364:web:9cd1915f7302b7fe600021"
  };

// Check if firebase is initialized
const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export default db;