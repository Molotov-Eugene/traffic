
import * as CamerasActionCreators from './cameras';
import * as ObjectsActionCreators from './objects';
import * as ImagesActionCreators from './images';
import * as FiltersActionCreators from './filters'

export default {
  ...ImagesActionCreators,
  ...CamerasActionCreators,
  ...ObjectsActionCreators,
  ...FiltersActionCreators,
}
