import {
    LOAD_PHOTOS,
    GET_ERRORS
} from './types';

const init = () => ({
    photos: []
})

export default (state = init(), action) => {
    switch (action.type) {
        case 'GET_ERRORS':
            return action.errors;
        case 'LOAD_PHOTOS':
            return action.photos;
        default:
            return state;
      
    }
  };

