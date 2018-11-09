import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { HotKeys } from "react-hotkeys";

import { FirestoreContext } from "./contexts";

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
  messagingSenderId: "302146528978",
};
firebase.initializeApp(config);

// ohhh noooo global variables somebody call the javascript police
window.firebase = firebase;
const db = firebase.firestore();

// const FirebaseContext = React.createContext(firebase);

const keyMap = {
  save: "command+s",
};

const keyHandlers = {
  save: e => e.preventDefault(),
};

ReactDOM.render(
  // <FirestoreProvider firebase={firebase}>
  <FirestoreContext.Provider value={db}>
    <HotKeys keyMap={keyMap} handlers={keyHandlers}>
      <BrowserRouter>
        <App db={db} />
      </BrowserRouter>
    </HotKeys>
  </FirestoreContext.Provider>,
  // </FirestoreProvider>,
  document.getElementById("root")
);
// registerServiceWorker();

setTimeout(() => {
  // let's be a little spooky ;)
  let name = "microconf";
  const profile = localStorage.getItem("profile");
  if (profile) {
    try {
      name = JSON.parse(profile).first;
    } catch (e) {}
  }
  console.log(`%cHey ${name}!`, "font-size: 40pt");
  console.log("%cYou're probably looking for: ", "font-size: 20pt");
  console.log(
    "%chttps://github.com/christiangenco/microconfrecap",
    "font-size: 20pt"
  );
  console.log("%cPull requests welcome :)", "font-size: 10pt");
}, 3000);
