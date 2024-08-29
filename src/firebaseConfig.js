import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-9Kxi3hIFcVi71aAvlxWjkXv6sSgDUkM",
  authDomain: "reactsouls.firebaseapp.com",
  projectId: "reactsouls",
  storageBucket: "reactsouls.appspot.com",
  messagingSenderId: "329594367318",
  appId: "1:329594367318:web:22937e437d694555f57af7",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
