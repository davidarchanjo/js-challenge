/**
 * Challenge 1 - Non-Constructible Change
 * Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount 
 * of change (the minimum sum of money) that you CANNOT create. The given coins can have any positive integer value and aren't necessarily 
 * unique (i.e., you can have multiple coins of the same value).
 */
const assert = require('assert');

function getMinimumChange(arr)  {
    if ([...new Set(arr)].length === 1) {
        return arr.length + 1;
    }
    arr.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0));
    const max = arr[arr.length - 1];
    let sum = 0;
    for (const v of arr) {
        let sum$ = sum + v;
        if (sum$ > max) {
            return sum + 1;
        }
        sum = sum$;
    }
}

assert.deepEqual(getMinimumChange([5, 7, 1, 1, 2, 3, 22]), 20);
console.log("Test Case 1 - OK");

assert.deepEqual(getMinimumChange([1, 1, 1, 1, 1]), 6);
console.log("Test Case 2 - OK");

assert.deepEqual(getMinimumChange([1, 5, 1, 1, 1, 10, 15, 20, 100]), 55);
console.log("Test Case 3 - OK");