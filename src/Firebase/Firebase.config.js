// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcL-OznBTExTX1gVo9URiTK8Jf7r8x0is",
  authDomain: "gameverse-84970.firebaseapp.com",
  projectId: "gameverse-84970",
  storageBucket: "gameverse-84970.firebasestorage.app",
  messagingSenderId: "617906463311",
  appId: "1:617906463311:web:78908ca1ea5c1059bb403a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);