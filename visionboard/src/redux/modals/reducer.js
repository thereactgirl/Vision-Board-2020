import { SET_ADD_VISION_DIALOG } from './actions';

const init = () => ({
    isAddVisionOpen: false
})

export default (state = init(), action) => {
    switch (action.type) {
        case SET_ADD_VISION_DIALOG:
            return {
                ...state,
                isAddVisionOpen: action.payload
            };
        default: 
        return state;
    }
};