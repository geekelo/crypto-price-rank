import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter if needed
import store from '../redux/store';
import Home from '../home';

test('Home component matches snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Provider>,
  );

  // Compare the rendered component to a stored snapshot
  expect(asFragment()).toMatchSnapshot();
});
