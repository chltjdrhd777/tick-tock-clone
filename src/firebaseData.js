import firebase from "firebase";

///?my project indentical data in firebase
const firebaseConfig = {
  apiKey: "AIzaSyCMveT4mkViMSllPrzX6Vrfem_lgjs-Npw",
  authDomain: "ticktock-clone-9e1a7.firebaseapp.com",
  databaseURL: "https://ticktock-clone-9e1a7.firebaseio.com",
  projectId: "ticktock-clone-9e1a7",
  storageBucket: "ticktock-clone-9e1a7.appspot.com",
  messagingSenderId: "374047533385",
  appId: "1:374047533385:web:8855df91ea1b9426411298",
  measurementId: "G-9LEGGZQ414",
};

///? get access from firebase with my personal id about the project made beforehand
const firebaseApp = firebase.initializeApp(firebaseConfig);

//? among all categories, I pointed the database part which hase information collection
const database = firebaseApp.firestore();

export default database;
