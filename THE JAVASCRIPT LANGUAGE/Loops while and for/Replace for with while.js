/*
Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/

for (let i = 0; i < 3; i++) {
    console.log( `number ${i}!` );
}

let i = 0;

while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}