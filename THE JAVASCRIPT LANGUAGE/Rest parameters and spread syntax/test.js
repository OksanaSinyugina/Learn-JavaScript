//Rest parameters ...

function sumAll(...args) { // args is the name for the array
	console.log( args );
	let sum = 0;

	for (let arg of args) sum += arg;

	return sum;
}

console.log( sumAll(1) ); // 1
console.log( sumAll(1, 2) ); // 3
console.log( sumAll(1, 2, 3) ); // 6

//The “arguments” variable

function showName() {
	console.log( arguments.length );
	console.log( arguments[0] );
	console.log( arguments[1] );

	// Объект arguments можно перебирать
	// for (let arg of arguments) alert(arg);
}

 // Вывод: 2, Юлий, Цезарь
showName("Юлий", "Цезарь");

 // Вывод: 1, Илья, undefined (второго аргумента нет)
showName("Илья");

//Spread syntax

let str = "12347";
let arr = [1, 34, 67, 4, 23];

console.log( Math.max(...str) );
console.log( Math.max(...arr) );

//Copy an array/object

let pseudoArray = {
	0: 14,
	1: 34,
	length: 2,
}
console.log( pseudoArray );
console.log( Array.from(pseudoArray) );
// let newArray = [...pseudoArray];