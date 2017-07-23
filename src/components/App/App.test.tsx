import * as React from 'react';
import * as enzyme from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const text = enzyme.shallow(<App />);
  expect(text.find('.content').text()).toEqual('Welcome to React');
});
