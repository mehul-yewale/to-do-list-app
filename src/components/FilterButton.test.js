import { render, screen } from '@testing-library/react';
import FilterButton from './FilterButton';

test('renders FilterButton component', () => {
  render(<FilterButton disabled onFilter={() => {}}> ALL </FilterButton>);
  const buttonElement = screen.getByText(/ALL/i);
  expect(buttonElement).toBeInTheDocument();
});
