'use strict';

let sum = new Function('a, b', 'return a + b');

console.log( sum(7, 2) );

let sayHi = new Function('console.log("Hello")');

sayHi(); 
