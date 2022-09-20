/*
An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
Write the code which outputs prime numbers in the interval from 2 to n.
For n = 10 the result will be 2,3,5,7.
P.S. The code should work for any n, not be hard-tuned for any fixed value.
*/

let n = 10;

for (let i = 2; i <=n; i++) {
    let flag = 0;

    for (let j = 2; j <=i; j++){
        if (j === i && j % i === 0) flag = 1;
        if (i % j === 0) break;
    }

    if (flag) console.log(i);
}

let m = 10;

nextPrime:
for (let i = 2; i <= m; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log( i ); // простое число
}