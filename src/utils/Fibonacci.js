/**
 * Generate an array with the first n entries in the Fibonacci sequence.
 *
 * @param {*} n How many numbers to generate
 */
const getFirstNFibonacciNumbers = n => {
  const fibonacciNumbers = [];

  while (fibonacciNumbers.length < n) {
    fibonacciNumbers.push(getNthFibonacciNumber(fibonacciNumbers.length));
  }

  return fibonacciNumbers;
};

/**
 * Get the nth number in the Fibonacci sequence.
 *
 * We're using tail recursion here to generate the numbers in O(n) time
 * with O(n) space.
 *
 * @param {*} n Which Fibonacci number to generate
 * @param {*} a f(n - 2)
 * @param {*} b f(n - 1)
 */
const getNthFibonacciNumber = (n, a = 0, b = 1) => {
  if (n === 0) return a;
  if (n === 1) return b;

  return getNthFibonacciNumber(n - 1, b, a + b);
};

export { getFirstNFibonacciNumbers, getNthFibonacciNumber };
