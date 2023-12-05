export function chooseFilter(filter) {
  return (dispatch) => {
    dispatch({ type: 'BUTTONS_FILTER', payload: filter });
  }
}

export function searchFilter(input) {
  return (dispatch) => {
    dispatch({ type: 'SEARCH_FILTER', payload: input });
  }
}

