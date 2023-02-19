import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYr3J2VYCu3Sga1FA5LKYI0AmTxbi66uA",
  authDomain: "isave-bfae6.firebaseapp.com",
  projectId: "isave-bfae6",
  storageBucket: "isave-bfae6.appspot.com",
  messagingSenderId: "1016130597728",
  appId: "1:1016130597728:web:48db5e8d35fa6c42312405",
  measurementId: "G-F31VFQNBG3",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const firestore = getFirestore(app);
