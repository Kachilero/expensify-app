/**
 * Connect to Firebase Database
 * @link https://firebase.google.com/docs
 */
import moment from 'moment';
let now = moment().format("mm:ss:SSSS");
console.log("Firebase Called at ", now);



import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTO_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
console.log(config);
// Init connection to the DB
firebase.initializeApp(config);

// Set the database to a variable
const db = firebase.database();

export { firebase, db as default };

/*Callback function
const onComplete = () => {
  let timeNow = moment().format("mm:ss:SSSS");
  console.log("Completed at: ", timeNow);
  db.ref('expense').off();
};

convert to array
const convertToArray = (snapshot) => {
  const expenseArray = [];
  snapshot.forEach((childSnap) => {
    expenseArray.push({
      id: childSnap.key,
      ...childSnap.val()
    })
  });
  return expenseArray;
};*/


