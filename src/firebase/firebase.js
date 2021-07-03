import firebase from "firebase/app"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCv-lwItZy9MXbgBNarPpp3ZtSRm58s9Xc",
    authDomain: "freemarket-314419.firebaseapp.com",
    projectId: "freemarket-314419",
    storageBucket: "freemarket-314419.appspot.com",
    messagingSenderId: "553963582849",
    appId: "1:553963582849:web:1af8e74ba3e234d0d1e480",
    measurementId: "G-Z94CWYXB32"
  };

  firebase.initializeApp(firebaseConfig)
  const storage = firebase.storage();
  export {storage,firebase as default}