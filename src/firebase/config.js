import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3u3fOoYJnN9vyxDKB0Gmt9_tpXKYX5lA",
  authDomain: "cooking-master-site-4dac5.firebaseapp.com",
  projectId: "cooking-master-site-4dac5",
  storageBucket: "cooking-master-site-4dac5.appspot.com",
  messagingSenderId: "381541871529",
  appId: "1:381541871529:web:a8444b38c5651f733ddeb8",
};

// init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
