const assert = require('assert');

function sortedSquareArray(arr) {
    const res = arr.map(i => i * i);
    res.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0));
    return res;
}

assert.deepEqual(sortedSquareArray([1, 2, 3, 5, 6, 8, 9]), [1, 4, 9, 25, 36, 64, 81]);
console.log('Test Case 1 - OK');

assert.deepEqual(sortedSquareArray([-2, -1]), [1, 4]);
console.log('Test Case 2 - OK');

assert.deepEqual(sortedSquareArray([-10, -5, 0, 5, 10]), [0, 25, 25, 100, 100]);
console.log('Test Case 3 - OK');