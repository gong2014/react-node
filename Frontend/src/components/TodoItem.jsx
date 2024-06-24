import { Button } from 'react-bootstrap';

export const TodoItem = ({ item, handleMarkAsComplete }) => (
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
