import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// THIS IS USED TO INITIALIZE THE firebase OBJECT
// PUT YOUR FIREBASE PROJECT CONFIG STUFF HERE
var firebaseConfig = {
    apiKey: "AIzaSyClk47lEqE5Fvsc3RYUju60UPOZQ6Crefc",
    authDomain: "alanlicse316hw3-afb54.firebaseapp.com",
    databaseURL: "https://alanlicse316hw3-afb54.firebaseio.com",
    projectId: "alanlicse316hw3-afb54",
    storageBucket: "alanlicse316hw3-afb54.appspot.com",
    messagingSenderId: "1046302561052",
    appId: "1:1046302561052:web:ac254f8ab6a7beee76a0d9",
    measurementId: "G-DG55P49GX3"
};
firebase.initializeApp(firebaseConfig);

// NOW THE firebase OBJECT CAN BE CONNECTED TO THE STORE
export default firebase;