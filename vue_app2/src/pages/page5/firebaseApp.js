import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDQkg2ZtC8S_5aelTdxBKAQ_6WVezeLQPs",
    authDomain: "skhu-bom04.firebaseapp.com",
    databaseURL: "https://skhu-bom04.firebaseio.com",
    projectId: "skhu-bom04",
    storageBucket: "skhu-bom04.appspot.com",
    messagingSenderId: "209853802515",
    appId: "1:209853802515:web:5c1df16b2de72718ea37e6",
    measurementId: "G-NTBL5TW1F1"
  };
var firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
