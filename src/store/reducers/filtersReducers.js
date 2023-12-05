const initialState = {
  filter: 'all',
  search: '',
}
export function filterReducer(state = initialState, action) {
  switch (action.type) {
    case 'BUTTONS_FILTER':
      return { ...state, filter: action.payload };
    case 'SEARCH_FILTER':
      return { ...state, search: action.payload };
    default:
      return state;
  }
}

