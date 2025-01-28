import { render, screen } from '@testing-library/react';
import FilterSection from './FilterView';
const onFilterFnMock = jest.fn(() => { });

describe('FilterSection', () => {
  test('renders FilterSection COMPLETED component', () => {
    render(<FilterSection filterType="COMPLETED" onFilter={onFilterFnMock} />);
    const buttonElement = screen.getByText(/ACTIVE/i);
    buttonElement.click();
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders FilterSection ACTIVE component', () => {
    render(<FilterSection filterType="ACTIVE" onFilter={onFilterFnMock} />);
    const buttonElement2 = screen.getByText(/ALL/i);
    buttonElement2.click();
    expect(buttonElement2).toBeInTheDocument();
  });

  test('renders FilterSection ALL component', () => {
    render(<FilterSection filterType="ALL" onFilter={onFilterFnMock} />);
    const buttonElement3 = screen.getByText(/COMPLETED/i);
    buttonElement3.click();
    expect(buttonElement3).toBeInTheDocument();
  });
})
