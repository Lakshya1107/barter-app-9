import firebase from 'firebase';
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDAHax3Az_mBgrPsOpvN3hu6lvKYyJz-Go",
  authDomain: "barter-app-c212e.firebaseapp.com",
  projectId: "barter-app-c212e",
  storageBucket: "barter-app-c212e.appspot.com",
  messagingSenderId: "421432701233",
  appId: "1:421432701233:web:8b426408620bab46310010"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
