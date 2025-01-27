import { render, screen } from '@testing-library/react';
import App from './App';

test('render Todo App header', () => {
  render(<App />);
  const linkElement = screen.getByText(/ToDo App/i);
  expect(linkElement).toBeInTheDocument();
});
