import { render, screen } from '@testing-library/react';
import FilterButton from './FilterButton';

test('renders FilterButton component', () => {
  render(<FilterButton disabled onFilter={jest.fn()}> ALL </FilterButton>);
  const buttonElement = screen.getByText(/ALL/i);
  buttonElement.click();
  expect(buttonElement).toBeInTheDocument();
});
