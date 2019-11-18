import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// THIS IS USED TO INITIALIZE THE firebase OBJECT
// PUT YOUR FIREBASE PROJECT CONFIG STUFF HERE
var firebaseConfig = {
    apiKey: "AIzaSyDYgBNQFqcJ2-iGt0Orfi9DU3ow-zkg15A",
    authDomain: "alanlicse316hw3.firebaseapp.com",
    databaseURL: "https://alanlicse316hw3.firebaseio.com",
    projectId: "alanlicse316hw3",
    storageBucket: "alanlicse316hw3.appspot.com",
    messagingSenderId: "559115572039",
    appId: "1:559115572039:web:377cc0f9cddcff0ca03262",
    measurementId: "G-9R5Y7NQM0B"  
};
firebase.initializeApp(firebaseConfig);

// NOW THE firebase OBJECT CAN BE CONNECTED TO THE STORE
export default firebase;