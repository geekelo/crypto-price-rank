import React from 'react';
import renderer from 'react-test-renderer'; // for creating snapshots
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import store from '../redux/store';
import Cryptopage from '../cryptopage';

test('Cryptopage component matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/1']}>
        <Routes>
          <Route path="/:id" component={Cryptopage} />
         </Routes>
      </MemoryRouter>
    </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
