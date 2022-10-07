/*
Turn the user into JSON and then read it back into another variable.

let user = {
  name: "John Smith",
  age: 35
};
*/

let user = {
	name: "John Smith",
	age: 35
};

let userCopy = JSON.parse(JSON.stringify(user));
console.log(user == userCopy);
