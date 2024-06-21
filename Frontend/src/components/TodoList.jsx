import { Button, Table } from 'react-bootstrap';
import { TodoItem } from './TodoItem';

export const TodoList = ({items, loading, getItems, handleMarkAsComplete}) => {
    return (
      <>
        <h1>
          Showing {items.length} Item(s){' '}
          <Button variant="primary" className="pull-right" onClick={() => getItems()}>
            Refresh
          </Button>
        </h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              loading ? (
                <tr>
                  <td>Loading</td>
                </tr>
              ) : 
              (items.map((item) => (
                  <TodoItem 
                      key={item.id}
                      item={item}
                      handleMarkAsComplete={handleMarkAsComplete}
                  />
              ))
            )}
          </tbody>
        </Table>
      </>
    );
  };