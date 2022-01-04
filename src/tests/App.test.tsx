import { render, screen } from '@testing-library/react';
import App from '../App';

test('first test case', () => {
  render(<App/>)
  const linkElement = screen.getByText(/rafi/i)
  expect(linkElement).toBeInTheDocument()
})