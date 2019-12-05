import firebase from 'firebase';
import 'firebase/storage';
require("firebase/firestore");


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByldsRJg3Qi2IdQF9ut0nvO3V9TgxMosk",
    authDomain: "workerman-ng.firebaseapp.com",
    databaseURL: "https://workerman-ng.firebaseio.com",
    projectId: "workerman-ng",
    storageBucket: "workerman-ng.appspot.com",
    messagingSenderId: "658649575671",
    appId: "1:658649575671:web:06aeacffd744e93b97e3f2",
    measurementId: "G-MXFKK18HHE"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { fb, db }