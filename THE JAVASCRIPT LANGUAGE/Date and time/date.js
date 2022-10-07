let d1969 = new Date(1000 * 60 * 60 * -24);
let stringDate = new Date("2022-10-06")
let date = new Date(Date.UTC(2011, 0, 1, 2, 3, 4, 567));

console.log( d1969 );
console.log( stringDate );
console.log( date );

console.log( "Year " + date.getFullYear() );
console.log( "Month " + date.getMonth() );
console.log( "Date " + date.getDate() );
console.log( "Hours " + date.getUTCHours() );
console.log( "Minutes " + date.getMinutes() );
console.log( "Seconds " + date.getSeconds() );
console.log( "Milliseconds " + date.getMilliseconds() );
console.log( "таймстамп Milliseconds " + date.getTime() );