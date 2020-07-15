let age = 35;
let ww2 = 45 - 38;
let tesla = 76 * 1497.06;
let secondsOfDay = 24*60*60;
let hungarians = 9659413 / 7800000000; /* Hungarians against World population */
let bigger = 9597000 / 78866; /* China vs Czech Republic square km's */
let participants = 654 % 7; 

// console.log(
// 	"age: "+ age
// 	+"\nww2: "+ ww2
// 	+"\ntesla: "+ tesla
// 	+"\nsecondsOfDay: "+ secondsOfDay
// 	+"\nhungarians: "+ hungarians
// 	+"\nbigger: "+ bigger
// 	+"\nparticipants: "+ participants
// );
console.log("\n\n\n");

// EXERCISES 2/3
////////////////

let names = ['John', 'Peter', 'Mark', 'Joseph'];

if (names[2].length > 5) {
	console.log("Yes, third name is longer than 5 characters.\n\n");
} else {
	console.log("3rd name is too short :(\n\n");
}

names.push("Jonnie");
names[0] = "Lubomir";

if(names.length > 4) {
	console.log("So much names in array\n");
} else {
	console.log("Not much names in array\n");
}

console.log(names +"\n\n\n");

// EXERCISES 3/3
////////////////
let randomObjects = {
	colors: ["red", "green", "blue", "yellow"]
}

randomObjects.hasManyColors = false;
if (randomObjects.colors.length > 3) {
	randomObjects.hasManyColors = true;
}

console.log("randomObjects.hasManyColors is "+ randomObjects.hasManyColors +"\n");
console.log(randomObjects);

console.log("\n\n\n");




