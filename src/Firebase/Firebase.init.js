import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCmECDKl4egYpKQBbn8yPvr4zZbQUTpVKI",
  authDomain: "brite-express-inc.firebaseapp.com",
  projectId: "brite-express-inc",
  storageBucket: "brite-express-inc.appspot.com",
  messagingSenderId: "824333532749",
  appId: "1:824333532749:web:ec9df92bfd9caf9e99e604"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth