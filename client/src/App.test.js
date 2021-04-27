import { render, screen } from '@testing-library/react'; // Testing utility for React like enzyme but from a users perpective
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the dog encyclopedia!/i);
  expect(linkElement).toBeInTheDocument();
});

test('full app rendering/navigating: Home', async () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>
  )
 // Simulate a click on "Home" to continue to home
  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/Enter/i), leftClick)

  screen.debug();
  let A = await screen.findByText(/Dog app/i)


})