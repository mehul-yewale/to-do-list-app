import { render, screen } from '@testing-library/react';
import FilterSection from './FilterView';

test('renders FilterSection COMPLETED component', () => {
  render(<FilterSection filterType="COMPLETED" onFilter={jest.fn(() => {})} />);
  const buttonElement = screen.getByText(/ACTIVE/i);
  buttonElement.click();
  expect(buttonElement).toBeInTheDocument();
});

test('renders FilterSection ACTIVE component', () => {
  render(<FilterSection filterType="ACTIVE" onFilter={jest.fn(() => {})} />);
  const buttonElement2 = screen.getByText(/ALL/i);
  buttonElement2.click();
  expect(buttonElement2).toBeInTheDocument();
});

test('renders FilterSection ALL component', () => {
  render(<FilterSection filterType="ALL" onFilter={jest.fn(() => {})} />);
  const buttonElement3 = screen.getByText(/COMPLETED/i);
  buttonElement3.click();
  expect(buttonElement3).toBeInTheDocument();
});
