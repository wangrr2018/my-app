import { combineReducers } from 'redux'
import loginInfo from './loginInfo'
import { user } from './user.redux'

const Reducers = combineReducers({
	loginInfo,
	user
})

export default Reducers