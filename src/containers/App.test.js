import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page Currency Exchange', () => {
  render(<App />);
  const linkElement = screen.getByText(/Currency Exchange/i);
  expect(linkElement).toBeInTheDocument();
});
