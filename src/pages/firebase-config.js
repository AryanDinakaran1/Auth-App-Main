import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Did not hide the credentails using .env file but thats alright for the test
const firebaseConfig = {
  apiKey: "AIzaSyBB53D4T48BqFH_HhMD2WtD4h4tgTXXpZE",
  authDomain: "fir-app-b7de4.firebaseapp.com",
  projectId: "fir-app-b7de4",
  storageBucket: "fir-app-b7de4.appspot.com",
  messagingSenderId: "229859012034",
  appId: "1:229859012034:web:096f6d7d894b254fa7ba5b",
  measurementId: "G-67855TX9LX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);