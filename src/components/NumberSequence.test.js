import React from 'react';
import NumberSequence from './NumberSequence';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('shows the requested amount of fibonacci numbers', () => {
  const wrapper = mount(<NumberSequence count={5} />);
  expect(wrapper.find('.FibonacciNumber').length).toBe(5);
});
