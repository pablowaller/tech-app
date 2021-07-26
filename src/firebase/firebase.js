import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD4rXigPg7tpwtCvYtTdq5AxuUxBCtKslU",
  authDomain: "tech-app-ceeab.firebaseapp.com",
  projectId: "tech-app-ceeab",
  storageBucket: "tech-app-ceeab.appspot.com",
  messagingSenderId: "234489745197",
  appId: "1:234489745197:web:afb04e79e878721e03cda4",
};

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();

export const docIdFieldPath = firebase.firestore.FieldPath.documentId();
