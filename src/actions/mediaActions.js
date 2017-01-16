import * as types from '../constants/actionTypes';

export const selectedImageAction = (image) => {
  return {
    type: types.SELECTED_IMAGE,
    image
  };
}

export const selectedVideoAction = (video) => {
  return {
    type: types.SELECTED_VIDEO,
    video
  };
}

export const searchMediaAction = (query) => {
  return {
    type: types.SEARCH_MEDIA_REQUEST,
    query
  };
}