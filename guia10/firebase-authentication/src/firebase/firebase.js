import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

//this config is being used for both development and production environment. Though, it is a best practice creating a second project and have two configs: one for production (prodConfig) and another for development (devConfig), so you choose the config based on the environment.

const config = {
  apiKey: "AIzaSyDFnhU06tM_QlJDDa_jENpRZfIhDfSketo",
    authDomain: "alumnos-reyes.firebaseapp.com",
    databaseURL: "https://alumnos-reyes.firebaseio.com",
    projectId: "alumnos-reyes",
    storageBucket: "alumnos-reyes.appspot.com",
    messagingSenderId: "642568478111",
    appId: "1:642568478111:web:795dd103fa6996fe2171aa",
    measurementId: "G-9DSCZ784X4"
};

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(config);
}

//separting database API and authentication
const db = firebase.database();
const auth = firebase.auth();

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, facebookProvider };