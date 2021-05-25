import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PokemonList from './pages/PokemonList';

test('test show more button', () => {
  render(<PokemonList />);
  const button = screen.getByText(/Show more/);
  userEvent.click(button);
  expect(button).toHaveTextContent(/Please wait/);
});
