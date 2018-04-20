import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
// import registerServiceWorker from './registerServiceWorker';

import firebase from "firebase";
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

const FirebaseContext = React.createContext(firebase);

ReactDOM.render(
  <FirebaseContext.Provider>
    <BrowserRouter>
      <App firebase={firebase} />
    </BrowserRouter>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
// registerServiceWorker();
