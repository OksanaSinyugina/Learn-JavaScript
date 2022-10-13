function sayHi() {
	console.log('hello');
}

console.log('start');
let timer = setTimeout(sayHi, 1000);
console.log('end');

console.log(timer);

clearTimeout(timer);

let timerId = setInterval(() => console.log('tick'), 500);

setInterval(() => clearInterval(timerId), 5000);