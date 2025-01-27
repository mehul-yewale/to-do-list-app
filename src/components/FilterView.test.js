import { render, screen } from '@testing-library/react';
import FilterSection from './FilterView';

test('renders FilterSection component', () => {
  render(<FilterSection filterType="COMPLETED" onFilter={() => {}} />);
  const buttonElement = screen.getByText(/COMPLETED/i);
  const buttonElement2 = screen.getByText(/ALL/i);
  const buttonElement3 = screen.getByText(/ACTIVE/i);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement2).toBeInTheDocument();
  expect(buttonElement3).toBeInTheDocument();
});
