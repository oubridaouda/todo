import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDzId_3qujriYDgwFJ6iziStn8w5IT0lPg",
    authDomain: "matodoapp-13e10.firebaseapp.com",
    projectId: "matodoapp-13e10",
    storageBucket: "matodoapp-13e10.appspot.com",
    messagingSenderId: "886860686897",
    appId: "1:886860686897:web:61a5776f34168a55995710",
    measurementId: "G-7DPYD30EH2"
});


const db = firebaseApp.firestore();

export default db;