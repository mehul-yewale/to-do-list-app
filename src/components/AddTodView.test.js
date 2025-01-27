import { render, screen } from '@testing-library/react';
import AddTodoView from './AddTodoView';

// we should use jest mocking here for function 
test('renders AddTodoView component', () => {
  render(<AddTodoView onAddItem={() => {}}/>);
  const buttonElement = screen.getByText(/Title:/i);
  const buttonElement2 = screen.getByText(/Details:/i);
  const buttonElement3 = screen.getByText(/Add Item/i);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement2).toBeInTheDocument();
  expect(buttonElement3).toBeInTheDocument();
});
