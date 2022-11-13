import React from 'react';
import { render, screen } from '@testing-library/react';
import TestPage from '.';

test('renders learn react link', () => {
  render(<TestPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
