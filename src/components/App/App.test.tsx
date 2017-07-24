import * as React from 'react';
import * as enzyme from 'enzyme';
import App from './App';

it('Renders without crashing', () => {
  const title = enzyme.shallow(<App />);
  expect(title.find('.Title').text()).toEqual('React HackerNews');
});
