import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyAcG1MKUDz-eISai9jjHthTOcpOR5XBE4o",
  authDomain: "burger-queen-23fe7.firebaseapp.com",
  databaseURL: "https://burger-queen-23fe7.firebaseio.com",
  projectId: "burger-queen-23fe7",
  storageBucket: "burger-queen-23fe7.appspot.com",
  messagingSenderId: "1016009357646",
  appId: "1:1016009357646:web:dabaa3735c2a2cbe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;