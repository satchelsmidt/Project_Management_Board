//this is the combined redducer for our auth and project reducers
import authReducer from './authReducer'
import projectReducer from './projectReducer'

//import this function to combine our reducers
import {combineReducers} from 'redux'

//function where we pass an object of reducers we want to combine
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export default rootReducer 