import { screen, render } from '@testing-library/react';
import App from './App';

test('Should render the header', async () => {
  render(<App />);

  const img = screen.getByAltText(/alchemy logo/i);
  const heading = await screen.findByRole('heading', { name: /vonta/i });
  // banner is a role associated with <header> tags
  const banner = screen.getByRole('banner');

  expect(img).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  // inside of banner there's a style called background and assigned to --grey in the .css file
  expect(banner).toHaveStyle({ background: "--grey" });
});
