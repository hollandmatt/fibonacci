import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NumberPicker from './components/NumberPicker';
import NumberSequence from './components/NumberSequence';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('creates the number picker', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(NumberPicker).length).toBe(1);
});

it('creates the number sequence', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(NumberSequence).length).toBe(1);
});
