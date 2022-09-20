/*
For each loop write down which values it is going to show. Then compare with the answer.
Both loops alert same values or not?
*/

//Увеличение i++ выполняется отдельно от проверки условия, значение i при этом не используется, поэтому нет никакой разницы между i++ и ++i.

for (let i = 0; i < 5; i++) console.log( i ); // 0 1 2 3 4

for (let i = 0; i < 5; ++i) console.log( i ); // 0 1 2 3 4