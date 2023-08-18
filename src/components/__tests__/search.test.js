import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Search from '../search';

// Mock the useSelector function
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

test('Search component matches snapshot', () => {
  // Mock the useSelector hook
  useSelector.mockReturnValue({ theme: { value: true } });

  const mockHandleFilteredNames = jest.fn();

  const { asFragment } = render(<Search handleFliterednames={mockHandleFilteredNames} />);
  
  // Compare the rendered component to a stored snapshot
  expect(asFragment()).toMatchSnapshot();
});
