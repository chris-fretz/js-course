// Lecture #1: Values and Variables
/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log ('Jonas');
console.log (23);

let firstName = "Bob";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let PI = 3.1415;
*/

// Lecture #2: Data Types
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Chris');

javascriptIsFun = 'YES!';

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

// Lecture #3: Let Const and Var
/*
let age = 83;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';
*/

// Lecture #4: Basic Operators
/*
// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Fretz';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; // x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
*/

// Lecture: Strings and Template Literals
/*
const firstName = 'Chris';
const lastName = 'Fretz';
const birthYear = 1982;
const year = 2022;
const job = 'web developer';

const chris = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(chris);

const chrisNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(chrisNew);

// Old way of creating a multi-line string
console.log('String with \n\
multiple \n\
lines');

// "New" way of creating mult-line strings
console.log(`String with
multiple
lines`);
*/

// Lecture: Making decisions: If / else statements
/*
const age = 15;

if(age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2022;
let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

