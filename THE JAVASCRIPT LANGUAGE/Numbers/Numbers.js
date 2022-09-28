console.log( 2**53 - 1);

console.log( 1e9 );
console.log( 1_000_000_000 );


console.log( 0xff ); // Hex 16
console.log( 0o377 ); // Octal 8
console.log( 0b11111111 ); //Binary 2

let num = 30;
console.log( num.toString(2) );
console.log( 30..toString(2) );
console.log( (30).toString(2) ); 

console.log( Math.floor(1.5) );
console.log( Math.ceil(1.5) );
console.log( Math.round(1.5) );
console.log( Math.trunc(1.5) );

console.log( 1.235.toFixed(5) ); //string
console.log( +1.235.toFixed(5) );

console.log( 1e500 );

console.log( 0.1.toFixed(20) );

console.log( (0.1 + 0.2).toFixed(2) ); //string

console.log( 9999999999999999 );

console.log( NaN === NaN ); // false
console.log( isNaN(NaN) ); // true

console.log( isFinite('') ); //true = 0
console.log( isFinite('15a') ); //false
console.log( isFinite('15.2') ); //true

// console.log(  );