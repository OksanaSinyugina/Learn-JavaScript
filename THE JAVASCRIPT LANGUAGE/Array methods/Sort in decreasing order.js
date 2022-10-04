/*
let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10
*/

// function decreasingSort(a, b) {
//     if (a > b) return -1;
//     if (a == b) return 0;
//     if (a < b) return 1;
// }

let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
// arr.sort(decreasingSort);

arr.sort( (a, b) => b - a );

console.log( arr ); // 8, 5, 2, 1, -10