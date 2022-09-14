/* 
Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n

For instance:
sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

Make 3 solution variants:
Using a for loop.
Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
Using the arithmetic progression formula.

*/
const sumToLoop = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

const sumToRecursion = (n) => {
    if (n == 1) {
        return 1
    } else {
        return n + sumToRecursion(n - 1);
    }
};

const sumToProgression = (n) => {
    return ( (1 + n) * n ) / 2;
}

console.log( sumToLoop(4) );
console.log( sumToRecursion(4) );
console.log( sumToProgression(4) );