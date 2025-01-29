import { render, screen } from '@testing-library/react';
import FilterSection from './FilterSection';
const onFilterFnMock = jest.fn(() => { });

describe('FilterSection', () => {
  test('renders FilterSection COMPLETED component', () => {
    render(<FilterSection filterType="COMPLETED" onFilter={onFilterFnMock} />);
    const buttonElement = screen.getByText(/ACTIVE/i);
    buttonElement.click();
    expect(onFilterFnMock).toHaveBeenCalled();
  });

  test('renders FilterSection ACTIVE component', () => {
    render(<FilterSection filterType="ACTIVE" onFilter={onFilterFnMock} />);
    const buttonElement = screen.getByText(/ALL/i);
    buttonElement.click();
    expect(onFilterFnMock).toHaveBeenCalled();
  });

  test('renders FilterSection ALL component', () => {
    render(<FilterSection filterType="ALL" onFilter={onFilterFnMock} />);
    const buttonElement = screen.getByText(/COMPLETED/i);
    buttonElement.click();
    expect(onFilterFnMock).toHaveBeenCalled();
  });
})
