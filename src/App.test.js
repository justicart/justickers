import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeEach(() => {
  window.history.replaceState({}, '', '/');
});

test('renders the app list on the home page', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Useful iPhone apps with a little personality.' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Animated Stickers' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('href', '/privacy');
});

test('navigates to the privacy page from the footer link', async () => {
  const user = userEvent.setup();

  render(<App />);
  await user.click(screen.getByRole('link', { name: 'Privacy Policy' }));

  expect(screen.getByRole('heading', { name: 'Privacy Policy' })).toBeInTheDocument();
  expect(window.location.pathname).toBe('/privacy');
});

test('renders the privacy page directly from the url', () => {
  window.history.replaceState({}, '', '/privacy');

  render(<App />);

  expect(screen.getByRole('heading', { name: 'Privacy Policy' })).toBeInTheDocument();
});
