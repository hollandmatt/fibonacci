/**
 * Functions for the generation of the actual number sequnce live
 */

/**
 * Generate an array with the first n entries in the Fibonacci sequence.
 *
 * @param {*} n How many numbers to generate
 */
const getFirstNFibonacciNumbers = n => {
  const fibonacciNumbers = [];

  const memo = {};
  while (fibonacciNumbers.length < n) {
    fibonacciNumbers.push(getNthFibonacciNumber(fibonacciNumbers.length, memo));
  }

  return fibonacciNumbers;
};

/**
 * Get the nth number in the Fibonacci sequence.
 *
 * We're memoizing numbers we have already calculated to reduce the complexity of the algorithm.
 *
 * @param {*} n Which Fibonacci number to generate
 * @param {*} memo The memoized numbers
 */
const getNthFibonacciNumber = (n, memo = {}) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  if (memo[n]) return memo[n];

  return (memo[n] =
    getNthFibonacciNumber(n - 1, memo) + getNthFibonacciNumber(n - 2, memo));
};

export { getFirstNFibonacciNumbers, getNthFibonacciNumber };
