import { addItem, getItems, updateItem } from '../api';
import React, { useEffect, useReducer } from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import { initialState, reducer } from '../stateManage';
import { ActionType, Item } from '../types/todoListType';
import { CreateItem } from './CreateItem';
import { TodoList } from './TodoList';

export const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchItems = async () => {
    try {
      const response = await getItems();
      dispatch({ type: ActionType.FETCH_ALL, payload: response });
    } catch (error: any) {
      dispatch({ type: ActionType.FETCH_ERROR, payload: error.message });
    }
  };

  async function handleMarkAsComplete(item: Item) {
    const NewItem = { ...item, isCompleted: !item?.isCompleted };
    try {
      await updateItem(NewItem);
      dispatch({ type: ActionType.UPDATE_ITEM, payload: NewItem });
    } catch (error: any) {
      dispatch({ type: ActionType.FETCH_ERROR, payload: error.message });
    }
  }

  async function handleAdd(description: string) {
    try {
      const item = await addItem(description);
      dispatch({ type: ActionType.ADD_ITEM, payload: item });
    } catch (error: any) {
      dispatch({ type: ActionType.FETCH_ERROR, payload: error.message });
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Image src="clearPointLogo.png" fluid rounded />
          </Col>
        </Row>
        <Row>
          <Col>{state.error && <h3 style={{ color: 'red', backgroundColor: 'yellow' }}>{state.error}</h3>}</Col>
        </Row>
        <Row>
          <Col>
            <CreateItem handleAdd={handleAdd} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <TodoList
              items={state.items}
              loading={state.loading}
              getItems={fetchItems}
              handleMarkAsComplete={handleMarkAsComplete}
            />
          </Col>
        </Row>
      </Container>
      <footer className="page-footer font-small teal pt-4">
        <div className="footer-copyright text-center py-3">
          © 2021 Copyright:
          <a href="https://clearpoint.digital" target="_blank" rel="noreferrer">
            clearpoint.digital
          </a>
        </div>
      </footer>
    </div>
  );
};
