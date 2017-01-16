import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.images, action) {
  switch (action.type) {
    case types.SELECTED_IMAGE:
      return {...state, selectedImage: action.image};
    case types.FLICKR_IMAGES_SUCCESS:
      return [...state, action.images]
    default:
      return state;
  }
}