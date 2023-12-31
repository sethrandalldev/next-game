import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj_SksZJNrqLCaiWSCG3BKpODCNp-ha1Q",
  authDomain: "next-game-4c150.firebaseapp.com",
  projectId: "next-game-4c150",
  storageBucket: "next-game-4c150.appspot.com",
  messagingSenderId: "274582730084",
  appId: "1:274582730084:web:4607d7845d85c7d79e7671",
  measurementId: "G-DKK7360DKQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
