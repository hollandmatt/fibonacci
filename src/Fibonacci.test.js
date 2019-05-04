import { getNthFibonacciNumber, getFirstNFibonacciNumbers } from './Fibonacci';
import _ from 'lodash';

describe('Fibonacci number generator', () => {
  it('generates the correct amount of numbers', () => {
    [1, 3, 5, 10, 50, 100].forEach(n => {
      expect(getFirstNFibonacciNumbers(n).length).toBe(n);
    });
  });

  it('generates the correct value', () => {
    const fibs = {
      0: 0,
      1: 1,
      5: 5,
      10: 55
    };

    _.keys(fibs).forEach(n => {
      expect(getNthFibonacciNumber(Number(n))).toBe(fibs[n]);
    });
  });
});
