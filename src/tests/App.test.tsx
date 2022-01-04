import { render, screen } from '@testing-library/react';
import App from '../App';

for (let i = 0; i<9; i++){
  test('Gameboard Button '+i, () => {
    render(<App/>)
    const linkElement = screen.getByText(i)
    expect(linkElement).toBeInTheDocument()
  })
}

test('Gameboard Button boundary values', ()=> {
  render(<App/>)
  const linkElement = screen.getByText(9)
  expect(linkElement).toBeInTheDocument()
})