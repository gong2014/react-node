import './App.css';
import { Image, Alert, Container, Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CreateItem } from './components/CreateItem';
import { TodoList } from './components/TodoList';

const App = () => {
  const [description, setDescription] = useState('');
  const [items, setItems] = useState([]);
  const [apiError, setApiError] = useState('');

  //actually host part need to move to .env file
  const todoUrl = "http://localhost:7000/api/todoItems";

  useEffect(() => {
    axios.get(todoUrl)
      .then(response => {
        setItems(response.data);
        setApiError('');
      })
      .catch(error => setApiError(error.response.data));
  }, [todoUrl]);

  async function handleMarkAsComplete(item) {
    const NewItem = {...item, isCompleted: !item?.isCompleted};
    try {
        await axios.put(
          todoUrl + "/" + item.id, 
          NewItem
        )
        setItems(currentItems => {
          return currentItems.map((todoItem) => {
            if (todoItem.id === item.id) {
              return {...todoItem, ...NewItem}
            } 
            
            return todoItem;
          })
        })
        setApiError('');
    } catch (error) {
        setApiError(error.response.data);
    }
  }

  async function handleAdd() {
    try {
        await axios.post(todoUrl, { description })
        setDescription('')
        setApiError('');

        //it showing id in here but id is generate by node, I have to call api again to get value
        getItems()
    } catch (error) {
        setApiError(error.response.data);
    }
  }

  async function getItems() {
    try {
      const response = await axios.get(todoUrl);
      setItems(response.data);
      setApiError('');
    } catch (error) {
      setApiError(error?.response?.data);
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
          <Col>{apiError && <h3 style={{ color: 'red', backgroundColor: 'yellow' }}>{apiError}</h3>}</Col>
        </Row>
        <Row>
          <Col>
            <CreateItem 
              description = {description} 
              setDescription = {setDescription}
              handleAdd = {handleAdd}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <TodoList 
              items={items}
              getItems={getItems}
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
