 import * as firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyC0Ct8l0VFG4wOXIhWowiAhgfq_9gXXvcQ",
  authDomain: "photo-gallery-e51d4.firebaseapp.com",
  projectId: "photo-gallery-e51d4",
  storageBucket: "photo-gallery-e51d4.appspot.com",
  messagingSenderId: "64445551376",
  appId: "1:64445551376:web:82b9ff1a32f8f07cafcb95"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };