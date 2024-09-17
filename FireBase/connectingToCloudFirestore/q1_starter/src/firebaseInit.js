// create firebase config here and export the db object
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD27CXDiJo8dJE6-tdkQH_1zFXq4OdMmk4",
    authDomain: "new-project-1-38b3a.firebaseapp.com",
    projectId: "new-project-1-38b3a",
    storageBucket: "new-project-1-38b3a.appspot.com",
    messagingSenderId: "86759905008",
    appId: "1:86759905008:web:5a51b375c5ea3556c55435"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// const db = firebase.firestore();