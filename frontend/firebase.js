const firebase = require("firebase/app");
require("firebase/firestore");

const config = {
  apiKey: "AIzaSyClVXSCMxMLFTxwNe9w-WsJtFyQmctwtxk",
  authDomain: "microconfrecap.firebaseapp.com",
  databaseURL: "https://microconfrecap.firebaseio.com",
  projectId: "microconfrecap",
  storageBucket: "microconfrecap.appspot.com",
  messagingSenderId: "302146528978",
};

let firstConfig = false;
if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firstConfig = true;
}

const firestore = firebase.firestore();

if (firstConfig) {
  firestore.settings({ timestampsInSnapshots: true });
}

module.exports = firestore;
