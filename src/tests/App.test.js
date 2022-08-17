import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('I am your test', () => {
  render(<App />);
  const linkElement = screen.getByText(/busque/i);
  expect(linkElement).toBeInTheDocument();
});
