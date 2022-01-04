import { render, screen } from '@testing-library/react';
import Board from '../views/Gameboard';

for (let i = 0; i<9; i++){
  test('Gameboard Button '+i, () => {
    render(<Board/>)
    const linkElement = screen.getByText(i)
    expect(linkElement).toBeInTheDocument()
  })
}