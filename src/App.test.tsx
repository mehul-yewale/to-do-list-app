import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('render Todo App header', () => {
    render(<App />);
    const linkElement = screen.getByText(/ToDo App/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('check Add Item function', () => {
    render(<App />);
    const addIButtonElement = screen.getByText(/Add Item/i);
    const titleInput = screen.getAllByPlaceholderText('Enter title here');
    const detailsInput = screen.getAllByPlaceholderText('Enter task details here');
    const textElement = screen.getByText(/Number of ALL items : 0/i);
    expect(textElement).toBeInTheDocument();

    fireEvent.change(titleInput[0], { target: { value: 'title' } });
    fireEvent.change(detailsInput[0], { target: { value: 'details' } });
    fireEvent.click(addIButtonElement);
    const textElement1 = screen.getByText(/Number of ALL items : 1/i);
    expect(textElement1).toBeInTheDocument();


    fireEvent.change(titleInput[0], { target: { value: 'title1' } });
    fireEvent.change(detailsInput[0], { target: { value: 'details2' } });
    fireEvent.click(addIButtonElement);
    const textElement2 = screen.getByText(/Number of ALL items : 2/i);
    expect(textElement2).toBeInTheDocument();
  });

  test('render App component with ACTIVE button click', () => {
    render(<App />);
    const titleInput = screen.getAllByPlaceholderText('Enter title here');
    fireEvent.change(titleInput[0], { target: { value: 'title' } });
    const detailsInput = screen.getAllByPlaceholderText('Enter task details here');
    fireEvent.change(detailsInput[0], { target: { value: 'details' } });

    const textElement1 = screen.getByText(/Number of ALL items : 0/i);
    expect(textElement1).toBeInTheDocument();

    const addIButtonElement = screen.getByText(/Add Item/i);
    fireEvent.click(addIButtonElement);

    const activeButton = screen.getByText(/ACTIVE/i);
    fireEvent.click(activeButton);

    const textElement = screen.getByText(/Number of ACTIVE items : 1/i);
    expect(textElement).toBeInTheDocument();
  });


  test('render App component with Delete button click', () => {
    render(<App />);
    const titleInput = screen.getAllByPlaceholderText('Enter title here');
    fireEvent.change(titleInput[0], { target: { value: 'title' } });
    const detailsInput = screen.getAllByPlaceholderText('Enter task details here');
    fireEvent.change(detailsInput[0], { target: { value: 'details' } });

    const textElement1 = screen.getByText(/Number of ALL items : 0/i);
    expect(textElement1).toBeInTheDocument();

    const addIButtonElement = screen.getByText(/Add Item/i);
    fireEvent.click(addIButtonElement);

    const textElement = screen.getByText(/Number of ALL items : 1/i);
    expect(textElement).toBeInTheDocument();

    const deleteButton = screen.getByText(/Delete/i);
    fireEvent.click(deleteButton);

    const textElement2 = screen.getByText(/Number of ALL items : 0/i);
    expect(textElement2).toBeInTheDocument();
  });

  test('render App component with complete button click', () => {
    render(<App />);
    const titleInput = screen.getAllByPlaceholderText('Enter title here');
    fireEvent.change(titleInput[0], { target: { value: 'title' } });
    const detailsInput = screen.getAllByPlaceholderText('Enter task details here');
    fireEvent.change(detailsInput[0], { target: { value: 'details' } });

    const addIButtonElement = screen.getByText(/Add Item/i);
    fireEvent.click(addIButtonElement);

    const textElement = screen.getByText(/Number of ALL items : 1/i);
    expect(textElement).toBeInTheDocument();

    const completeButton = screen.getByText(/Mark As Completed/i);
    expect(completeButton).toBeInTheDocument();

    fireEvent.click(completeButton);
    const completedButton = screen.getByText(/^COMPLETED$/i);
    fireEvent.click(completedButton);

    const textElement2 = screen.getByText(/Number of COMPLETED items : 1/i);
    expect(textElement2).toBeInTheDocument();
    
    expect(completeButton).not.toBeInTheDocument();
  });
})

