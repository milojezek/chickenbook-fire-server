import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { config } from "dotenv";

const firebase = initializeApp(config.firebaseConfig);
const auth = getAuth(firebase);
const db = getFirestore(firebase);

export { firebase, auth, db };
