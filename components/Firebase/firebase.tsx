import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZSybPxb5o3-Cjzx_eMqIgB0OkiY04mw8",
    authDomain: "todolist-206ac.firebaseapp.com",
    projectId: "todolist-206ac",
    storageBucket: "todolist-206ac.appspot.com",
    messagingSenderId: "587489600448",
    appId: "1:587489600448:web:7c20164898417fb7269e25",
    measurementId: "G-J2H02Z5JMJ"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default database;