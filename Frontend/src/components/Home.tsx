import { addItem, getItems, updateItem } from '../api';
<<<<<<< HEAD
import React, { useEffect, useMemo, useReducer, useRef, useState } from 'react';
=======
import React, { useEffect, useReducer } from 'react';
>>>>>>> 55bb943 (add route)
import { Image, Container, Row, Col } from 'react-bootstrap';
import { initialState, reducer } from '../stateManage';
import { ActionType, Item } from '../types/todoListType';
import { CreateItem } from './CreateItem';
import { TodoList } from './TodoList';

<<<<<<< HEAD
export const useDebounce = (value: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debounceValue;
};

=======
>>>>>>> 55bb943 (add route)
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

<<<<<<< HEAD
  const [value, setValue] = useState({
    name: '',
    selected: true,
  });
  const timer = useRef<NodeJS.Timeout | null>(null);
  const debounceValue = useDebounce(value.name, 1000);

  const [show, setShow] = useState('');
  const handleChange = (name: string) => {
    setValue({ ...value, name });
  };

  const handleClick = () => {
    setValue({ ...value, selected: true });
  };

  const user = useMemo(() => {
    return {
      name: value.name,
      selected: value.selected,
    };
  }, [value.name, value.selected]);

  useEffect(() => {
    // fetchItems();
    const controller = new AbortController();
    const signal = controller.signal;

    const timer = setTimeout(() => {
      setShow(value.name);
    }, 1000);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, []);
  const [number, setNumber] = useState(0);
  const addNumber = () => {
    setNumber((pre) => pre + 1);
    setNumber((pre) => pre + 1);
    console.log(number);
  };

  return (
    <div className="home">
      <input value={value.name} onChange={(e) => handleChange(e.target.value)} />
      <button onClick={handleClick}>select</button>
      <div>{`{name: ${value.name}, selected: ${value.selected}}`}</div>
      <div>{debounceValue}</div>
      <div>
        <span>{number}</span>
        <span>
          <button onClick={addNumber}>click</button>
        </span>
      </div>
      <TodoList
        items={state.items}
        loading={state.loading}
        getItems={fetchItems}
        handleMarkAsComplete={handleMarkAsComplete}
      />
=======
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
>>>>>>> 55bb943 (add route)
    </div>
  );
};
