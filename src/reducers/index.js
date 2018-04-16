import { combineReducers } from 'redux'

import todos  from './todos'
import goals  from './goals'
import laoding  from './loading'


export default combineReducers({
    todos,
    goals,
    loading,
})