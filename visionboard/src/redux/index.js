
// global
import { combineReducers } from 'redux';

import visions from './visions/reducer';
import modals from './modals/reducer';

export default () =>
    combineReducers({
        visions, 
        modals
    });