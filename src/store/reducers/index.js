import { combineReducers } from 'redux';
import { camerasReducer } from './camerasReducers';
import { imagesReducer } from './imagesReducers';
import { objectsReducer } from './objectsReducers';
import { filterReducer } from './filtersReducers';

export const rootReducer = combineReducers({
  cameras: camerasReducer,
  images: imagesReducer,
  objects: objectsReducer,
  filter: filterReducer,
})
