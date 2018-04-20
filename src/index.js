import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { FirestoreProvider } from "react-firestore";
import "./index.css";
import App from "./App";
// import registerServiceWorker from './registerServiceWorker';

import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyClVXSCMxMLFTxwNe9w-WsJtFyQmctwtxk",
  authDomain: "microconfrecap.firebaseapp.com",
  databaseURL: "https://microconfrecap.firebaseio.com",
  projectId: "microconfrecap",
  storageBucket: "microconfrecap.appspot.com",
  messagingSenderId: "302146528978"
};
firebase.initializeApp(config);

// ohhh noooo global variables somebody call the javascript police
window.firebase = firebase;

const FirebaseContext = React.createContext(firebase);

ReactDOM.render(
  <FirestoreProvider firebase={firebase}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirestoreProvider>,
  document.getElementById("root")
);
// registerServiceWorker();
