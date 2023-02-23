
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDUSZxNQxWfehiGVM3juVC4I-4vWtD6OAI",
  authDomain: "hostar-clone.firebaseapp.com",
  projectId: "hostar-clone",
  storageBucket: "hostar-clone.appspot.com",
  messagingSenderId: "435851991673",
  appId: "1:435851991673:web:124f80a45fd3bb111392a8"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
export {auth , provider};
export default firebase;
