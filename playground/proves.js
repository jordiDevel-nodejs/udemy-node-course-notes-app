console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
//const notes = require('./notes.js');

console.log(_.isString(true));
console.log(_.isString('Jordi'));

const filteredArray = _.uniq(['jordi', 1, 'jordi', 1, 2, 3, 4, 4, 5, 2]);
console.log(filteredArray);

// const user = os.userInfo();

// const res = notes.addNote();

// console.log(res);

// console.log('Result:', notes.add(3, 4));

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, (err) => {
//     if (err) {
//         console.log('Unable to write data');
//     }
// });