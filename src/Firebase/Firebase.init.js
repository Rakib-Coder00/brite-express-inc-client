import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey:process.env.RACT_APP_apiKey,
  authDomain:process.env.RACT_APP_authDomain,
  projectId: process.env.RACT_APP_projectId,
  storageBucket: process.env.RACT_APP_storageBucket,
  messagingSenderId: process.env.RACT_APP_messagingSenderId,
  appId: process.env.RACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth