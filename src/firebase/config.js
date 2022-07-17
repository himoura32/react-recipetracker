import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAOmaaGGFHw5XYP8HedxPPK6QJEnC6geLY",
    authDomain: "recipe-tracker-974c2.firebaseapp.com",
    projectId: "recipe-tracker-974c2",
    storageBucket: "recipe-tracker-974c2.appspot.com",
    messagingSenderId: "216907287100",
    appId: "1:216907287100:web:4d34cd5b1be81f64491139"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig);

  // init services
  const projectFirestore = firebase.firestore();

  export { projectFirestore }