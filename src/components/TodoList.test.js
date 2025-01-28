import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
const mockOnFilter = () => [{ title: 'abc', taskDetail: '', completed: false, id: 1 }];
const mockJestFn = jest.fn();

describe('TodoList', () => {
  test('renders TodoList with completed item', () => {
    render(<TodoList filterType="COMPLETED" filterBy={mockOnFilter} completeCallback={mockJestFn} deleteItem={mockJestFn} />);
    const completeButton = screen.getByText(/Complete/);
    completeButton.click();
    const buttonElement = screen.getByText(/Number of COMPLETED items : 1/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders TodoList with Active item', () => {
    render(<TodoList filterType="ACTIVE" filterBy={mockOnFilter} completeCallback={mockJestFn} deleteItem={mockJestFn} />);
    const deleteButton = screen.getByText(/Delete/i);
    deleteButton.click();
    const buttonElement = screen.getByText(/Number of ACTIVE items : 1/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders TodoList All item', () => {
    render(<TodoList filterType="ALL" filterBy={mockOnFilter} completeCallback={mockJestFn} deleteItem={mockJestFn} />);
    const buttonElement = screen.getByText(/Number of ALL items : 1/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
