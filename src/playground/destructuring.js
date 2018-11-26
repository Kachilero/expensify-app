console.log(`destructuring`);

/**
 * Object Destructuring
 */
// const person = {
//   name: 'Alejandro',
//   age: 41,
//   location: {
//     city: 'Kansas City',
//     temp: 60
//   }
// };

// // set default for name
// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}`);


// if (person.location.temp && person.location.city) {
//   console.log(`It's ${person.location.temp} in ${person.location.city}`);
// }
// // Destructured
// const {temp: temperature, city} = person.location;
// if (temperature && city) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// // penguin, self-published.
// const {name: publisherName = 'Self-Published'} =  book.publisher;
// console.log(`${publisherName}`);

/**
 * Array Destructuring
 */

 const address = ['1299 S. Juniper Street', 'Philadelphia', 'Pennsilvania', '19147'];

 const [, city, state = 'New York'] = address;

console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
// 
const [itemName, smallPrice, mediumPrice] = item
console.log(`A medium ${itemName} costs ${mediumPrice}`);