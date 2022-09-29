import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyD30Qkw-XjJaDDPZry1TPLw1qcZ3-3bpz8",
    authDomain: "projeto67-d3562.firebaseapp.com",
    projectId: "projeto67-d3562",
    storageBucket: "projeto67-d3562.appspot.com",
    messagingSenderId: "773821105248",
    appId: "1:773821105248:web:411cf68ca235fd83f56f05"

};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();