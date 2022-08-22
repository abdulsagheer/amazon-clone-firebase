import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCSjiPJ0_PisHsk88NKST3f-HpxcgyLJxA",
  authDomain: "clone-981b7.firebaseapp.com",
  projectId: "clone-981b7",
  storageBucket: "clone-981b7.appspot.com",
  messagingSenderId: "183544659675",
  appId: "1:183544659675:web:fa152fbd174458aa6dd6fe",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
