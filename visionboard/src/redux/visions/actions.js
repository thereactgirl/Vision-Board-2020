import axios from 'axios';

import {
        GET_VISIONS_REQUEST,
        GET_VISIONS_SUCCESS,
        GET_VISIONS_ERROR,
        ADD_VISION_REQUEST,
        ADD_VISION_SUCCESS,
        ADD_VISION_ERROR,
        UPDATE_VISION_REQUEST,
        UPDATE_VISION_SUCCESS,
        UPDATE_VISION_ERROR,
        DELETE_VISION_REQUEST,
        DELETE_VISION_SUCCESS,
        DELETE_VISION_ERROR
    } from './types';
import { visions } from '../../data';


const getVisions = () => dispatch => { 
        dispatch({ type: GET_VISIONS_REQUEST })
        
        return axios
            .get('https://vision-board-2020.herokuapp.com/api/visions')
            .then(res => {
                dispatch({ type: GET_VISIONS_SUCCESS, payload: res.data })
            })
            .catch(err => dispatch({ type: GET_VISIONS_ERROR, payload: err }))
        
    
 
}
const addVision = vision => dispatch => {
        dispatch({ type: ADD_VISION_REQUEST })

        axios.post('https://vision-board-2020.herokuapp.com/api/visions', vision)
        .then(res => {
            dispatch({ type: ADD_VISION_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: ADD_VISION_ERROR, payload: err }))
    
}

const editVision = vision => dispatch => {
    dispatch({ type: UPDATE_VISION_REQUEST })

    axios.put(`https://vision-board-2020.herokuapp.com/api/visions/${vision.id}`, vision)
    .then(res => {
        console.log(res);
        dispatch({ type: UPDATE_VISION_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: UPDATE_VISION_ERROR, payload: err }))

}

const deleteVision = vision => dispatch => {
    dispatch({ type: UPDATE_VISION_REQUEST })

    axios.put(`https://vision-board-2020.herokuapp.com/api/visions/${vision.id}`)
    .then(res => {
        console.log(res);
        dispatch({ type: UPDATE_VISION_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: UPDATE_VISION_ERROR, payload: err }))

}

export default {
    getVisions,
    addVision,
    editVision,
    deleteVision
}