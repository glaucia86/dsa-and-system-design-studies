/**
 * file: count-numbers.js
 * descrição: file responsible for learn how to work with Big O notation
 * data: 02/27/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

function countUpAndDown(n) {
  console.log('Going up!');
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  console.log('At the top!\nGoing down...');
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }

  console.log('Back down. Bye!');
}

console.log(countUpAndDown(10));
