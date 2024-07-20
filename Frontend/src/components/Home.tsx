import { addItem, getItems, updateItem } from '../api';
import React, { useEffect, useReducer } from 'react';
import { initialState, reducer } from '../stateManage';
import { ActionType, Item } from '../types/todoListType';
import { TodoList } from './TodoList';
import { CreateItem } from './CreateItem';
import axios, { CancelTokenSource } from 'axios';

export const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchItems = async (source: CancelTokenSource | null) => {
    try {
      const response = await getItems(source);
      dispatch({ type: ActionType.FETCH_ALL, payload: response });
    } catch (error: any) {
      dispatch({ type: ActionType.FETCH_ERROR, payload: error.message });
    }
  };

  async function handleMarkAsComplete(item: Item) {
    const NewItem = { ...item, isCompleted: !item.isCompleted };
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
    const source = axios.CancelToken.source();
    fetchItems(source);
    return () => {
      source.cancel('operation cancel');
    };
  }, []);

  return (
    <div className="home">
      <CreateItem handleAdd={handleAdd} />
      <TodoList
        items={state.items}
        loading={state.loading}
        getItems={() => fetchItems(null)}
        handleMarkAsComplete={handleMarkAsComplete}
      />
    </div>
  );
};
