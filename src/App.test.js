import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Comming soon!', () => {
  render(<App />);
  const h2Element = screen.getByText(/Comming Soon Dashboard!/i);
  expect(h2Element).toBeInTheDocument();
});
