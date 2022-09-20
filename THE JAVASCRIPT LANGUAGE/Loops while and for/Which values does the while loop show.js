/*
For every loop iteration, write down which value it outputs and then compare it with the solution.
Both loops alert the same values, or not?
*/
'use strict';

let i = 0;
while (++i < 5) console.log( i ); // 1 2 3 4

i = 0;
while (i++ < 5) console.log( i ); // 1 2 3 4 5 Оператор i++ увеличивает i, возвращая старое значение