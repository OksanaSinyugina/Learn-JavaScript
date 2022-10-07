let student = {
	name: 'John',
	age: 30,
	isAdmin: false,
	courses: ['html', 'css', 'js'],
	spouse: null
};

let json = JSON.stringify(student);

console.log(student);
console.log(json);

let numbers = "[0, 1, 2, 3]";

console.log( numbers );
numbers = JSON.parse(numbers);

console.log( numbers );