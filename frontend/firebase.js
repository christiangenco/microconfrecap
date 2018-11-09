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

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firestore = firebase.firestore();

if (!firebase.apps.length) {
  const settings = { timestampsInSnapshots: true };
  firestore.settings(settings);
}

module.exports = firestore;
