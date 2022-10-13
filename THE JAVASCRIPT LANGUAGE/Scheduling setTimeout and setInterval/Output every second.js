/*
Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.
Make two variants of the solution.
Using setInterval.
Using nested setTimeout.
*/

function printNumbersInterval(from, to) {
	let timer = setInterval(() => {
		if (from <= to) {
			console.log(from++)
		} else {
			clearInterval(timer);
		}
	}, 1000)
}

function printNumbersNestedTimeout(from, to) {
	let timer = setTimeout(function printNumber() {
		if (from <= to) {
			console.log(from++);
			setTimeout(printNumber, 1000);
		} else {
			clearTimeout(timer);
		}
	}, 1000)
}

// printNumbersInterval(1, 9);
printNumbersNestedTimeout(1, 9);