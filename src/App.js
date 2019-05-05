import React, { useState } from 'react';
import './App.css';
import NumberPicker from './components/NumberPicker';
import NumberSequence from './components/NumberSequence';

/**
 * The App component handles state management and generates the UI.
 *
 * We could use Redux here, but it's not necessary in an app of this size. We're using React
 * Hooks (useState specifically) instead of creating a class component in order to use state.
 */
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <span>
        Generate the first <strong>n</strong> numbers in the Fibonacci sequence.
      </span>
      <NumberPicker onChange={setCount} />
      <NumberSequence count={count} />
    </div>
  );
};

export default App;
