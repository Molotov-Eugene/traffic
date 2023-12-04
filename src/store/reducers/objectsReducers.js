const initialState = {
  objects: [],
  loading: false,
  error: null,
};

export function objectsReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_OBJECTS_LIST':
      return { loading: true, error: null, objects: []};
    case 'FETCH_OBJECTS_LIST_SUCCESS':
      return { loading: false, error: null, objects: action.payload };
    case 'FETCH_OBJECTS_LIST_ERROR':
      return { loading: false, error: action.payload, objects: [] };
    case 'UPDATE_OBJECT':
      return { ...state, loading: true, error: null };
    case 'UPDATE_OBJECT_SUCCESS':
      return { ...action.payload, loading: false, error: null };
    case 'UPDATE_OBJECT_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

