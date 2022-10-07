/*
Write a function getWeekDay(date) to show the weekday in short format: 
‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
For instance:
let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"
*/

let date = new Date(2012, 0, 3);  // 3 Jan 2012

console.log( getWeekDay(date) );        // should output "TU"

function getWeekDay(date) {
	let day = date.getDay();
	switch (day) {
		case 0: return "SU";
		case 1: return "MO";
		case 2: return "TU";
		case 3: return "WE";
		case 4: return "TH";
		case 5: return "FR";
		case 6: return "SA";
	}

// 	let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
//    return days[date.getDay()];
}