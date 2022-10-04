/*
Anagrams are words that have the same number of same letters, but in different order.
For instance:
nap - pan
ear - are - era
cheaters - hectares - teachers
Write a function aclean(arr) that returns an array cleaned from anagrams.

For instance:
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

From every anagram group should remain only one word, no matter which one.
*/

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

function aclean(arr) {
    let map = new Map;

    for (let elem of arr) {
        map.set(
            elem
            .toLowerCase()
            .split("")
            .sort()
            .join("")
        , elem);
    }
    return Array.from(map.values())
}