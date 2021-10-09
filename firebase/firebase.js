import firebase from 'firebase/app'
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeoOhJKFNvX-gsUP4EP3Tbh6IPXPrRYRM",
    authDomain: "multistore-mb.firebaseapp.com",
    databaseURL: "https://multistore-mb.firebaseio.com",
    projectId: "multistore-mb",
    storageBucket: "multistore-mb.appspot.com",
    messagingSenderId: "488052708494",
    appId: "1:488052708494:web:af114a3f8f8df1be73e5df",
    measurementId: "G-0DX9CDSF5N"
};

// Initialize Firebase
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
