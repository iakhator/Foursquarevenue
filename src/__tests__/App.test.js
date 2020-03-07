import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

test('renders learn react link', () => {
  const div = document.createElement('div')
  const { getByText } = render(<App />, div);
  const linkElement = getByText('Loading...');
  expect(linkElement).toBeInTheDocument();
});
