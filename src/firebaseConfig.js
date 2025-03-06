// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABgQgT72w_kVKFSMvdXsw1QlLZ5wUMm4o",
  authDomain: "fir-react-d3234.firebaseapp.com",
  projectId: "fir-react-d3234",
  storageBucket: "fir-react-d3234.firebasestorage.app",
  messagingSenderId: "516379450382",
  appId: "1:516379450382:web:f18225089883e4000a705f",
  measurementId: "G-FMLD1C4BML"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
const analytics = getAnalytics(app);