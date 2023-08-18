import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Use BrowserRouter for NavLink
import { Provider } from 'react-redux';
import store from '../redux/store'; // Update the import path
import CryptoList from '../cryptolist';

test('CryptoList component matches snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Router>
        <CryptoList
          id="1"
          name="Bitcoin"
          price="50000"
        />
      </Router>
    </Provider>,
  );

  // Compare the rendered component to a stored snapshot
  expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <a
    class="list lightlist"
    href="/cryptopage/1"
  >
    <p
      class="gotoArrow"
    >
      <svg
        fill="currentColor"
        height="1em"
        stroke="currentColor"
        stroke-width="0"
        viewBox="0 0 16 16"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
          fill-rule="evenodd"
        />
      </svg>
    </p>
    <div
      class="coinDetails"
    >
      <img
        alt="coin"
        src="coin.png"
        width="20"
      />
      <h3>
        Bitcoin
      </h3>
      <p
        class="price"
      >
        $ 50000
      </p>
    </div>
  </a>
</DocumentFragment>
`);
});
