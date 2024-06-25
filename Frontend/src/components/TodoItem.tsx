import React from 'react';
import { Button } from 'react-bootstrap';
import { Item } from 'types/todoListType';

type TodoItemProps = {
  item: Item;
  handleMarkAsComplete: (item: Item) => void;
};

export const TodoItem = ({ item, handleMarkAsComplete }: TodoItemProps) => (
  <tr key={item.id}>
    <td>{item.id}</td>
    <td>{item.description}</td>
    <td>
      <Button variant={item.isCompleted ? 'success' : 'warning'} size="sm" onClick={() => handleMarkAsComplete(item)}>
        {item.isCompleted ? 'Mark as Not completed' : 'Mark as completed'}
      </Button>
    </td>
  </tr>
);
