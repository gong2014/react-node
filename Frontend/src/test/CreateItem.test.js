import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { CreateItem } from '../components/CreateItem';
import App from '../App';
import axios from 'axios';

// Mock axios
jest.mock('axios');

test('renders input and buttons', () => {
    render(
      <CreateItem
        handleAdd={jest.fn()}
        description=""
        setDescription={jest.fn()}
      />
    );
  
    const inputElement = screen.getByPlaceholderText('Enter description...');
    expect(inputElement).toBeInTheDocument();

    const addButton = screen.getByText('Add Item');
    expect(addButton).toBeInTheDocument();
  
    const clearButton = screen.getByText('Clear');
    expect(clearButton).toBeInTheDocument();
});


test('allows user to input text', () => {
    const setDescription = jest.fn();
  
    render(
      <CreateItem
        handleAdd={jest.fn()}
        description=""
        setDescription={setDescription}
      />
    );
  
    const inputElement = screen.getByPlaceholderText('Enter description...');
  
    fireEvent.change(inputElement, { target: { value: 'New Todo Item' } });
    expect(setDescription).toHaveBeenCalledWith('New Todo Item');
});

test('clears input when clear button is clicked', () => {
    const setDescription = jest.fn();

    render(
        <CreateItem
        handleAdd={jest.fn()}
        description="New Todo Item"
        setDescription={setDescription}
        />
    );

    const clearButton = screen.getByText('Clear');

    fireEvent.click(clearButton);
    expect(setDescription).toHaveBeenCalledWith('');
});

test('adds a new item to the list when Add Item button is clicked', async () => {
    const mockItems = [
      { id: '1', description: 'Existing Todo Item', isCompleted: false },
      { id: '2', description: 'New Todo Item', isCompleted: false },
    ];
  
    axios.get.mockResolvedValue({ data: mockItems });
    axios.post.mockResolvedValue({ data: { id: '2', description: 'New Todo Item' } });
  
    render(<App />);

    const inputElement = screen.getByPlaceholderText('Enter description...');
    fireEvent.change(inputElement, { target: { value: 'New Todo Item' } });
  
    const addButton = screen.getByText('Add Item');
    fireEvent.click(addButton);
  
    await waitFor(() => {
      const newItem = screen.getByText('New Todo Item');
      expect(newItem).toBeInTheDocument();
    });
  
    const itemList = screen.getAllByRole('row');
    expect(itemList).toHaveLength(3); // 包含标题行
});
