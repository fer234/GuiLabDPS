import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDMC_nyzHarsyIn0JruIhAmKb16vR5h2Nc",
  authDomain: "crudreactfirebase-52179.firebaseapp.com",
  databaseURL: "https://crudreactfirebase-52179.firebaseio.com",
  projectId: "crudreactfirebase-52179",
  storageBucket: "crudreactfirebase-52179.appspot.com",
  messagingSenderId: "409349659737",
  appId: "1:409349659737:web:5757467f8c6ab4c2ec6548"
  };
  const fb =  firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();