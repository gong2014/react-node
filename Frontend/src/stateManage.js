export const initialState = {
    items: [],
    loading: true,
    error: ''
}
  
export  const ACTION_TYPE = {
    FETCH_ALL: 'FETCH_ALL',
    FETCH_ERROR: 'FETCH_ERROR',
    ADD_ITEM: 'ADD_ITEM',
    UPDATE_ITEM: 'UPDATE_ITEM'
}
  
export function reducer(state, action) {
    switch (action.type) {
        case ACTION_TYPE.FETCH_ALL:
        return {
            ...state,
            items: action.payload,
            error: '',
            loading: false,
        };
        case ACTION_TYPE.ADD_ITEM:
        return {
            ...state,
            items: [...state.items, action.payload],
            error: '',
        };
        case ACTION_TYPE.UPDATE_ITEM:
        return {
            ...state,
            items: state.items.map(item =>
            item.id === action.payload.id ? action.payload : item
            ),
            error: '',
        };
        case ACTION_TYPE.FETCH_ERROR:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
        default:
        return state;
    }
}
