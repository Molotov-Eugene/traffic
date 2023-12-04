import kv from '../../kv/kv';

export function fetchObjects() {
  return async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_OBJECTS_LIST' });
      const kvClient = await kv();
      const response = await kvClient.get('objects');
      dispatch({ type: 'FETCH_OBJECTS_LIST_SUCCESS', payload: response });
    } catch (e) {
      console.error(e)
      dispatch({ type: 'FETCH_OBJECTS_LIST_ERROR', payload: 'can not get objects list' });
    }
  }
}

export function updateObject(newState) {
  return async (dispatch) => {
    try {
      dispatch({ type: 'UPDATE_OBJECT' });
      const kvClient = await kv();
      await kvClient.set('objects', JSON.stringify(newState.objects));
      dispatch({ type: 'UPDATE_OBJECT_SUCCESS', payload: newState })
    } catch (e) {
      console.error(e)
      dispatch({ type: 'UPDATE_OBJECT_ERROR', payload: 'can not update object' });
    }
  }
}

