import { fireEvent, render, screen } from '@testing-library/react';
import TodoList from './TodoList';
const mockOnFilter = () => [{ title: 'abc', taskDetail: '', completed: false, id: 1 }];
const mockJestFn = jest.fn();

describe('TodoList', () => {
  test('renders TodoList and check Mark As Completed button click', () => {
    render(<TodoList filterType="COMPLETED" filterBy={mockOnFilter} completeCallback={mockJestFn} deleteItem={mockJestFn} />);
    const textElement = screen.getByText(/Number of COMPLETED items : 1/i);
    expect(textElement).toBeInTheDocument();

    const completeButton = screen.getByText(/Mark As Completed/);
    fireEvent.click(completeButton);
    expect(mockJestFn).toHaveBeenCalled();
  });

  test('renders TodoList and check delete button click', () => {
    render(<TodoList filterType="ACTIVE" filterBy={mockOnFilter} completeCallback={mockJestFn} deleteItem={mockJestFn} />);
    const textElement = screen.getByText(/Number of ACTIVE items : 1/i);
    expect(textElement).toBeInTheDocument();

    const deleteButton = screen.getByText(/Delete/i);
    fireEvent.click(deleteButton);
    expect(mockJestFn).toHaveBeenCalled();
  });

  test('renders TodoList All item', () => {
    render(<TodoList filterType="ALL" filterBy={mockOnFilter} completeCallback={mockJestFn} deleteItem={mockJestFn} />);
    const textElement = screen.getByText(/Number of ALL items : 1/i);
    expect(textElement).toBeInTheDocument();
  });
});
