import { createStore, combineReducers } from 'redux'
import loginInfo from './reducers/loginInfo'

export default createStore(loginInfo)