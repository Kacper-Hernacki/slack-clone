// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6buDz-IkE2W8DmXozauRaVTkH_t3jidw",
  authDomain: "slack-clone-828e9.firebaseapp.com",
  databaseURL: "https://slack-clone-828e9.firebaseio.com",
  projectId: "slack-clone-828e9",
  storageBucket: "slack-clone-828e9.appspot.com",
  messagingSenderId: "117121166515",
  appId: "1:117121166515:web:a9c8b4054401e006b1d4c6",
  measurementId: "G-LZPM49HB9S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
