// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1-KgqV-q9yPF6_eQKYu3DZjYRsTfvPWE",
  authDomain: "tourism-management-website.firebaseapp.com",
  projectId: "tourism-management-website",
  storageBucket: "tourism-management-website.appspot.com",
  messagingSenderId: "1060999094111",
  appId: "1:1060999094111:web:eef3525c614e2f39cb60ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;