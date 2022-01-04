import { render, screen } from '@testing-library/react';
import Square from '../components/Square';

test('first test case', () => {
  render(<Square value='5' onClick={6}/>)
  const linkElement = screen.getByText(/5/i)
  expect(linkElement).toBeInTheDocument()
})