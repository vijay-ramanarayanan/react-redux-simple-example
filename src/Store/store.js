import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../Reducers/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga'

const sagaMiddleWare = createSagaMiddleWare();


const store = createStore(
    rootReducer, composeWithDevTools(
        applyMiddleware(sagaMiddleWare)
    ));

export default store;