import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDsNrr-YSOk3wt0YHewTlkrfl73Z5xg8fA",
  authDomain: "dravmo-db.firebaseapp.com",
  databaseURL: "https://dravmo-db.firebaseio.com",
  projectId: "dravmo-db",
  storageBucket: "dravmo-db.appspot.com",
  messagingSenderId: "1053271965800",
  appId: "1:1053271965800:web:7e8f378da1772db75d7bdd"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
