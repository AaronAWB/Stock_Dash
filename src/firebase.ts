// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmu-sseu_wIGGWlHvlMSwv5Zgb8XpIy7U",
  authDomain: "simstocks-2.firebaseapp.com",
  projectId: "simstocks-2",
  storageBucket: "simstocks-2.appspot.com",
  messagingSenderId: "764233684582",
  appId: "1:764233684582:web:3e579e1b2d6f5bc797bfa7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app