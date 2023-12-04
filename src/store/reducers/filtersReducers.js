const initialState = {
  activeFilter: 'all',
}


export function filterReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHOOSE_FILTER':
      return { activeFilter: action.payload };
    default:
      return state;
  }
}

