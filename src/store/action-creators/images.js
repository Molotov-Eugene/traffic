import kv from '../../kv/kv';

export function fetchImages() {
  return async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_IMAGES' });
      const kvClient = await kv(); 
      const response = await kvClient.get('images2');
      dispatch({ type: 'FETCH_IMAGES_SUCCESS', payload: response });
    } catch (e) {
      console.log(e)
      dispatch({ type: 'FETCH_IMAGES_ERROR', payload: 'can not get images' });
    }
  }
}
