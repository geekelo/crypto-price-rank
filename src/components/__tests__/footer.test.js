import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'; // Import MemoryRouter if needed
import store from '../redux/store';
import Footer from '../footer';

test('Home component matches snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Footer />
    </Provider>,
  );

  // Compare the rendered component to a stored snapshot
  expect(asFragment()).toMatchSnapshot();
});
