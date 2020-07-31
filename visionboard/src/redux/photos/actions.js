import axios from 'axios';
import {
    LOAD_PHOTOS,
    GET_ERRORS
} from './types';
import { BASE_API_URL } from '../../utils/constants';


export const beginAddPhoto = (photo) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('photo', photo);
      await axios.post(`${BASE_API_URL}/photos`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (error) {
      error.response && dispatch(getErrors(error.response.data));
    }
  };
};

export const startLoadPhotos = () => {
  return async (dispatch) => {
    try {
      const photos = await axios.get(`${BASE_API_URL}/photos`);
      dispatch(loadPhotos(photos.data));
    } catch (error) {
      error.response && dispatch(getErrors(error.response.data));
    }
  };
};

export const loadPhotos = (photos) => ({
  type: LOAD_PHOTOS,
  photos
});

export const getErrors = (errors) => ({
    type: GET_ERRORS,
    errors
  });