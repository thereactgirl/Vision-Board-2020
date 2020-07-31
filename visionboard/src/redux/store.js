import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import photos from './photos/reducer';
// import errorsReducer from '../reducers/errors';
import visions from './visions/reducer';
import modals from './modals/reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    photos,
    // errors: errorsReducer,
    visions,
    modals
  }),
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;