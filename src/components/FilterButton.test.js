import { render, screen } from '@testing-library/react';
import FilterButton from './FilterButton';

test('renders learn react link', () => {
  render(<FilterButton disabled onFilter={() => {}}> ALL </FilterButton>);
  const buttonElement = screen.getByText(/ALL/i);
  expect(buttonElement).toBeInTheDocument();
});
