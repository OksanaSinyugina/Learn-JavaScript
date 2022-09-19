/*
Write an if condition to check that age is NOT between 14 and 90 inclusively.
Create two variants: the first one using NOT !, the second one – without it.
*/

let age = 91;

if (age < 14 || age > 90) {
    console.log('1 ' + age);
}

if (!(age >= 14 && age <= 90)) {
    console.log('2 ' + age);
}

console.log( Boolean(-1) );