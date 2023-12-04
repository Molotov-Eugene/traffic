const initialState = {
  cameras: [],
  loading: false,
  error: null,
};

export function camerasReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_CAMERAS_LIST':
      return { loading: true, error: null, cameras: [] };
    case 'FETCH_CAMERAS_LIST_SUCCESS':
      return { loading: false, error: null, cameras: action.payload };
    case 'FETCH_CAMERAS_LIST_ERROR':
      return { loading: false, error: action.payload, cameras: [] };
    case 'UPDATE_CAMERA_STATUS':
      return { ...state, loading: true, error: null };
    case 'UPDATE_CAMERA_STATUS_SUCCESS':
      return { ...action.payload, loading: false, error: null };
    case 'UPDATE_CAMERA_STATUS_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

