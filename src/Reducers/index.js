import countReducer from './counter'
import newReducer from './new'
import logReducer from './islogged'
import formReducer from './form'
import {combineReducers} from 'redux'

const root = combineReducers({
    counter: countReducer,
    login: logReducer,
    new: newReducer,
    form: formReducer
})

export default root