import { combineReducers } from 'redux';
import imageReducer from './imageReducers';
import videoReducer from './videoReducers';

export default combineReducers({
  images: imageReducer,
  videos: videoReducer
});