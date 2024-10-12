import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCyPm5VsmmC1AIILJEmg62-aUIoZQrvi7I",
    authDomain: "olx-project-2381e.firebaseapp.com",
    projectId: "olx-project-2381e",
    storageBucket: "olx-project-2381e.appspot.com",
    messagingSenderId: "647216669861",
    appId: "1:647216669861:web:6bfa84b0e5c7322392594c",
    measurementId: "G-Z0FH06YSX8"
  };

  export default firebase.initializeApp(firebaseConfig)
