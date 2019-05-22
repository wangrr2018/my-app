import {combineReducers} from 'redux'
const loginInfo = (username = "wrr", action) => {
	switch (action.type) {
		case 'test1':
			return '1'
		case 'test2':
			return '2'
		default:
			return '0'
	}
}
const loginOut = (username = "wrr", action) => {
	switch (action.type) {
		case 'test3':
			return '3'
		case 'test4':
			return '4'
		default:
			return '5'
	}
}
export default combineReducers({
    loginInfo,
    loginOut
})