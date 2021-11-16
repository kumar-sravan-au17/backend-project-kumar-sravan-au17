import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { allReducer } from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const myStore = createStore(allReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
