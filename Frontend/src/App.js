import './App.css';
import { Image, Alert, Container, Row, Col } from 'react-bootstrap';
import React, { useEffect, useReducer } from 'react';
import { CreateItem } from './components/CreateItem';
import { TodoList } from './components/TodoList';
import { getItems, addItem, updateItem } from './api';
import { ACTION_TYPE, initialState, reducer } from './stateManage';

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchItems = async () => {
    try {
      const response = await getItems();
      dispatch({type: ACTION_TYPE.FETCH_ALL, payload: response})
    } catch (error) {
      dispatch({type: ACTION_TYPE.FETCH_ERROR, payload: error.message})
    }
  }

  useEffect(() => {
      fetchItems();
  }, []);

  async function handleMarkAsComplete(item) {
    const NewItem = {...item, isCompleted: !item?.isCompleted};
    try {
        await updateItem(NewItem);
        dispatch({type: ACTION_TYPE.UPDATE_ITEM, payload: NewItem})
    } catch (error) {
        dispatch({type: ACTION_TYPE.FETCH_ERROR, payload: error.message})
    }
  }

  async function handleAdd(description) {
    try {
      const item = await addItem(description);
      dispatch({type: ACTION_TYPE.UPDATE_ITEM, payload: item})
      //it showing id in here but id is generate by node, I have to call api again to get value
      fetchItems()
    } catch (error) {
      dispatch({type: ACTION_TYPE.FETCH_ERROR, payload: error.message})
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
            <CreateItem 
              handleAdd = {handleAdd}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <TodoList 
              items={state.items}
              loading = {state.loading}
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

export default App;
