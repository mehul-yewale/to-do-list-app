import { render, screen, fireEvent } from '@testing-library/react';
import AddTodoView from './AddTodoView';

const mockAddItem = jest.fn((item) => {});

// we should use jest mocking here for function 
test('renders AddTodoView labels component', () => {
  render(<AddTodoView onAddItem={mockAddItem}/>);
  const buttonElement = screen.getByText(/Title:/i);
  const buttonElement2 = screen.getByText(/Details:/i);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement2).toBeInTheDocument();
});

test('renders AddTodoView component with title and details and ADD button click', () => {
  render(<AddTodoView onAddItem={mockAddItem}/>);
  const buttonElement3 = screen.getByText(/Add Item/i);
  buttonElement3.click();
  const titleInput = screen.getAllByPlaceholderText('title');
  fireEvent.change(titleInput[0], { target: { value: 'title' }});
  const detailsInput = screen.getAllByPlaceholderText('details');
  fireEvent.change(detailsInput[0], { target: { value: 'details' } });
  buttonElement3.click();
  expect(buttonElement3).toBeInTheDocument();
});
