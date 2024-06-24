import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { TodoList } from '../components/TodoList';

const items = [
  { id: '1', description: 'des1', isCompleted: false },
  { id: '2', description: 'des2', isCompleted: true },
];

const mockGetItems = jest.fn();
const mockHandleMarkAsComplete = jest.fn();

describe('TodoList Component', () => {
  test('displays the correct number of items', () => {
    render(<TodoList items={items} getItems={mockGetItems} handleMarkAsComplete={mockHandleMarkAsComplete} />);
    expect(screen.getByText('des1')).toBeInTheDocument();
    expect(screen.getByText('des2')).toBeInTheDocument();
  });

  test('calls getItems function when Refresh button is clicked', () => {
    render(<TodoList items={items} getItems={mockGetItems} handleMarkAsComplete={mockHandleMarkAsComplete} />);
    const refreshButton = screen.getByText('Refresh');
    fireEvent.click(refreshButton);
    expect(mockGetItems).toHaveBeenCalled();
  });

  test('calls handleMarkAsComplete when TodoItem button is clicked', () => {
    render(<TodoList items={items} getItems={mockGetItems} handleMarkAsComplete={mockHandleMarkAsComplete} />);
    const markAsCompleteButtons = screen.getAllByText(/Mark as/i);
    markAsCompleteButtons.forEach((button) => {
      fireEvent.click(button);
    });
    expect(mockHandleMarkAsComplete).toHaveBeenCalledTimes(items.length);
  });
});
