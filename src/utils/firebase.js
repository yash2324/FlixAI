import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyIwZOJTg69yqHiWrFqWjku3D2pKyi3CQ",
  authDomain: "netflixgpt-5a0ab.firebaseapp.com",
  projectId: "netflixgpt-5a0ab",
  storageBucket: "netflixgpt-5a0ab.appspot.com",
  messagingSenderId: "862153800857",
  appId: "1:862153800857:web:4810a19d76c8f6306bcc08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
