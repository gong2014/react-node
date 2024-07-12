import axios, { CancelTokenSource } from 'axios';
import { Item } from 'types/todoListType';

//actually host part need to move to .env file
const todoUrl = 'http://localhost:7000/api/todoItems';

export const getItems = async (source: CancelTokenSource | null) => {
  const obj = source ? { cancelToken: source.token } : {};
  const response = await axios.get(todoUrl, obj);
  return response.data;
};

export const addItem = async (description: string) => {
  const response = await axios.post(todoUrl, { description });
  return response.data;
};

export const updateItem = async (item: Item) => {
  const response = await axios.put(`${todoUrl}/${item.id}`, item);
  return response.data;
};
