/**
 * file: print-pairs.js
 * descrição: file responsible for learn how to work with Big O(n2) notation
 * data: 02/27/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

console.log(printAllPairs(10));
