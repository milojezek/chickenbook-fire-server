import { initializeApp } from "firebase/app";
import { config } from "dotenv";

const firebase = initializeApp(config.firebaseConfig);

export default firebase;
