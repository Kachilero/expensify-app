/**
 * Probably need to import the firebase.config
 */

// Examples
import firebase from "firebase";

const db = firebase.database();
// Set
db.ref().set({
  name: 'Alejandro Cerro',
  stressLevel: 10,
  job: {
    title: 'Software Developer',
    company: 'Google'
  },
  location: {
    city: 'Kansas City',
    state: 'MO'
  },
  isSingle: true
})
  .then(() => { console.log("Success callback"); })
  .catch((e) => { console.error("Error callback: ", e); });

// remove
db.ref('isSingle')
  .remove()
  .then(() => { console.log('Data Removed');})
  .catch((e) => { console.error("Remove Error: ", e)});

// update - nested data is in quotes
db.ref().update({
  'job/title': "Manager",
  'job/company': "Amazon",
  'location/city': 'Boston',
  'location/state': 'MA'
})
  .then(() => { console.log("DB Updated"); })
  .catch((e) => { console.error("Update Error: ", e); });

// create callback function for subscription
const onValueChange = (snapshot) => {
  console.log(snapshot.val());
};

// Get once
db.ref()
  .once('value')
  .then(onValueChange)
  .catch((e) => { console.error("Get Once Error: ", e); });

// Get subscription
// There are several events that can be passed here
db.ref().on('value', onValueChange);

// Unsubscribe
setTimeout(() => {
  db.ref().off('value',onValueChange);
  console.log("Timeout");
}, 3500);


// Push - creates a random ID for whatever is pushed
db.ref('notes').push({
  title: "title 1",
  body: "Body body body"
});
