export function chooseFilter(filter) {
  return (dispatch) => {
    dispatch({ type: 'CHOOSE_FILTER', payload: filter });
  }
}

