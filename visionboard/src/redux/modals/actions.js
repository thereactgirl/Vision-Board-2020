export const SET_ADD_VISION_DIALOG = 'SET_ADD_VISION_DIALOG';

const setAddVisionDialog = (bool) => dispatch => {
    return dispatch({ type: SET_ADD_VISION_DIALOG, payload: bool})
}

export default { setAddVisionDialog };