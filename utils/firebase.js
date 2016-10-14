import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyByoBI7xpOAB5JsiVx-wOjVt7FstnD1Oyk",
    authDomain: "comedero-3f0f9.firebaseapp.com",
    databaseURL: "https://comedero-3f0f9.firebaseio.com",
    storageBucket: "comedero-3f0f9.appspot.com",
    messagingSenderId: "924672332128"
  };
export const firebaseApp = firebase.initializeApp(config)
export const firebaseDb = firebase.database();
