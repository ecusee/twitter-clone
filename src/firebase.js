import firebase from 'firebase';

const firebaseConfig = {
	apiKey: XXX,
    authDomain: XXX,
    projectId: XXX,
    storageBucket: XXX,
    messagingSenderId: XXX,
    appId: XXX
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.fireStore();

export default db;