/**
 * file: sum-numbers.js
 * descrição: file responsible for learn how to work with Big O notation
 * data: 02/27/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

/**
 * Problem described:
 *
 * Suppose we want to write a function that calculates the sum of all
 * numbers from 1 up to (and including) some number n.
 *
 */

// Solution 01

function addUpTo_FirstSolution(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

let initialTime = performance.now();
addUpTo_FirstSolution(1000000000);
let finalTime = performance.now();
console.log(
  `First Solution Time Elapsed: ${(finalTime - initialTime) / 1000} seconds`
); // 1.6391496000289918 seconds

// Solution 02

function addUpTo_SecondSolution(n) {
  return (n * (n + 1)) / 2;
}

let initialTime_01 = performance.now();
addUpTo_SecondSolution(1000000000);
let finalTime_01 = performance.now();
console.log(
  `Second Solution Time Elapsed: ${
    (finalTime_01 - initialTime_01) / 1000
  } seconds`
); // Time Elapsed: 0.000035600006580352784 seconds
