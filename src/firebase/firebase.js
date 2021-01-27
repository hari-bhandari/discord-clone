import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDe8-_Xw491QmTN24QczBrJvGtACTkjfR8",
    authDomain: "discrod-2187c.firebaseapp.com",
    projectId: "discrod-2187c",
    storageBucket: "discrod-2187c.appspot.com",
    messagingSenderId: "517225181176",
    appId: "1:517225181176:web:3b7c6b978bd636e8ee700d",
    measurementId: "G-FZDBP3Q8G3"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;