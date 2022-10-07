/*
Write a function getSecondsToday() that returns the number of seconds from the beginning of today.
For instance, if now were 10:00 am, and there was no daylight savings shift, then:
getSecondsToday() == 36000 // (3600 * 10)
The function should work in any day. That is, it should not have a hard-coded value of “today”.
*/

function getSecondsToday() {
	// let today = new Date();
	// let startToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
	// return Math.round((today - startToday) / 1000);
	let now = new Date();
	return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

console.log( getSecondsToday() );