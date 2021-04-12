import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home Page on Start', () => {
  render(<App />);
  const homePageElement = screen.getByText(/sQReen Reader/i);
  expect(homePageElement).toBeInTheDocument();
});
