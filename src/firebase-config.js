import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvNluB1kZ0PyY7Me7_IS2y6SF2W-Glxio",
  authDomain: "reactjs-and-firebase-app.firebaseapp.com",
  projectId: "reactjs-and-firebase-app",
  storageBucket: "reactjs-and-firebase-app.appspot.com",
  messagingSenderId: "403336542355",
  appId: "1:403336542355:web:d7c7c0cf2c916f119e3566"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
