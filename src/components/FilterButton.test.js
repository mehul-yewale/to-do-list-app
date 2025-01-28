import { render, screen, fireEvent } from '@testing-library/react';
import FilterButton from './FilterButton';

test('renders FilterButton component', () => {
  const mockOnFilter = jest.fn();
  render(<FilterButton disabled onFilter={mockOnFilter}> ALL </FilterButton>);
  const buttonElement = screen.getByText(/ALL/i);
  fireEvent.click(buttonElement);
  expect(buttonElement).toBeInTheDocument();
});
