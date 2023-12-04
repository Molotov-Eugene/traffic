import kv from '../../kv/kv';

export function fetchCameras() {
  return async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_CAMERAS_LIST' });
      const kvClient = await kv();
      const response = await kvClient.get('cameras');
      dispatch({ type: 'FETCH_CAMERAS_LIST_SUCCESS', payload: response });
    } catch (e) {
      console.error(e)
      dispatch({ type: 'FETCH_CAMERAS_LIST_ERROR', payload: 'can not get cameras list' });
    }
  }
}

export function updateCameraStatus(newState) {
  return async (dispatch) => {
    try {
      dispatch({ type: 'UPDATE_CAMERA_STATUS' });
      const kvClient = await kv();
      await kvClient.set('cameras', JSON.stringify(newState.cameras));
      dispatch({ type: 'UPDATE_CAMERA_STATUS_SUCCESS', payload: newState });
    } catch (e) {
      console.error(e)
      dispatch({ type: 'UPDATE_CAMERA_STATUS_ERROR', payload: 'can not update camera status' });
    }
  }
}
