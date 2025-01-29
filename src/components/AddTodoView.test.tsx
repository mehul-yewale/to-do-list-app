import { render, screen, fireEvent } from '@testing-library/react';
import AddTodoView from './AddTodoView';
const mockAddItem = jest.fn();

describe('AddTodoView', () => {
  test('renders AddTodoView component with lebels, inputs and Add Item button', () => {
    render(<AddTodoView onAddItem={mockAddItem} />);
    const titleLabelElement = screen.getByText(/Title:/i);
    const detailLabelElement = screen.getByText(/Details:/i);
    const titleInput = screen.getByPlaceholderText('Enter title here');
    const detailsInput = screen.getByPlaceholderText('Enter task details here');
    const addIButtonElement = screen.getByText(/Add Item/i);

    expect(addIButtonElement).toBeInTheDocument();
    expect(titleLabelElement).toBeInTheDocument();
    expect(detailLabelElement).toBeInTheDocument();
    expect(titleInput).toBeInTheDocument();
    expect(detailsInput).toBeInTheDocument();
  });

  test('renders AddTodoView component with title and details and ADD button click', () => {
    render(<AddTodoView onAddItem={mockAddItem} />);

    const addIButtonElement = screen.getByText(/Add Item/i);
    fireEvent.click(addIButtonElement);
    const errorTextElement = screen.getByText('Both fields are required!');
    expect(errorTextElement).toBeInTheDocument();

    const titleInput: HTMLInputElement = screen.getByPlaceholderText('Enter title here');
    fireEvent.change(titleInput, { target: { value: 'title' } });
    expect(titleInput.value).toBe('title');

    const detailsInput: HTMLInputElement = screen.getByPlaceholderText('Enter task details here');
    fireEvent.change(detailsInput, { target: { value: 'details' } });
    expect(detailsInput.value).toBe('details');
    expect(errorTextElement).not.toBeInTheDocument();
    
    fireEvent.click(addIButtonElement);
    expect(mockAddItem).toHaveBeenCalled();
    expect(titleInput.value).toBe('');
    expect(detailsInput.value).toBe('');
  });
});
