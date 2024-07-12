<<<<<<< HEAD
import { Item } from './types/todoListType';
import { Action, ReducerState, ActionType } from './types/todoListType';
=======
import { Item } from 'types/todoListType';
import { Action, ReducerState, ActionType } from 'types/todoListType';
>>>>>>> 96bba23 (convert to typescript)

export const initialState: ReducerState = {
  items: [],
  loading: true,
  error: '',
};

export function reducer(state: ReducerState, action: Action): ReducerState {
  switch (action.type) {
    case ActionType.FETCH_ALL:
      return {
        ...state,
        items: action.payload,
        error: '',
        loading: false,
      };
    case ActionType.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        error: '',
      };
    case ActionType.UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item: Item) => (item.id === action.payload.id ? action.payload : item)),
        error: '',
      };
    case ActionType.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
