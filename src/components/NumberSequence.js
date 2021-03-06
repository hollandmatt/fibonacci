import React from 'react';
import { getFirstNFibonacciNumbers } from '../utils/Fibonacci';
import PropTypes from 'prop-types';

import './NumberSequence.css';

/**
 * This component will generate the actual number sequence, given a count of numbers to
 * generate.
 */
const NumberSequence = ({ count }) => {
  if (count === 0) return null;

  const sequence = getFirstNFibonacciNumbers(count);

  return (
    <div className="NumberSequence">
      {sequence.map((number, index) => (
        <div key={index} className="FibonacciNumber">
          {number}
        </div>
      ))}
    </div>
  );
};

NumberSequence.propTypes = {
  count: PropTypes.number.isRequired
};

export default NumberSequence;
