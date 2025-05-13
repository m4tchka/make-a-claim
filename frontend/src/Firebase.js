import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

//init firebase app
initializeApp(firebaseConfig);

//init services
export const db = getFirestore();
export const auth = getAuth();
// export const user = auth.currentUser; NOTE: Doesn't work - must use whole auth obj otherwise doesn't "wait" for auth to be verified with firebase
export const gProvider = new GoogleAuthProvider();
export const eProvider = new EmailAuthProvider();
export const colRef = collection(db, "users");
