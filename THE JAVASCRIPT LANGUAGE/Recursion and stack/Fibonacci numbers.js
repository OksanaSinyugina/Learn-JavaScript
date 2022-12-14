/*
The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.

First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

Write a function fib(n) that returns the n-th Fibonacci number.

An example of work:
function fib(n) {  your code  }
alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757

P.S. The function should be fast. The call to fib(77) should take no more than a fraction of a second.
*/

const fibRecursion = (n) => {
    if (n < 3) {
        return 1
    } 
    return fibRecursion(n - 1) + fibRecursion(n - 2);
}

const fibDynamic = (n) => {
    let a = 1;
    let b = 1;
    let c = 0;
    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

console.log( fibRecursion(7) );
console.log( fibDynamic(77) );