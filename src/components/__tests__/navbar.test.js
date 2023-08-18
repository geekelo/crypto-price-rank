import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import store from '../redux/store';
import NavBar from '../navbar';

test('NavBar matches snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    </Provider>,
  );

  // Compare the rendered component to a stored snapshot
  expect(asFragment()).toMatchSnapshot();
});
