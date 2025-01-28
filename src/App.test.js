import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('render Todo App header', () => {
    render(<App />);
    const linkElement = screen.getByText(/ToDo App/i);
    const buttonElement3 = screen.getByText(/Add Item/i);
    const titleInput = screen.getAllByPlaceholderText('Enter title here');
    fireEvent.change(titleInput[0], { target: { value: 'title' } });
    const detailsInput = screen.getAllByPlaceholderText('Enter task details here');
    fireEvent.change(detailsInput[0], { target: { value: 'details' } });
    fireEvent.click(buttonElement3);
    fireEvent.change(titleInput[0], { target: { value: 'title1' } });
    fireEvent.change(detailsInput[0], { target: { value: 'details2' } });
    fireEvent.click(buttonElement3);
    expect(linkElement).toBeInTheDocument();
  });

  test('render Todo App header on ACTIVE button click', () => {
    render(<App />);
    const titleInput = screen.getAllByPlaceholderText('Enter title here');
    fireEvent.change(titleInput[0], { target: { value: 'title' } });
    const detailsInput = screen.getAllByPlaceholderText('Enter task details here');
    fireEvent.change(detailsInput[0], { target: { value: 'details' } });
    const buttonElement3 = screen.getByText(/Add Item/i);
    buttonElement3.click();
    const activeButton = screen.getByText(/ACTIVE/i);
    activeButton.click();
    const linkElement = screen.getByText(/ToDo App/i);
    expect(linkElement).toBeInTheDocument();
  });


  test('render Todo App header on COMPLETED button click', () => {
    render(<App />);
    const titleInput = screen.getAllByPlaceholderText('Enter title here');
    fireEvent.change(titleInput[0], { target: { value: 'title' } });
    const detailsInput = screen.getAllByPlaceholderText('Enter task details here');
    fireEvent.change(detailsInput[0], { target: { value: 'details' } });
    const buttonElement3 = screen.getByText(/Add Item/i);
    buttonElement3.click();
    const completeButton = screen.getByText(/COMPLETED/i);
    completeButton.click();
    const linkElement = screen.getByText(/ToDo App/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('render Todo App header on complete button click', () => {
    render(<App />);
    const titleInput = screen.getAllByPlaceholderText('Enter title here');
    fireEvent.change(titleInput[0], { target: { value: 'title' } });
    const detailsInput = screen.getAllByPlaceholderText('Enter task details here');
    fireEvent.change(detailsInput[0], { target: { value: 'details' } });
    const buttonElement3 = screen.getByText(/Add Item/i);
    fireEvent.click(buttonElement3);
    const completeButton = screen.getAllByText(/Complete/i);
    fireEvent.click(completeButton[1]);
    const deleteButton = screen.getByText(/Delete/i);
    fireEvent.click(deleteButton);
    const linkElement = screen.getByText(/ToDo App/i);
    expect(linkElement).toBeInTheDocument();
  });
})

