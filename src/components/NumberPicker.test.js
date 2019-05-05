import React from 'react';
import NumberPicker from './NumberPicker';
import _ from 'lodash';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('shows the number input', () => {
  const wrapper = mount(<NumberPicker count={5} onChange={_.noop} />);
  expect(wrapper.find('input').length).toBe(1);
});

it('fires the callback when the input changes', () => {
  const spy = jest.fn();
  const wrapper = mount(<NumberPicker count={5} onChange={spy} />);
  const input = wrapper.find('input').first();
  input.simulate('change', { target: { value: 7 } });
  expect(spy.mock.calls.length).toBe(1);
});
