// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-bc481.firebaseapp.com",
  projectId: "mern-estate-bc481",
  storageBucket: "mern-estate-bc481.appspot.com",
  messagingSenderId: "21602302142",
  appId: "1:21602302142:web:a07b030d4e414769d186ef",
  measurementId: "G-L62E264T4D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);