const initialState = {
  images: {},
  loading: false,
  error: null,
};

export function imagesReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_IMAGES':
      return { loading: true, error: null, images: {} };
    case 'FETCH_IMAGES_SUCCESS':
      return { loading: false, error: null, images: action.payload };
    case 'FETCH_IMAGES_ERROR':
      return { loading: false, error: action.payload, images: { default: null } };
    default:
      return state;
  }
}

