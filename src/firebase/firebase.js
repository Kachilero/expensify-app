/**
 * Connect to Firebase Database
 * @link https://firebase.google.com/docs
 */
import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

// Init connection to the DB
firebase.initializeApp(config);

// Set the database to a variable
const db = firebase.database();
// Setup provider
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, db as default };

