// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  "projectId": "meerp-simplified",
  "appId": "1:67409203341:web:42ce9446a8b70c003352c4",
  "storageBucket": "meerp-simplified.firebasestorage.app",
  "apiKey": "AIzaSyAM8jXHTdSOgRvmohUD0ErnJ2HhfRnTluI",
  "authDomain": "meerp-simplified.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "67409203341"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
