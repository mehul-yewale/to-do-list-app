import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

// we should use jest mocking here for function 
test('renders TodoList component', () => {
  render(<TodoList filterType="COMPLETED" filterBy={() => []} completeCallback={()=> {}} deleteItem={() => {}} />);
  const buttonElement = screen.getByText(/Number of COMPLETED items : 0/i);
  expect(buttonElement).toBeInTheDocument();
});
