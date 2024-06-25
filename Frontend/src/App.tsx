import './App.css';
<<<<<<< HEAD

import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import styled from 'styled-components';
import Drag from './components/Drag';

const NavLink = styled(Link)`
  margin-right: 10px;
`;
const App = () => {
  return (
    <Router>
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/login" className="link">
        login
      </NavLink>
      <NavLink to="/drag" className="link">
        drag
      </NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/drag" element={<Drag />} />
      </Routes>
    </Router>
=======
import { Image, Alert, Container, Row, Col } from 'react-bootstrap';
import React, { useCallback, useEffect, useReducer } from 'react';
import { CreateItem } from './components/CreateItem';
import { TodoList } from './components/TodoList';
import { getItems, addItem, updateItem } from './api';
import { initialState, reducer } from './stateManage';
import { ActionType, Item } from './types/todoListType';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchItems = useCallback(async () => {
    try {
      const response = await getItems();
      dispatch({ type: ActionType.FETCH_ALL, payload: response });
    } catch (error: any) {
      dispatch({ type: ActionType.FETCH_ERROR, payload: error.message });
    }
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

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

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Image src="clearPointLogo.png" fluid rounded />
          </Col>
        </Row>
        <Row>
          <Col>
            <Alert variant="success">
              <Alert.Heading>Todo List App</Alert.Heading>
              Welcome to the ClearPoint frontend technical test. We like to keep things simple, yet clean so your
              task(s) are as follows:
              <br />
              <br />
              <ol className="list-left">
                <li>Add the ability to add (POST) a Todo Item by calling the backend API</li>
                <li>
                  Display (GET) all the current Todo Items in the below grid and display them in any order you wish
                </li>
                <li>
                  Bonus points for completing the 'Mark as completed' button code for allowing users to update and mark
                  a specific Todo Item as completed and for displaying any relevant validation errors/ messages from the
                  API in the UI
                </li>
                <li>Feel free to add unit tests and refactor the component(s) as best you see fit</li>
              </ol>
            </Alert>
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
>>>>>>> 96bba23 (convert to typescript)
  );
};
export default App;
