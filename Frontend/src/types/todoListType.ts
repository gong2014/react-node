export type Item = {
  id: string;
  description: string;
  isCompleted: boolean;
};

export type ReducerState = {
  items: Item[];
  loading: boolean;
  error: string;
};

export enum ActionType {
  FETCH_ALL = 'FETCH_ALL',
  FETCH_ERROR = 'FETCH_ERROR',
  ADD_ITEM = 'ADD_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
}

type FetchAllAction = {
  type: ActionType.FETCH_ALL;
  payload: Item[];
};

type FetchErrorAction = {
  type: ActionType.FETCH_ERROR;
  payload: string;
};

type AddItemAction = {
  type: ActionType.ADD_ITEM;
  payload: Item;
};

type UpdateItemAction = {
  type: ActionType.UPDATE_ITEM;
  payload: Item;
};

export type Action = FetchAllAction | FetchErrorAction | AddItemAction | UpdateItemAction;
