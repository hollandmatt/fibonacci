import React from 'react';
import PropTypes from 'prop-types';

import './NumberPicker.css';

const NumberPicker = ({ onChange, count }) => {
  return (
    <div className="NumberPicker">
      <input
        type="number"
        value={count}
        onChange={event => onChange(Number(event.target.value))}
      />
    </div>
  );
};

NumberPicker.propTypes = {
  count: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default NumberPicker;
