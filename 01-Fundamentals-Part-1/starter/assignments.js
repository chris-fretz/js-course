// Assignment #1: Values and Variables
const country = "United States";
const continent = "North America";
let population = 130;

console.log(country);
console.log(continent);
console.log(population);

// Assignment #2: Data Types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Assignment #3: Let Const and Var
language = 'English';

// Assignment #4: Basic Operators
let populationSplitInHalf = population / 2;
console.log(population++);
let finlandUsaPopulationCompare = population < 6;
console.log(finlandUsaPopulationCompare);
let description = country + ' is in ' + continent + ' and its ' + population  + ' people speak ' + language;
console.log(description);

// Assignment #5: Strings and Template Literals
const descriptionNew = `${country} is in ${continent} and its ${population} people speak ${language}. By the way, if you were wondering if it's an island that would be ${isIsland}.`;
console.log(descriptionNew);

// Assignment #6: Taking Decisions: if / else statements
if(population >= 33) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${33 - population} below average.`);
}