import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPZquHNGssZLVB-qcEiAGde8XCmMkejvo",
  authDomain: "hugosilvaportfolio.firebaseapp.com",
  projectId: "hugosilvaportfolio",
  storageBucket: "hugosilvaportfolio.appspot.com",
  messagingSenderId: "142252168291",
  appId: "1:142252168291:web:58fdc83492f0cdcd4b5456",
  measurementId: "G-TT0PHZ1HNY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));

const options = {
  position: positions.TOP_CENTER,
  timeout: 2000,
  offset: "30px",
  transition: transitions.SCALE,
};

root.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
);
