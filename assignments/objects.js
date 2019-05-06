// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// { id: 0, name: 'Example', email: 'examples@you.edu', gender: 'F' }

function Intern(id,email,name,gender) {
	this.id = id;
	this.email = email;	
	this.name = name;
	this.gender = gender;
}

let Mitzi = new Intern(1,"mmelloy0@psu.edu","Mitzi","F");
let Kennan = new Intern(2,"kdiben1@tinypic.com","Kennan","M");
let Keven = new Intern(3,"kmummery2@wikimedia.org","Keven","M");
let Gannie = new Intern(4,"gmartinson3@illinois.edu","Gannie","M");
let Antonietta = new Intern(5,"adaine5@samsung.com","Antonietta","F");

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(Mitzi.name);
// Kennan's ID
console.log(Keven.id);
// Keven's email
console.log(Keven.email);
// Gannie's name
console.log(Gannie.name);
// Antonietta's Gender
console.log(Antonietta.gender);

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
Intern.prototype.say_name = function() {
	let speak = "Hello, my name is "
	return speak + this.name
};

console.log(Kennan.say_name());
// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
Intern.prototype.multiplyNums = function(a,b) {
	let product = a * b;
	return product;
};
console.log(Antonietta.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {}

// Log the parent object's name

// Log the child's age

// Log the name and age of the grandchild

// Have the parent speak

// Have the child speak

// Have the grandchild speak
