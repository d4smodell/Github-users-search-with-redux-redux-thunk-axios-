import {createStore, combineReducers, applyMiddleware} from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import { usersReducer } from './usersReducer'

const reducers = combineReducers({
    form: formReducer,
    users: usersReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))